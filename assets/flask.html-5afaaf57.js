import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},p=t(`<h1 id="flask框架" tabindex="-1"><a class="header-anchor" href="#flask框架" aria-hidden="true">#</a> flask框架</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> Blueprint  
  
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>  
  
port <span class="token operator">=</span> <span class="token number">9877</span>  
  
cat <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>  
  
  
<span class="token decorator annotation punctuation">@cat<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/name&#39;</span><span class="token punctuation">)</span>  
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, cat!&#39;</span>  
  
  
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    <span class="token triple-quoted-string string">&quot;&quot;&quot;  
    hello get    ---  
  
  
    responses:      200:        description: 返回用户信息  
        examples:            {                code: 0,                msg: &quot;ok&quot;,                data:                    {                        name: &quot;Tom&quot;,                        uid: 1                    },            }  
    &quot;&quot;&quot;</span>    <span class="token keyword">return</span> <span class="token string">&quot;hello siwadoc&quot;</span>  
  
  
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>cat<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&#39;/cat&#39;</span><span class="token punctuation">)</span>  
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;文档地址=&gt;http://localhost:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">/docs &quot;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 注意不要多待杠 /doc/    app.run(port=port, debug=True)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","flask.html.vue"]]);export{r as default};
