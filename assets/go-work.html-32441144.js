import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const i={},o=e(`<h1 id="go-workspace" tabindex="-1"><a class="header-anchor" href="#go-workspace" aria-hidden="true">#</a> go workspace</h1><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建 workspace 工作区</span>
<span class="token function">mkdir</span> workspace
<span class="token builtin class-name">cd</span> workspace
go work init
<span class="token comment">#创建一个基础项目 demo</span>
<span class="token builtin class-name">cd</span> workspace
<span class="token function">mkdir</span> demo
go mod init demo
<span class="token comment">#添加demo项目到workspace</span>
go work use ./demo
<span class="token comment">#重新运行项目</span>
<span class="token builtin class-name">cd</span> workspace
go run demo/main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="好处" tabindex="-1"><a class="header-anchor" href="#好处" aria-hidden="true">#</a> 好处</h2><p>这里我们在demo项目就可以直接用libs里面的方法了 见demo的main.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;libs/string_lib&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello, go workspace&quot;</span><span class="token punctuation">)</span>
 string_lib<span class="token punctuation">.</span><span class="token function">Greet</span><span class="token punctuation">(</span><span class="token string">&quot;heloo&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[o];function t(l,d){return s(),a("div",null,c)}const r=n(i,[["render",t],["__file","go-work.html.vue"]]);export{r as default};
