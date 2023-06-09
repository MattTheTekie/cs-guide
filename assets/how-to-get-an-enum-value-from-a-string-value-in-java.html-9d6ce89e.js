import{_ as s,r as t,o as c,c as l,d as e,e as a,b as o,a as r}from"./app-3d979d38.js";const d={},u=r(`<h1 id="怎样得到指定名称的枚举类型对应的的字符串类型的枚举常量" tabindex="-1"><a class="header-anchor" href="#怎样得到指定名称的枚举类型对应的的字符串类型的枚举常量" aria-hidden="true">#</a> 怎样得到指定名称的枚举类型对应的的字符串类型的枚举常量</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>假如说我有一个如下的枚举类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Blah</span> <span class="token punctuation">{</span>
    <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">,</span> <span class="token class-name">C</span><span class="token punctuation">,</span> <span class="token class-name">D</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而我想要找出具有指定名称的枚举类型对应的的字符串类型的枚举常量，打个比方<code>&quot;A&quot;</code>对应的值为<code>Blah.A</code>。 此时我应该怎么做？ 我是不是应该使用<code>Enum.valueOf()</code>这个方法？如果是的话，我又该怎么使用它？</p><h3 id="回答" tabindex="-1"><a class="header-anchor" href="#回答" aria-hidden="true">#</a> 回答</h3><p>是的，<code>Blah.valueOf(&quot;A&quot;)</code>将会给你你想要的<code>Blah.A</code><br> 不过需要注意的是，你输入的名字必须是绝对匹配的，像<code>Blah.valueOf(&quot;a&quot;)</code>和<code>Blah.valueOf(&quot;A &quot;)</code>都会抛出<code>IllegalArgumentException</code> 注：第一个表达式<code>a</code> 与<code>A</code>不匹配 第二个表达式<code>A</code>后面多了一个空格</p>`,7),i=e("code",null,"valueOf()",-1),p=e("code",null,"values()",-1),h={href:"https://docs.oracle.com/javase/7/docs/api/java/awt/Dialog.ModalityType.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://stackoverflow.com/questions/604424/how-to-get-an-enum-value-from-a-string-value-in-java",target:"_blank",rel:"noopener noreferrer"};function m(_,f){const n=t("ExternalLinkIcon");return c(),l("div",null,[u,e("p",null,[a("静态方法"),i,a("和"),p,a("在编译时创建并且不会出现在编译后的源码里。但尽管如此，这两个方法还是确实出现在了Java文档里，"),e("a",h,[a("文档连接"),o(n)])]),e("p",null,[a("stackoverflow讨论地址 "),e("a",v,[a("https://stackoverflow.com/questions/604424/how-to-get-an-enum-value-from-a-string-value-in-java"),o(n)])])])}const g=s(d,[["render",m],["__file","how-to-get-an-enum-value-from-a-string-value-in-java.html.vue"]]);export{g as default};