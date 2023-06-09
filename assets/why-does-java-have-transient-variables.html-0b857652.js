import{_ as t,r as o,o as p,c as i,d as n,e as s,b as e,a as l}from"./app-3d979d38.js";const c={},r=n("h1",{id:"transient-关键字的作用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transient-关键字的作用","aria-hidden":"true"},"#"),s(" transient 关键字的作用?")],-1),d={href:"http://docs.oracle.com/javase/specs/jls/se7/html/jls-8.html#jls-8.3.1.3",target:"_blank",rel:"noopener noreferrer"},u=l(`<p>若要理解 transient 关键字的作用,自然需要对序列化有一定的认识.</p><p><strong>序列化</strong></p><p>序列化是用来持久化对象的状态 -- 将对象转化为字节码保存到指定的文件中.类似地,可以通过反序列化,将字节码还原为对象原有的状态.序列化是 Java 中一个比较重要的概念,因为在网络编程中会经常用到序列化与反序列化机制.一个相对若想在网络中传输,就必须转化为字节的形式.而 Serializable 接口就是用来标识某个类或接口可以转化为字节码,Serializable 可以认为是一个标识符,因为它没有任何的方法.</p><p>Serializable 允许我们将一个类转化为字节码,进而在网络传输.可是,一个类中可能存在某些敏感的信息,我们是不想在网络中传输的,这时候我们就需要借助 transient 关键字了.被 transient 关键字标识的 field,不会进行序列化.</p><p>下面通过一个例子说明 transient 关键字的作用.现假设我们需要在网络中传输 Person 类:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> certNo<span class="token punctuation">;</span> <span class="token comment">// 身份证号码</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> certNo<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>certNo <span class="token operator">=</span> certNo<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, certNo=&#39;&quot;</span> <span class="token operator">+</span> certNo <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若不使用 transient 关键字,反序列化时输出的信息是 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person{name=&#39;tianya&#39;, certNo=&#39;12314&#39;, age=23}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们知道,身份证号码属于敏感信息,并不想在网络中传输,这时我们就可以借助 transient 关键字,如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> private transient String certNo;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个时候,通过反序列化获取的 Person 信息如下 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person{name=&#39;tianya&#39;, certNo=&#39;null&#39;, age=23}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),k={href:"http://stackoverflow.com/questions/910374/why-does-java-have-transient-variables",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=o("ExternalLinkIcon");return p(),i("div",null,[r,n("p",null,[n("a",d,[s("Java 语言规范"),e(a)]),s("中提到,transient 关键字用来说明指定属性不进行序列化.")]),u,n("p",null,[s("stackoverflow原址："),n("a",k,[s("http://stackoverflow.com/questions/910374/why-does-java-have-transient-variables"),e(a)])])])}const h=t(c,[["render",v],["__file","why-does-java-have-transient-variables.html.vue"]]);export{h as default};
