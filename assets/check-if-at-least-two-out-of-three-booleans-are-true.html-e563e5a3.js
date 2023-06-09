import{_ as e,r as t,o,c as p,d as a,e as n,b as c,a as l}from"./app-3d979d38.js";const r={},i=l(`<h1 id="给3个布尔变量-当其中有2个或者2个以上为true才返回true" tabindex="-1"><a class="header-anchor" href="#给3个布尔变量-当其中有2个或者2个以上为true才返回true" aria-hidden="true">#</a> 给3个布尔变量，当其中有2个或者2个以上为true才返回true</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>给3个boolean变量，a,b,c，当其中有2个或2个以上为true时才返回true？</p><ul><li>最笨的方法：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">atLeastTwo</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> a<span class="token punctuation">,</span> <span class="token keyword">boolean</span> b<span class="token punctuation">,</span> <span class="token keyword">boolean</span> c<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优雅解法1</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">return</span> a <span class="token operator">?</span> <span class="token punctuation">(</span>b <span class="token operator">||</span> c<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>优雅解法2</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token operator">==</span>b<span class="token punctuation">)</span> <span class="token operator">?</span> a <span class="token operator">:</span> c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>优雅解法3</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token keyword">return</span> a <span class="token operator">^</span> b <span class="token operator">?</span> c <span class="token operator">:</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>优雅解法4</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">return</span> a <span class="token operator">?</span> <span class="token punctuation">(</span>b <span class="token operator">||</span> c<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),u={href:"http://stackoverflow.com/questions/3076078/check-if-at-least-two-out-of-three-booleans-are-true",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=t("ExternalLinkIcon");return o(),p("div",null,[i,a("p",null,[n("stackoverflow链接： "),a("a",u,[n("http://stackoverflow.com/questions/3076078/check-if-at-least-two-out-of-three-booleans-are-true"),c(s)])])])}const b=e(r,[["render",d],["__file","check-if-at-least-two-out-of-three-booleans-are-true.html.vue"]]);export{b as default};