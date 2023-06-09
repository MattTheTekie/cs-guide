import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},p=t(`<h1 id="我的一些ahk脚本" tabindex="-1"><a class="header-anchor" href="#我的一些ahk脚本" aria-hidden="true">#</a> 我的一些ahk脚本</h1><h2 id="原神自动点击剧情" tabindex="-1"><a class="header-anchor" href="#原神自动点击剧情" aria-hidden="true">#</a> 原神自动点击剧情</h2><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code>

<span class="token function">UAC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token function">SwitchIME</span><span class="token punctuation">(</span>dwLayout<span class="token punctuation">)</span><span class="token punctuation">{</span>
    HKL<span class="token operator">:=</span><span class="token builtin">DllCall</span><span class="token punctuation">(</span><span class="token string">&quot;LoadKeyboardLayout&quot;</span><span class="token punctuation">,</span> Str<span class="token punctuation">,</span> dwLayout<span class="token punctuation">,</span> UInt<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token command selector">ControlGetFocus</span><span class="token punctuation">,</span>ctl<span class="token punctuation">,</span>A
    <span class="token command selector">SendMessage</span><span class="token punctuation">,</span><span class="token number">0x50</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>HKL<span class="token punctuation">,</span><span class="token variable">%ctl%</span><span class="token punctuation">,</span>A
<span class="token punctuation">}</span>
<span class="token function">SwitchIME</span><span class="token punctuation">(</span><span class="token number">0x04090409</span><span class="token punctuation">)</span>
<span class="token function">autoClick</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token command selector">Send</span> <span class="token punctuation">{</span><span class="token command selector">Click</span><span class="token punctuation">,</span><span class="token number">1492</span> <span class="token number">802</span><span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token function">setClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token command selector">SetTimer</span><span class="token punctuation">,</span> autoClick<span class="token punctuation">,</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>
<span class="token function">killClick</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token command selector">SetTimer</span><span class="token punctuation">,</span> autoClick<span class="token punctuation">,</span> <span class="token keyword">Off</span>

<span class="token punctuation">}</span>
<span class="token function">genshin_window_exist</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    genshinHwnd <span class="token operator">:=</span> <span class="token builtin">WinExist</span><span class="token punctuation">(</span><span class="token string">&quot;ahk_exe GenshinImpact.exe&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> genshinHwnd
    <span class="token punctuation">{</span>
        genshinHwnd <span class="token operator">:=</span> <span class="token builtin">WinExist</span><span class="token punctuation">(</span><span class="token string">&quot;ahk_exe YuanShen.exe&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token command selector">return</span> genshinHwnd
<span class="token punctuation">}</span>
<span class="token command selector">SetTimer</span><span class="token punctuation">,</span> main<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100</span>
<span class="token comment">;如果窗口存在</span>
<span class="token tag">main</span><span class="token punctuation">:</span>
    genshin_hwnd <span class="token operator">:=</span> <span class="token function">genshin_window_exist</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>genshin_hwnd<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token command selector">SetTimer</span><span class="token punctuation">,</span> main<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">800</span>
        <span class="token command selector">Return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token builtin">WinExist</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> genshin_hwnd<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token command selector">SetTimer</span><span class="token punctuation">,</span> main<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">500</span>
        <span class="token command selector">Return</span>
    <span class="token punctuation">}</span><span class="token keyword">Else</span><span class="token punctuation">{</span>
        genshin_id <span class="token operator">:=</span><span class="token builtin">WinActive</span><span class="token punctuation">(</span><span class="token string">&quot;ahk_exe YuanShen.exe&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> genshin_id<span class="token punctuation">{</span>
            <span class="token symbol">F11</span><span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token function">setClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token symbol">F12</span><span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token function">killClick</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">else</span><span class="token punctuation">{</span> 

            <span class="token command selector">SetTimer</span><span class="token punctuation">,</span> autoClick<span class="token punctuation">,</span> <span class="token keyword">Off</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">UAC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        full_command_line <span class="token operator">:=</span> <span class="token builtin">DllCall</span><span class="token punctuation">(</span><span class="token string">&quot;GetCommandLine&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token punctuation">(</span><span class="token constant">A_IsAdmin</span> or <span class="token builtin">RegExMatch</span><span class="token punctuation">(</span>full_command_line<span class="token punctuation">,</span> <span class="token string">&quot; /restart(?!\\S)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">try</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token constant">A_IsCompiled</span>
                    <span class="token command selector">Run</span> <span class="token operator">*</span><span class="token command selector">RunAs</span> <span class="token string">&quot;%A_ScriptFullPath%&quot;</span> <span class="token operator">/</span>restart
                <span class="token keyword">else</span>
                    <span class="token command selector">Run</span> <span class="token operator">*</span><span class="token command selector">RunAs</span> <span class="token string">&quot;%A_AhkPath%&quot;</span> <span class="token operator">/</span>restart <span class="token string">&quot;%A_ScriptFullPath%&quot;</span>
            <span class="token punctuation">}</span>
            <span class="token command selector">ExitApp</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","my-ahk.html.vue"]]);export{k as default};
