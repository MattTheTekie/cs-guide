import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},p=t(`<h1 id="json相关" tabindex="-1"><a class="header-anchor" href="#json相关" aria-hidden="true">#</a> json相关</h1><p>json串反转义</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>yzq<span class="token punctuation">.</span>hutooltest</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">StringEscapeUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> yanni
 * <span class="token keyword">@date</span> time 2022/3/13 13:45
 * <span class="token keyword">@modified</span> By:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">parseJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> s<span class="token operator">=</span><span class="token string">&quot;{\\&quot;c_25\\&quot;:{\\&quot;filter\\&quot;:{\\&quot;text\\&quot;:\\&quot;[\\\\\\&quot;地区/璃月\\\\\\&quot;,\\\\\\&quot;元素/岩\\\\\\&quot;,\\\\\\&quot;星级/四星\\\\\\&quot;,\\\\\\&quot;武器/长柄武器\\\\\\&quot;]\\&quot;}}}&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringEscapeUtils</span><span class="token punctuation">.</span><span class="token function">unescapeEcmaScript</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","json-parser.html.vue"]]);export{d as default};
