import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},p=t(`<h1 id="安卓已经弃用的" tabindex="-1"><a class="header-anchor" href="#安卓已经弃用的" aria-hidden="true">#</a> 安卓已经弃用的</h1><h2 id="getdrawable-int-id" tabindex="-1"><a class="header-anchor" href="#getdrawable-int-id" aria-hidden="true">#</a> <code>getDrawable(int id)</code></h2><p>虽然getDrawable(int id)已经废弃了，但是依旧还是可以用的。</p><p>如果你的Android版本比较高，那就按照官方的提示，可以使用<code>getDrawable(int, Theme)</code>替代。 使用drawable资源但不为其设置theme主题</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ResourcesCompat</span><span class="token punctuation">.</span><span class="token function">getDrawable</span><span class="token punctuation">(</span><span class="token function">getResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用默认的activity主题</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ContextCompat</span><span class="token punctuation">.</span><span class="token function">getDrawable</span><span class="token punctuation">(</span><span class="token function">getActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用自定义主题</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token class-name">ResourcesCompat</span><span class="token punctuation">.</span><span class="token function">getDrawable</span><span class="token punctuation">(</span><span class="token function">getResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>name<span class="token punctuation">,</span> anotherTheme<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了兼容,可以使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">VERSION</span><span class="token punctuation">.</span><span class="token constant">SDK_INT</span> <span class="token operator">&gt;=</span> <span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">VERSION_CODES</span><span class="token punctuation">.</span><span class="token constant">LOLLIPOP</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> resources<span class="token punctuation">.</span><span class="token function">getDrawable</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> context<span class="token punctuation">.</span><span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> resources<span class="token punctuation">.</span><span class="token function">getDrawable</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onbackpress" tabindex="-1"><a class="header-anchor" href="#onbackpress" aria-hidden="true">#</a> onBackPress</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>  <span class="token annotation builtin">@Deprecated</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Deprecated in Java&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onBackPressed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mTag <span class="token operator">!=</span> <span class="token string-literal singleline"><span class="token string">&quot;activity_constraint&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mTag <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;activity_constraint&quot;</span></span>
            <span class="token function">setContentView</span><span class="token punctuation">(</span>mTag<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onBackPressed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替代</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>
# 在onCreate里面
onBackPressedDispatcher<span class="token punctuation">.</span><span class="token function">addCallback</span><span class="token punctuation">(</span><span class="token keyword">object</span><span class="token operator">:</span> <span class="token function">OnBackPressedCallback</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">handleOnBackPressed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>mTag <span class="token operator">!=</span> <span class="token string-literal singleline"><span class="token string">&quot;activity_constraint&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    mTag <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;activity_constraint&quot;</span></span>
                    <span class="token function">setContentView</span><span class="token punctuation">(</span>mTag<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","android-deprecate.html.vue"]]);export{d as default};