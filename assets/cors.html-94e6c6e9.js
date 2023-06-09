import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const o={},p=t(`<h1 id="asp运行局域网访问" tabindex="-1"><a class="header-anchor" href="#asp运行局域网访问" aria-hidden="true">#</a> asp运行局域网访问</h1><p>打开properties文件夹下面的<code>launchSettings.json</code>然后使用<code>&quot;applicationUrl&quot;: &quot;http://0.0.0.0:5059&quot;,</code></p><p>下面是例子</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://json.schemastore.org/launchsettings.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;iisSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;windowsAuthentication&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;anonymousAuthentication&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;iisExpress&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;applicationUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:15455&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sslPort&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;SimpleApi&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;commandName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Project&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dotnetRunMessages&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;launchBrowser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;launchUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;swagger&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;applicationUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://0.0.0.0:5059&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;environmentVariables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ASPNETCORE_ENVIRONMENT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Development&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;IIS Express&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;commandName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IISExpress&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;launchBrowser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;launchUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;swagger&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;environmentVariables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ASPNETCORE_ENVIRONMENT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Development&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[p];function l(c,r){return s(),a("div",null,e)}const i=n(o,[["render",l],["__file","cors.html.vue"]]);export{i as default};
