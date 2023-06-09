import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e="/cs-guide/assets/douyin1-6407bb3e.webp",p={},o=t(`<h1 id="抖音爬虫" tabindex="-1"><a class="header-anchor" href="#抖音爬虫" aria-hidden="true">#</a> 抖音爬虫</h1><h2 id="获取html" tabindex="-1"><a class="header-anchor" href="#获取html" aria-hidden="true">#</a> 获取html</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了伪造浏览器,需要设置user-agent和cookie</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span>  <span class="token string">&#39;https://www.douyin.com/video/7080363768772971816&#39;</span>
<span class="token comment"># 1. 发送请求</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;Referer&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;https://www.douyin.com/&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; WOW64)pleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4651.0 Sa7.36&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;cookie&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;你的cookie&#39;</span>
<span class="token punctuation">}</span>
resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers <span class="token operator">=</span> headers<span class="token punctuation">)</span>
html<span class="token operator">=</span>resp<span class="token punctuation">.</span>text <span class="token comment"># 这里就是html内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看一下我们要爬的视频地址 <img src="`+e+`" alt="地址"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://v26-web.douyinvod.com/69e8bf321b23ff4f71f475be635e4cfa/624ac07a/video/tos/cn/tos-cn-ve-15c001-alinc2/7c48f7eeebfa4ceb9b53db7fbb588e71/?a=6383&amp;br=573&amp;bt=573&amp;cd=0|0|0|0&amp;ch=5&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=5q_lc5mmnPQJ2XA7HhWwkXAGfdH.C3nJcbZc&amp;l=2022040416541301014203403909D9EFAF&amp;lr=all&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=Mzw0N2Y6ZnY0PDMzNGkzM0ApNDg2ODllOGRlNzg4NztlO2cxLXBlcjRfaDJgLS1kLTBzcy5hMGIyYTUxYWEyXmEwXmE6Yw==&amp;vl=&amp;vr=
它的末尾是\`vr=\`,开头是\`https://\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以构造正则表达式<code>&#39;src(.*?)vr%3D%22&#39;</code>,其实就是<code>src(地址)vr=&quot;</code>来获取视频地址 代码如下</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>title <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;&lt;title data-react-helmet=&quot;true&quot;&gt; (.*?)&lt;/title&gt;&#39;</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
href <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;src(.*?)vr%3D%22&#39;</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># 第一个是清晰度最高的</span>
video_url <span class="token operator">=</span> requests<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>unquote<span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;&quot;:&quot;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https:&#39;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后保存数据即可</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>  video_content <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>video_url<span class="token punctuation">)</span><span class="token punctuation">.</span>content
  <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;抖音高清视频\\\\&#39;</span> <span class="token operator">+</span> title <span class="token operator">+</span> <span class="token string">&#39;.mp4&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fin<span class="token punctuation">:</span>
      fin<span class="token punctuation">.</span>write<span class="token punctuation">(</span>video_content<span class="token punctuation">)</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token operator">+</span><span class="token string">&#39;.mp4文件下载完成！！&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","douyin-spider.html.vue"]]);export{d as default};
