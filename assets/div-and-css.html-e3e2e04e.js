import{_ as p,r as c,o as l,c as o,g as a,b as i,w as u,a as t,d as n,e as s}from"./app-3d979d38.js";const d={},r=t('<h1 id="零基础入门前端开发工程师-应当提前掌握-div-css-布局规范" tabindex="-1"><a class="header-anchor" href="#零基础入门前端开发工程师-应当提前掌握-div-css-布局规范" aria-hidden="true">#</a> 零基础入门前端开发工程师，应当提前掌握 DIV+CSS 布局规范</h1><p><strong>样式命名规范</strong></p><p><img src="https://p26.toutiaoimg.com/large/470e000043a2bccf221e" alt="零基础入门前端开发工程师，应当提前掌握DIV+CSS布局规范"></p><p>id 选择器常用命名规范</p><p><img src="https://p26.toutiaoimg.com/large/470b0001f6a133c60835" alt="零基础入门前端开发工程师，应当提前掌握DIV+CSS布局规范"></p><p>类选择器常用命名规范</p><p><img src="https://p26.toutiaoimg.com/large/470b0001f9d5cf732b27" alt="零基础入门前端开发工程师，应当提前掌握DIV+CSS布局规范"></p>',7),k=t(`<p><strong>全局样式设置</strong></p><p>1.全局样式置顶，并用注释标注为/<em>全局样式</em>/</p><p>2.用一内容定义的样式写在一起，并用注释标注</p><p>3.一个样式里面，多个属性的定义建议写在一行，属性定义之间用&quot;；&quot;隔开</p><p>4.样式中类或者 id 选择器的命名建议使用样式命名规范来书写</p><p>5.自定义选择器名称建议都用小写、尽量使用英文单词，少用拼音，名称中建议少用&quot;-&quot;或者&quot;_&quot;,尽量少用英文缩写。</p><p>/<em>全局样式部分</em>/</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
 <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
 <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;宋体&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
form,
p</span> <span class="token punctuation">{</span>
 <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul</span> <span class="token punctuation">{</span>
 <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">img</span> <span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
 <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfloat</span> <span class="token punctuation">{</span>
 <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
 <span class="token property">line-height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>html 文档书写规范</p><p>1.html 标签代码书写应遵循 xhtml 规范：</p><p>a.Html 标签要全部小写</p><p>b.标签嵌套要对应</p><p>c.成对标签必须关闭，单个标签也需要关闭，如&quot;&lt;..../&gt;&quot;</p><p>d.标签属性需要用引号，且不能简写，如:</p><p>规范写法：<code>&lt;input type=&quot;checkbox&quot; checked=&quot;checked&quot; /&gt;</code></p><p>不规范写法：<code>&lt;input type=&quot;checkbox&quot; checked /&gt;</code></p><p>2.同一模块的 html 代码用注释包含,如：</p>`,17),v=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logobar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

.....

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=n("p",null,"3.Html 通过首行缩进来体现代码结构，如：",-1),b=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("main_nav"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("首 页"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("企业招聘"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,'4.Img 标签需加上"alt"属性',-1);function h(_,y){const e=c("CodeDemo");return l(),o("div",null,[r,a("more"),k,a("-logo广告条开始-"),v,a("-logo广告条结束-"),m,i(e,{id:"code-demo-77",type:"normal",code:"eJyrVsooyc1RslKyScksU8hMsY1Ryk3MzIvPSyyLUbKLyVNQsCnNAdMKNjmZEIaCTaJCRlFqGlCtMlDRy2XTFF4u3GqjnwhVpw9TiEvHkz2NT3bMetY9+0XjDExtNvoQG230gU4CMpRqAXKhNv8="},{default:u(()=>[b]),_:1}),g])}const f=p(d,[["render",h],["__file","div-and-css.html.vue"]]);export{f as default};
