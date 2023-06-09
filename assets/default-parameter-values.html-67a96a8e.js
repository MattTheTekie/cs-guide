import{_ as e,r as o,o as c,c as l,d as n,e as s,b as t,a as p}from"./app-3d979d38.js";const u={},i=p(`<h1 id="java-是否支持默认的参数值" tabindex="-1"><a class="header-anchor" href="#java-是否支持默认的参数值" aria-hidden="true">#</a> Java 是否支持默认的参数值？</h1><p>在 c++ 中，常见到如下的方法定义(param3 默认为 false)：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">MyParameterizedFunction</span><span class="token punctuation">(</span>String param1<span class="token punctuation">,</span> <span class="token keyword">int</span> param2<span class="token punctuation">,</span> <span class="token keyword">bool</span> param3<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那在 java 中，是否也支持这样的定义方式？</p><p>答案是否定的，不过我们可以通过多种方式处理这种参数默认值的情况。</p>`,5),k={id:"创建者模式",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#创建者模式","aria-hidden":"true"},"#",-1),d={href:"http://en.wikipedia.org/wiki/Builder_pattern",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>使用创建者模式，你可以设定部分参数是有默认值，部分参数是可选的。如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StudentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;Eli&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">buildStudent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StudentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                 <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;Spicoli&quot;</span><span class="token punctuation">)</span>
                 <span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
                 <span class="token punctuation">.</span><span class="token function">motto</span><span class="token punctuation">(</span><span class="token string">&quot;Aloha, Mr Hand&quot;</span><span class="token punctuation">)</span>
                 <span class="token punctuation">.</span><span class="token function">buildStudent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法-构造函数-重载" tabindex="-1"><a class="header-anchor" href="#方法-构造函数-重载" aria-hidden="true">#</a> 方法（构造函数）重载</h3><p>如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">Integer</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// here, 0 is a default value for b</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数重载，对于参数比较少的情况下，比较适合；当参数相对多的时候，可以考虑使用静态工厂方法，或添加一个参数辅助对象。</p><p>如果是常规方法重载，可以考虑使用 参数辅助对象，或者重命名多种情况（比如说，有多个开银行卡的重载方法，可以根据需要重命名为 开交行卡，开招行卡 等多种方法）。</p><h3 id="null-的传递" tabindex="-1"><a class="header-anchor" href="#null-的传递" aria-hidden="true">#</a> null 的传递</h3><p>当有多个默认参数时，可以考虑传递 null，当参数为 null 时，将参数设为 默认值。如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">Integer</span> b<span class="token punctuation">,</span> <span class="token class-name">Integer</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b <span class="token operator">=</span> b <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> b <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    c <span class="token operator">=</span> c <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> c <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多参数方式" tabindex="-1"><a class="header-anchor" href="#多参数方式" aria-hidden="true">#</a> 多参数方式</h3><p>当有多个参数，且某些参数可以忽略不设置的情况下，可以考虑使用多参数方式。</p><ul><li>可选的参数类型的一致</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> b1 <span class="token operator">=</span> b<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> b2 <span class="token operator">=</span> b<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可选参数类型不一致</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> b1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> b2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        b2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;b2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-map-作为方法中的参数" tabindex="-1"><a class="header-anchor" href="#使用-map-作为方法中的参数" aria-hidden="true">#</a> 使用 Map 作为方法中的参数</h3><p>当参数很多，且大部分参数都会使用默认值的情况，可以使用 Map 作为方法中的参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> parameters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> 
    <span class="token class-name">Integer</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parameters<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>parameters<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>parameters<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parameters<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token comment">//... </span>
    <span class="token punctuation">}</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token class-name">ImmutableMap</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token function">of</span><span class="token punctuation">(</span>
    <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),m={href:"https://stackoverflow.com/questions/997482/does-java-support-default-parameter-values",target:"_blank",rel:"noopener noreferrer"};function b(g,f){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("h3",k,[r,s(),n("a",d,[s("创建者模式"),t(a)])]),v,n("p",null,[s("stackoverflow原址："),n("a",m,[s("https://stackoverflow.com/questions/997482/does-java-support-default-parameter-values"),t(a)])])])}const q=e(u,[["render",b],["__file","default-parameter-values.html.vue"]]);export{q as default};
