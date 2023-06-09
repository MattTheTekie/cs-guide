import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},p=e(`<h1 id="linux护眼软件" tabindex="-1"><a class="header-anchor" href="#linux护眼软件" aria-hidden="true">#</a> linux护眼软件</h1><p>manjaro安装redshift软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kate   ～/.config/redshift.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加下面的东西</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>redshift<span class="token punctuation">]</span>
<span class="token punctuation">;</span> 白天屏幕温度
temp-day<span class="token operator">=</span><span class="token number">4200</span>
<span class="token punctuation">;</span> 夜晚屏幕温度
temp-night<span class="token operator">=</span><span class="token number">4200</span>
<span class="token punctuation">;</span> 昼夜是否平滑过度<span class="token punctuation">(</span><span class="token number">1</span>/0<span class="token punctuation">)</span>
<span class="token assign-left variable">transition</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">;</span> 全局屏幕亮度
<span class="token punctuation">;</span><span class="token assign-left variable">brightness</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">;</span> 昼夜屏幕亮度<span class="token punctuation">(</span>version <span class="token operator">&gt;=</span> <span class="token number">1.8</span><span class="token punctuation">)</span>
brightness-day<span class="token operator">=</span><span class="token number">1</span>
brightness-night<span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">;</span> 屏幕gamma
<span class="token assign-left variable">gamma</span><span class="token operator">=</span><span class="token number">0.9</span>
<span class="token punctuation">;</span> 位置提供方式<span class="token punctuation">(</span>redshift <span class="token parameter variable">-l</span> list<span class="token punctuation">)</span>
location-provider<span class="token operator">=</span>manual
<span class="token punctuation">;</span> 调整工具<span class="token punctuation">(</span>redshift <span class="token parameter variable">-m</span> list<span class="token punctuation">)</span>
adjustment-method<span class="token operator">=</span>randr
<span class="token punctuation">[</span>manual<span class="token punctuation">]</span>
<span class="token punctuation">;</span> 位置提供方式设置
<span class="token punctuation">;</span> 经纬度<span class="token punctuation">(</span>北京<span class="token punctuation">)</span>
<span class="token assign-left variable">lat</span><span class="token operator">=</span><span class="token number">39.90</span>
<span class="token assign-left variable">lon</span><span class="token operator">=</span><span class="token number">116.41</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[p];function l(o,c){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","red-shift.html.vue"]]);export{u as default};
