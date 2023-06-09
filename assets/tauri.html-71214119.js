import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const p={},o=t(`<h1 id="tauri教程" tabindex="-1"><a class="header-anchor" href="#tauri教程" aria-hidden="true">#</a> tauri教程</h1><h2 id="使用nsis" tabindex="-1"><a class="header-anchor" href="#使用nsis" aria-hidden="true">#</a> 使用nsis</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;beforeDevCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn dev&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;beforeBuildCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;devPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:1420&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;distDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;withGlobalTauri&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;package&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tauri-nsis&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tauri&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;allowlist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bundle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;icons/32x32.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icons/128x128.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icons/128x128@2x.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icons/icon.icns&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icons/icon.ico&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab.yzq.tauri-nsis&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nsis&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;allowDowngrades&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;certificateThumbprint&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;digestAlgorithm&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nsis&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;SimpChinese&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;English&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;displayLanguageSelector&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timestampUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tsp&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;webviewFixedRuntimePath&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;webviewInstallMode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;skip&quot;</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wix&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;csp&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;updater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;fullscreen&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resizable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tauri-nsis&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">600</span> 
        
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function l(u,i){return s(),a("div",null,e)}const r=n(p,[["render",l],["__file","tauri.html.vue"]]);export{r as default};
