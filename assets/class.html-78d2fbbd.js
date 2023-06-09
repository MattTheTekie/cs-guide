import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},p=e(`<h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1><h2 id="kotlin-扩展" tabindex="-1"><a class="header-anchor" href="#kotlin-扩展" aria-hidden="true">#</a> Kotlin 扩展</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Shape

<span class="token keyword">class</span> Rectangle<span class="token operator">:</span> <span class="token function">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">fun</span> Shape<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;Shape&quot;</span></span>

<span class="token keyword">fun</span> Rectangle<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;Rectangle&quot;</span></span>

<span class="token keyword">fun</span> <span class="token function">printClassName</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>    

<span class="token function">printClassName</span><span class="token punctuation">(</span><span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>arg<span class="token operator">:</span>Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> rect<span class="token operator">=</span><span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    rect<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像compose中的<code>18.dp</code>就是拓展</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> Float<span class="token punctuation">.</span>dp
  <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> TypedValue<span class="token punctuation">.</span><span class="token function">applyDimension</span><span class="token punctuation">(</span>
    TypedValue<span class="token punctuation">.</span>COMPLEX_UNIT_DIP<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">,</span>
    Resources<span class="token punctuation">.</span><span class="token function">getSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>displayMetrics
  <span class="token punctuation">)</span>

<span class="token operator">..</span><span class="token punctuation">.</span>

<span class="token keyword">val</span> RADIUS <span class="token operator">=</span> <span class="token number">200f</span><span class="token punctuation">.</span>dp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","class.html.vue"]]);export{r as default};
