import{_ as e,r as c,o as t,c as p,d as s,e as n,b as l,a as i}from"./app-3d979d38.js";const o={},r=s("h1",{id:"代码规范",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码规范","aria-hidden":"true"},"#"),n(" 代码规范")],-1),d={class:"hint-container tip"},u=s("p",{class:"hint-container-title"},"提示",-1),k={href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/fundamentals/coding-style/coding-conventions",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="帕斯卡拼写法" tabindex="-1"><a class="header-anchor" href="#帕斯卡拼写法" aria-hidden="true">#</a> 帕斯卡拼写法</h2><p>命名 class、record 或 struct 时，使用 pascal 大小写（“PascalCasing”）。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">record</span> <span class="token class-name">PhysicalAddress</span><span class="token punctuation">(</span>
    <span class="token class-name"><span class="token keyword">string</span></span> Street<span class="token punctuation">,</span>
    <span class="token class-name"><span class="token keyword">string</span></span> City<span class="token punctuation">,</span>
    <span class="token class-name"><span class="token keyword">string</span></span> StateOrProvince<span class="token punctuation">,</span>
    <span class="token class-name"><span class="token keyword">string</span></span> ZipCode<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">struct</span> <span class="token class-name">ValueCoordinate</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命名 interface 时，使用 pascal 大小写并在名称前面加上前缀 I。 这可以清楚地向使用者表明这是 interface</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IWorkerQueue</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命名类型的 public 成员（例如字段、属性、事件、方法和本地函数）时，请使用 pascal 大小写。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleEvents</span>
<span class="token punctuation">{</span>
    <span class="token comment">// A public field, these should be used sparingly</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">bool</span></span> IsValid<span class="token punctuation">;</span>

    <span class="token comment">// An init-only property</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IWorkerQueue</span> WorkerQueue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">init</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">// An event</span>
    <span class="token keyword">public</span> <span class="token keyword">event</span> <span class="token class-name">Action</span> EventProcessing<span class="token punctuation">;</span>

    <span class="token comment">// Method</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">StartEventProcessing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Local function</span>
        <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">CountQueueItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WorkerQueue<span class="token punctuation">.</span>Count<span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="驼峰式大小写" tabindex="-1"><a class="header-anchor" href="#驼峰式大小写" aria-hidden="true">#</a> 驼峰式大小写</h2><p>命名 private 或 internal 字段时，使用驼峰式大小写（“camelCasing”），并且它们以 _ 作为前缀。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">IWorkerQueue</span> _workerQueue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用为 private 或 internal 的static 字段时 请使用 s_前缀，对于线程静态，请使用 t_。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">IWorkerQueue</span> s_workerQueue<span class="token punctuation">;</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ThreadStatic</span></span><span class="token punctuation">]</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">TimeSpan</span> t_timeSpan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写方法参数时，请使用驼峰式大小写。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">SomeMethod</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> someNumber<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">bool</span></span> isValid<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>linq使用</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> seattleCustomers <span class="token operator">=</span> <span class="token keyword">from</span> customer <span class="token keyword">in</span> customers
                       <span class="token keyword">where</span> <span class="token class-name">customer</span><span class="token punctuation">.</span>City <span class="token operator">==</span> <span class="token string">&quot;Seattle&quot;</span>
                       <span class="token keyword">select</span> customer<span class="token punctuation">.</span>Name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function m(b,h){const a=c("ExternalLinkIcon");return t(),p("div",null,[r,s("div",d,[u,s("p",null,[s("a",k,[n("https://docs.microsoft.com/zh-cn/dotnet/csharp/fundamentals/coding-style/coding-conventions"),l(a)])])]),v])}const g=e(o,[["render",m],["__file","coding-style.html.vue"]]);export{g as default};
