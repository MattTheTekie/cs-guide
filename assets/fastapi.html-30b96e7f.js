import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const p={},o=t(`<h1 id="fastapi" tabindex="-1"><a class="header-anchor" href="#fastapi" aria-hidden="true">#</a> fastapi</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> Union  
  
<span class="token keyword">import</span> uvicorn  
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI  
  
app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>  
  
port <span class="token operator">=</span> <span class="token number">9011</span>  
  
  
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">def</span> <span class="token function">read_root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">}</span>  
  
  
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/items/{item_id}&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">def</span> <span class="token function">read_item</span><span class="token punctuation">(</span>item_id<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> q<span class="token punctuation">:</span> Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;item_id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">,</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span> q<span class="token punctuation">}</span>  
  
  
<span class="token comment"># 文档 https://www.cnblogs.com/liuweida/p/14324604.htmlif __name__ == &#39;__main__&#39;:  </span>
    <span class="token comment"># uvicorm.run(文件名:app),不然会出现 ERROR: Error loading ASGI app. Could not import module &quot;main&quot;    # 启动服务，因为我们这个文件叫做 main.py    # 所以需要启动 main.py 里面的 app    # 第一个参数 &quot;main:app&quot; 就表示这个含义  </span>
    <span class="token comment"># 然后是 host 和 port 表示监听的 ip 和端口  </span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;http://localhost:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">/docs&quot;</span></span><span class="token punctuation">)</span>  
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&quot;fast_demo:app&quot;</span><span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span>port<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function i(c,l){return s(),a("div",null,e)}const r=n(p,[["render",i],["__file","fastapi.html.vue"]]);export{r as default};
