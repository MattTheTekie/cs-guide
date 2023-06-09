import{_ as e,r as t,o,c as p,d as s,e as n,b as c,a as i}from"./app-3d979d38.js";const l={},r=i(`<h1 id="添加静态文件" tabindex="-1"><a class="header-anchor" href="#添加静态文件" aria-hidden="true">#</a> 添加静态文件</h1><h2 id="第一种-使用property文件" tabindex="-1"><a class="header-anchor" href="#第一种-使用property文件" aria-hidden="true">#</a> 第一种,使用property文件</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token punctuation">.</span>mvc<span class="token punctuation">.</span><span class="token keyword">static</span><span class="token operator">-</span>path<span class="token operator">-</span>pattern<span class="token operator">=</span><span class="token operator">/</span><span class="token keyword">static</span><span class="token doc-comment comment">/**
spring.resources.static-locations=classpath:/static/
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二种-使用自定义" tabindex="-1"><a class="header-anchor" href="#第二种-使用自定义" aria-hidden="true">#</a> 第二种,使用自定义</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResourceHandlerRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">;</span>
 
<span class="token doc-comment comment">/**
 * 静态资源映射
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyWebMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/static/**&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/static/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u={href:"http://localhost:8080/static/java.png",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,s("p",null,[n("输入"),s("a",u,[n("http://localhost:8080/static/java.png"),c(a)]),n("就可以访问了")])])}const b=e(l,[["render",d],["__file","add-static-files.html.vue"]]);export{b as default};
