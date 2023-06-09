import{_ as s,o as n,c as a,a as e}from"./app-3d979d38.js";const o={},t=e(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><h2 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># mysql –u用户名 [–h主机名或者IP地址,-P端口号] –p密码</span>
<span class="token comment"># 例子</span>
 mysql <span class="token operator">-</span>h127<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token number">.1</span> <span class="token operator">-</span>P3306 <span class="token operator">-</span>uroot <span class="token operator">-</span>prootpassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程连接" tabindex="-1"><a class="header-anchor" href="#远程连接" aria-hidden="true">#</a> 远程连接</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 你想root使用123456从&#39;192.168.188.106&#39;主机连接到mysql服务器 wabg库下面所有表的话。</span>
MySQL<span class="token operator">&gt;</span> <span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">on</span> wabg<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span>  root<span class="token variable">@&#39;192.168.188.106&#39;</span>  identified <span class="token keyword">by</span> <span class="token string">&#39;123456&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>
<span class="token comment"># 你想myuser使用mypassword从任何主机连接到mysql服务器的话</span>
MySQL<span class="token operator">&gt;</span> <span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span>  <span class="token string">&#39;myuser&#39;</span><span class="token variable">@&#39;%&#39;</span>  identified <span class="token keyword">by</span> <span class="token string">&#39;mypassword&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>
<span class="token comment">#然后</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2><h3 id="查看数据库" tabindex="-1"><a class="header-anchor" href="#查看数据库" aria-hidden="true">#</a> 查看数据库</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 显示数据库</span>
 <span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>

<span class="token comment"># 选择数据库</span>
<span class="token keyword">USE</span> test<span class="token punctuation">;</span>
<span class="token comment"># 创建一个不存在的数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> test<span class="token punctuation">;</span>
<span class="token comment"># 查看定义</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> test
<span class="token comment"># 创建一个不知道是否存在的数据库</span>
 <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">if</span> <span class="token operator">not</span>  <span class="token keyword">exists</span> test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> test2<span class="token punctuation">;</span>
<span class="token comment"># 删除一个不确定的数据库</span>
<span class="token keyword">drop</span> <span class="token keyword">database</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> test2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[t];function l(c,d){return n(),a("div",null,p)}const r=s(o,[["render",l],["__file","basic.html.vue"]]);export{r as default};
