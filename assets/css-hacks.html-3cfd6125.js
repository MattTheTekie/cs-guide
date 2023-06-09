import{_ as t,r as e,o,c,d as s,e as n,b as l,a}from"./app-3d979d38.js";const i={},u=a(`<h1 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack" aria-hidden="true">#</a> css hack</h1><h2 id="透明度问题" tabindex="-1"><a class="header-anchor" href="#透明度问题" aria-hidden="true">#</a> 透明度问题</h2><blockquote><p>如果我们给父元素添加opacity:0.4后，子元素的red颜色也变成了0.4的透明度</p></blockquote><p>解决方法： 父元素的透明度用rgba的方法 ,子集可以用opacity了</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
# 或者使用hex
<span class="token property">background</span><span class="token punctuation">:</span>#ffffff67<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={href:"https://blog.csdn.net/ezconn/article/details/90052114?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-1&spm=1001.2101.3001.4242",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="活用less-遍历生成margin-padding-fontsize等类名" tabindex="-1"><a class="header-anchor" href="#活用less-遍历生成margin-padding-fontsize等类名" aria-hidden="true">#</a> 活用less：遍历生成margin/padding/fontSize等类名</h2><p>起因： 之前项目里写margin/padding之类的样式都是用的穷举的方式，实在觉得冗余又繁琐。下面直接贴代码，解放你的双手</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*
    margin padding fontSize width 通用样式表
    免去你每次重写样式的烦恼
    marked by Jacky
*/</span>
<span class="token selector">.loopStyle(<span class="token variable">@counter</span>) when (<span class="token variable">@counter</span> &gt; 0)</span> <span class="token punctuation">{</span>
    <span class="token selector">.p-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p-t-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p-r-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p-b-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p-l-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.m-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.m-t-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.m-r-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.m-b-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.m-l-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.fz-@{counter}</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1vw <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.width@{counter}</span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 1% <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    .<span class="token function">loopStyle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">@counter</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 递归调用自身</span>
<span class="token punctuation">}</span>
   

.<span class="token function">loopStyle</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">@selectors<span class="token punctuation">:</span></span> <span class="token function">range</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">each</span><span class="token punctuation">(</span><span class="token atrule">@selectors, .<span class="token punctuation">(</span>@v, @k<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token function">each</span><span class="token punctuation">(</span><span class="token atrule">@selectors</span> <span class="token punctuation">{</span>
    <span class="token selector">.m-@{v}-@{value}</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 1px<span class="token operator">*</span><span class="token variable">@v</span> 1px<span class="token operator">*</span><span class="token variable">@value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用:</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>&lt;div className=<span class="token string">&quot;m-t-10&quot;</span>&gt;&lt;<span class="token operator">/</span>div&gt; <span class="token comment">// 对应less样式 marginTop: 10vw</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用scss</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token atrule">@for $i from 1 through 200</span> <span class="token punctuation">{</span>
  <span class="token selector">.m-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.m-t-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.m-b-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.m-l-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.m-r-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
 
  <span class="token selector">.p-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.p-t-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.p-b-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.p-l-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.p-r-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
 
  <span class="token selector">.fz-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$i<span class="token operator">/</span>100<span class="token punctuation">)</span><span class="token operator">+</span>rem<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(v,m){const p=e("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("透明度对照表见: "),s("a",r,[n("链接"),l(p)]),n(" ​")]),k])}const g=t(i,[["render",d],["__file","css-hacks.html.vue"]]);export{g as default};