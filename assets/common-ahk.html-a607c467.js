import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},o=e(`<h1 id="常用的函数" tabindex="-1"><a class="header-anchor" href="#常用的函数" aria-hidden="true">#</a> 常用的函数</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>单例模式</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code># SingleInstance<span class="token punctuation">,</span> Force
<span class="token command selector">SendMode</span> <span class="token command selector">Input</span>
<span class="token command selector">SetWorkingDir</span><span class="token punctuation">,</span> <span class="token variable">%A_ScriptDir%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="判断窗口是否存在" tabindex="-1"><a class="header-anchor" href="#判断窗口是否存在" aria-hidden="true">#</a> 判断窗口是否存在</h2><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token keyword">if</span> <span class="token builtin">WinActive</span><span class="token punctuation">(</span><span class="token string">&quot;ahk_class Notepad&quot;</span><span class="token punctuation">)</span> or <span class="token builtin">WinActive</span><span class="token punctuation">(</span><span class="token string">&quot;ahk_class&quot;</span> ClassName<span class="token punctuation">)</span>
    <span class="token command selector">WinClose</span> <span class="token comment">; 使用 WinActive 找到的窗口.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="等待窗口激活" tabindex="-1"><a class="header-anchor" href="#等待窗口激活" aria-hidden="true">#</a> 等待窗口激活</h2><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token directive important">#SingleInstance</span><span class="token punctuation">,</span> Force
<span class="token command selector">SendMode</span> <span class="token command selector">Input</span>
<span class="token command selector">SetWorkingDir</span><span class="token punctuation">,</span> <span class="token variable">%A_ScriptDir%</span>

<span class="token command selector">Run</span><span class="token punctuation">,</span> notepad<span class="token operator">.</span>exe
<span class="token command selector">WinWaitActive</span><span class="token punctuation">,</span> <span class="token keyword">ahk_exe</span> Notepad3<span class="token operator">.</span>exe<span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">5</span>
<span class="token keyword">if</span> <span class="token constant">ErrorLevel</span>
<span class="token punctuation">{</span>
    <span class="token command selector">MsgBox</span><span class="token punctuation">,</span> <span class="token command selector">WinWait</span> timed out<span class="token operator">.</span>
    <span class="token command selector">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token command selector">MsgBox</span><span class="token punctuation">,</span> notepad actived<span class="token operator">!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[o];function i(l,p){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","common-ahk.html.vue"]]);export{r as default};
