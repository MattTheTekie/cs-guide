import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},o=e(`<h1 id="fiber教程" tabindex="-1"><a class="header-anchor" href="#fiber教程" aria-hidden="true">#</a> fiber教程</h1><h2 id="显示所有路由" tabindex="-1"><a class="header-anchor" href="#显示所有路由" aria-hidden="true">#</a> 显示所有路由</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">createRouteMap</span><span class="token punctuation">(</span>engine <span class="token operator">*</span>fiber<span class="token punctuation">.</span>App<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 routes <span class="token operator">:=</span> engine<span class="token punctuation">.</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> route <span class="token operator">:=</span> <span class="token keyword">range</span> routes <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> r <span class="token operator">:=</span> <span class="token keyword">range</span> route <span class="token punctuation">{</span>
   color<span class="token punctuation">.</span><span class="token function">Redln</span><span class="token punctuation">(</span><span class="token string">&quot;[debug]&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Method<span class="token punctuation">,</span> r<span class="token punctuation">.</span>Path<span class="token punctuation">,</span> r<span class="token punctuation">.</span>Params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(i,u){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","gofiber.html.vue"]]);export{r as default};
