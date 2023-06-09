import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const p={},o=t(`<h1 id="os" tabindex="-1"><a class="header-anchor" href="#os" aria-hidden="true">#</a> os</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;runtime&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/shirou/gopsutil/cpu&quot;</span>
    <span class="token string">&quot;github.com/shirou/gopsutil/disk&quot;</span>
    <span class="token string">&quot;github.com/shirou/gopsutil/load&quot;</span>
    <span class="token string">&quot;github.com/shirou/gopsutil/mem&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    B  <span class="token operator">=</span> <span class="token number">1</span>
    KB <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> B
    MB <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> KB
    GB <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> MB
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">DiskCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">OSCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">CPUCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">RAMCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//服务器硬盘使用量</span>
<span class="token keyword">func</span> <span class="token function">DiskCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> disk<span class="token punctuation">.</span><span class="token function">Usage</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
    usedMB <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Used<span class="token punctuation">)</span> <span class="token operator">/</span> MB
    usedGB <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Used<span class="token punctuation">)</span> <span class="token operator">/</span> GB
    totalMB <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Total<span class="token punctuation">)</span> <span class="token operator">/</span> MB
    totalGB <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Total<span class="token punctuation">)</span> <span class="token operator">/</span> GB
    usedPercent <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>UsedPercent<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Free space: %dMB (%dGB) / %dMB (%dGB) | Used: %d%%\\n&quot;</span><span class="token punctuation">,</span> usedMB<span class="token punctuation">,</span> usedGB<span class="token punctuation">,</span> totalMB<span class="token punctuation">,</span> totalGB<span class="token punctuation">,</span> usedPercent<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//OS</span>
<span class="token keyword">func</span> <span class="token function">OSCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;goOs:%s,compiler:%s,numCpu:%d,version:%s,numGoroutine:%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span>GOOS<span class="token punctuation">,</span> runtime<span class="token punctuation">.</span>Compiler<span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">Version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//CPU 使用量</span>
<span class="token keyword">func</span> <span class="token function">CPUCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cores<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> cpu<span class="token punctuation">.</span><span class="token function">Counts</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

    cpus<span class="token punctuation">,</span> err <span class="token operator">:=</span> cpu<span class="token punctuation">.</span><span class="token function">Percent</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> cpus <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;cpu%d : %f%%\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    a<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> load<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    l1 <span class="token operator">:=</span> a<span class="token punctuation">.</span>Load1
    l5 <span class="token operator">:=</span> a<span class="token punctuation">.</span>Load5
    l15 <span class="token operator">:=</span> a<span class="token punctuation">.</span>Load15
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>l5<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>l15<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cores<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//内存使用量</span>
<span class="token keyword">func</span> <span class="token function">RAMCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> mem<span class="token punctuation">.</span><span class="token function">VirtualMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    usedMB <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Used<span class="token punctuation">)</span> <span class="token operator">/</span> MB
    totalMB <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Total<span class="token punctuation">)</span> <span class="token operator">/</span> MB
    usedPercent <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>UsedPercent<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;usedMB:%d,totalMB:%d,usedPercent:%d&quot;</span><span class="token punctuation">,</span> usedMB<span class="token punctuation">,</span> totalMB<span class="token punctuation">,</span> usedPercent<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","os.html.vue"]]);export{k as default};
