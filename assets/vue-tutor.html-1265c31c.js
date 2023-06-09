import{_ as c,r as i,o,c as d,d as n,e as s,b as a,w as u,t as p,a as t}from"./app-3d979d38.js";const r={},v=n("h1",{id:"vue-渐进式javascript框架",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-渐进式javascript框架","aria-hidden":"true"},"#"),s(" Vue -渐进式JavaScript框架")],-1),m=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),b={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://devtools.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener noreferrer"},q={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://ssr.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},w=n("li",null,"Vue.js 是一套构建用户界面(UI)的渐进式JavaScript框架",-1),V=t(`<h3 id="学习vue要转化思想" tabindex="-1"><a class="header-anchor" href="#学习vue要转化思想" aria-hidden="true">#</a> 学习Vue要转化思想</h3><ul><li>不要在想着怎么操作DOM(jquery思想)，而是想着如何操作数据！！！</li></ul><h2 id="起步-hello-vue" tabindex="-1"><a class="header-anchor" href="#起步-hello-vue" aria-hidden="true">#</a> 起步 - Hello Vue</h2><h3 id="使用vue-cli工具" tabindex="-1"><a class="header-anchor" href="#使用vue-cli工具" aria-hidden="true">#</a> 使用vue-cli工具</h3><ul><li>安装：<code>npm i -g @vue/cli</code></li></ul><blockquote><p>vue-cli是什么? Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：</p></blockquote><p>通过 @vue/cli 搭建交互式的项目脚手架。 通过 @vue/cli + @vue/cli-service-global 快速开始零配置原型开发。 一个运行时依赖 (@vue/cli-service)，该依赖：</p><ul><li><p>可升级；</p></li><li><p>基于 webpack 构建，并带有合理的默认配置；</p></li><li><p>可以通过项目内的配置文件进行配置；</p></li><li><p>可以通过插件进行扩展。</p></li><li><p>一个丰富的官方插件集合，集成了前端生态中最好的工具。</p></li><li><p>一套完全图形化的创建和管理 Vue.js 项目的用户界面。</p></li><li></li></ul><blockquote><p>如何使用?</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//创建一个项目
vue create your-app
//之后按照提示来就可以

vue ui  //使用可视化界面配置项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加webpack插件" tabindex="-1"><a class="header-anchor" href="#添加webpack插件" aria-hidden="true">#</a> 添加webpack插件</h4><p>比如...</p><h3 id="使用vite开发" tabindex="-1"><a class="header-anchor" href="#使用vite开发" aria-hidden="true">#</a> 使用vite开发</h3>`,13),M={href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> create vite <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者 yarn：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> create vite <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
<span class="token function">yarn</span>
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),O={class:"hint-container tip"},S=n("p",{class:"hint-container-title"},"提示",-1),A={href:"https://sfc.vuejs.org/#eNo9j71uwzAMhF+F5eIWqCV0NZQA3foGXbikjpw40B9EOR0EvXspp8imu9N9OFb8TEndN4sTGp7zmgqwLVs6Ulh9irlAhWwXaLDk6GGQrwMFCnMMXMDzBQ49fx2+rHMRvmN255fhjYLRD5yARBTrkzsVKwrAXD+Ote7l1owWtbtrSFuB++jj2boDoeSEEhn9bOM7PlaN/pTUjWOQ3bW36T9gwgl2p3uytmvCaymJJ615mfu1N1YxX7S8VN5CWb1Vlv34k+Mv2yxgwo5oFBq2P3/sZE8=",target:"_blank",rel:"noopener noreferrer"},C=n("p",null,"创建一个hellowold程序",-1),U=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("{{msg}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function-variable function"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'hello world'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".box span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=t(`<h3 id="vue实例" tabindex="-1"><a class="header-anchor" href="#vue实例" aria-hidden="true">#</a> Vue实例</h3><ul><li>注意 1：<strong>先在data中声明数据，再使用数据</strong></li><li>注意 2：可以通过 <code>vm.$data</code> 访问到data中的所有属性，或者 <code>vm.msg</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;大家好，...&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

vm<span class="token punctuation">.</span>$data<span class="token punctuation">.</span>msg <span class="token operator">===</span> vm<span class="token punctuation">.</span>msg <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h3><ul><li>最常用的方式：<code>Mustache(插值语法)</code>，也就是 <code>{{}}</code> 语法</li><li>解释：<code>{{}}</code>从数据对象<code>data</code>中获取数据</li><li>说明：数据对象的属性值发生了改变，插值处的内容都会更新</li><li>说明：<code>{{}}</code>中只能出现JavaScript表达式 而不能解析js语句</li><li>注意：<strong>Mustache 语法不能作用在 HTML 元素的属性上</strong></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello, {{ msg }}.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ 1 + 2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ isOk ? &#39;yes&#39;: &#39;no&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- ！！！错误示范！！！ --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ err }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向数据绑定-vue-two-way-data-binding" tabindex="-1"><a class="header-anchor" href="#双向数据绑定-vue-two-way-data-binding" aria-hidden="true">#</a> 双向数据绑定 Vue two way data binding</h2>`,7),T=t("<li>双向数据绑定：将DOM与Vue实例的data数据绑定到一起，彼此之间相互影响 <ul><li>数据的改变会引起DOM的改变</li><li>DOM的改变也会引起数据的变化</li></ul></li><li>原理：<code>Object.defineProperty</code>中的<code>get</code>和<code>set</code>方法 <ul><li><code>getter</code>和<code>setter</code>：访问器</li><li>作用：指定<code>读取或设置</code>对象属性值的时候，执行的操作</li></ul></li>",2),B={href:"https://vuejs.org/guide/extras/reactivity-in-depth.html",target:"_blank",rel:"noopener noreferrer"},$={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"},L=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*  defineProperty语法 介绍 */</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 设置 obj.msg = &quot;1&quot; 时set方法会被系统调用 参数分别是设置后和设置前的值</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 读取 obj.msg 时get方法会被系统调用</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span> <span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue双向绑定的极简实现" tabindex="-1"><a class="header-anchor" href="#vue双向绑定的极简实现" aria-hidden="true">#</a> Vue双向绑定的极简实现</h3>`,2),N={href:"https://segmentfault.com/a/1190000006599500",target:"_blank",rel:"noopener noreferrer"},H=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 示例 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>txt<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> txt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    sp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;sp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 给对象obj添加msg属性，并设置setter访问器</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 设置 obj.msg  当obj.msg反生改变时set方法将会被调用  </span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当obj.msg被赋值时 同时设置给 input/span</span>
    txt<span class="token punctuation">.</span>value <span class="token operator">=</span> newVal
    sp<span class="token punctuation">.</span>innerText <span class="token operator">=</span> newVal
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 监听文本框的改变 当文本框输入内容时 改变obj.msg</span>
txt<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>msg <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态添加数据的注意点" tabindex="-1"><a class="header-anchor" href="#动态添加数据的注意点" aria-hidden="true">#</a> 动态添加数据的注意点</h3><ul><li>注意：只有<code>data</code>中的数据才是响应式的，动态添加进来的数据默认为非响应式</li><li>可以通过以下方式实现动态添加数据的响应式 <ul><li>1 <code>Vue.set(object, key, value)</code> - 适用于添加单个属性</li><li>2 <code>Object.assign()</code> - 适用于添加多个属性</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">stu</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/* Vue.set */</span>
Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>stu<span class="token punctuation">,</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/* Object.assign 将参数中的所有对象属性和值 合并到第一个参数 并返回合并后的对象*/</span>
vm<span class="token punctuation">.</span>stu <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> vm<span class="token punctuation">.</span>stu<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">180</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步dom更新" tabindex="-1"><a class="header-anchor" href="#异步dom更新" aria-hidden="true">#</a> 异步DOM更新</h3><ul><li>说明：Vue 异步执行 DOM 更新，监视所有数据改变，一次性更新DOM</li><li>优势：可以去除重复数据，对于避免不必要的计算和 避免重复 DOM 操作上，非常重要</li><li>如果需要那到更新后dom中的数据 则需要通过 <code>Vue.nextTick(callback)</code>：在DOM更新后，执行某个操作（属于DOM操作） <ul><li>实例调用<code>vm.$nextTick(function () {})</code></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods: {
  fn() {
    this.msg = &#39;change&#39;
    this.$nextTick(function () {
      console.log(&#39;$nextTick中打印：&#39;, this.$el.children[0].innerText);
    })
    console.log(&#39;直接打印：&#39;, this.$el.children[0].innerText);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><ul><li>解释：指令 (Directives) 是带有 <code>v-</code> 前缀的特殊属性</li><li>作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</li></ul><h3 id="v-text" tabindex="-1"><a class="header-anchor" href="#v-text" aria-hidden="true">#</a> v-text</h3><ul><li>解释：更新DOM对象的 textContent</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1 v-text=&quot;msg&quot;&gt;&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html" aria-hidden="true">#</a> v-html</h3><ul><li>解释：更新DOM对象的 innerHTML</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1 v-html=&quot;msg&quot;&gt;&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h3><ul><li>作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</li><li>语法：<code>v-bind:title=&quot;msg&quot;</code></li><li>简写：<code>:title=&quot;msg&quot;</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 完整语法 --&gt;
&lt;a v-bind:href=&quot;url&quot;&gt;&lt;/a&gt;
&lt;!-- 缩写 --&gt;
&lt;a :href=&quot;url&quot;&gt;&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on" aria-hidden="true">#</a> v-on</h3><ul><li>作用：绑定事件</li><li>语法：<code>v-on:click=&quot;say&quot;</code> or <code>v-on:click=&quot;say(&#39;参数&#39;, $event)&quot;</code></li><li>简写：<code>@click=&quot;say&quot;</code></li><li>说明：绑定的事件定义在<code>methods</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 完整语法 --&gt;
&lt;a v-on:click=&quot;doSomething&quot;&gt;&lt;/a&gt;
&lt;!-- 缩写 --&gt;
&lt;a @click=&quot;doSomething&quot;&gt;&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h3><ul><li><code>.stop</code> 阻止冒泡，调用 event.stopPropagation()</li><li><code>.prevent</code> 阻止默认行为，调用 event.preventDefault()</li><li><code>.capture</code> 添加事件侦听器时使用事件<code>捕获</code>模式</li><li><code>.self</code> 只当事件在该元素本身（比如不是子元素）触发时，才会触发事件</li><li><code>.once</code> 事件只触发一次</li></ul><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h3><ul><li>作用：在表单元素上创建双向数据绑定</li><li>说明：监听用户的输入事件以更新数据</li><li>案例：计算器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; v-model=&quot;message&quot; placeholder=&quot;edit me&quot;&gt;
&lt;p&gt;Message is: {{ message }}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h3><ul><li>作用：基于源数据多次渲染元素或模板块</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 1 基础用法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ item.text }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- item 为当前项，index 为索引 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}} -- {{index}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- item 为值，key 为键，index 为索引 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, key, index) in obj<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}} -- {{key}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in 10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="key属性" tabindex="-1"><a class="header-anchor" href="#key属性" aria-hidden="true">#</a> key属性</h3>`,30),E=n("li",null,[s("推荐：使用 "),n("code",null,"v-for"),s(" 的时候提供 "),n("code",null,"key"),s(" 属性，以获得性能提升。")],-1),z=n("li",null,"说明：使用 key，VUE会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。",-1),F={href:"https://cn.vuejs.org/v2/guide/list.html#key",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.zhihu.com/question/61064119/answer/183717717",target:"_blank",rel:"noopener noreferrer"},J=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-for=&quot;item in items&quot; :key=&quot;item.id&quot;&gt;
  &lt;!-- 内容 --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式处理-class和style" tabindex="-1"><a class="header-anchor" href="#样式处理-class和style" aria-hidden="true">#</a> 样式处理 -class和style</h2><ul><li>使用方式：<code>v-bind:class=&quot;expression&quot;</code> or <code>:class=&quot;expression&quot;</code></li><li>表达式的类型：字符串、数组、对象（重点）</li><li>语法：</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 1 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ active: true }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> ===&gt; 解析后
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 2 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;active&#39;, &#39;text-danger&#39;]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> ===&gt;解析后
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active text-danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ active: true }, errorClass]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> ===&gt;解析后
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active text-danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


--- style ---
<span class="token comment">&lt;!-- 1 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: activeColor, &#39;font-size&#39;: fontSize + &#39;px&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 2 将多个 样式对象 应用到一个元素上--&gt;</span>
<span class="token comment">&lt;!-- baseStyles 和 overridingStyles 都是data中定义的对象 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[baseStyles, overridingStyles]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-if-和-v-show" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show" aria-hidden="true">#</a> v-if 和 v-show</h3>`,5),I={href:"https://cn.vuejs.org/v2/guide/conditional.html",target:"_blank",rel:"noopener noreferrer"},W=n("li",null,[n("code",null,"v-if"),s("：根据表达式的值的真假条件，销毁或重建元素")],-1),Y=n("li",null,[n("code",null,"v-show"),s("：根据表达式之真假值，切换元素的 display CSS 属性")],-1),G=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p v-show=&quot;isShow&quot;&gt;这个元素展示出来了吗？？？&lt;/p&gt;
&lt;p v-if=&quot;isShow&quot;&gt;这个元素，在HTML结构中吗？？？&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提升性能-v-pre" tabindex="-1"><a class="header-anchor" href="#提升性能-v-pre" aria-hidden="true">#</a> 提升性能：v-pre</h3><ul><li>说明：vue会跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span v-pre&gt;{{ this will not be compiled }}&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提升性能-v-once" tabindex="-1"><a class="header-anchor" href="#提升性能-v-once" aria-hidden="true">#</a> 提升性能：v-once</h3><ul><li>说明：vue只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span v-once&gt;This will never change: {{msg}}&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="过滤器-filter-不建议用-可以用计算属性和函数方法替代" tabindex="-1"><a class="header-anchor" href="#过滤器-filter-不建议用-可以用计算属性和函数方法替代" aria-hidden="true">#</a> 过滤器 filter(不建议用,可以用计算属性和函数方法替代)</h2><ul><li>作用：文本数据格式化</li><li>过滤器可以用在两个地方：<code>{{}}</code>和 v-bind 表达式</li><li>两种过滤器：1 全局过滤器 2 局部过滤器</li></ul><h3 id="全局过滤器" tabindex="-1"><a class="header-anchor" href="#全局过滤器" aria-hidden="true">#</a> 全局过滤器</h3><ul><li>说明：通过全局方式创建的过滤器，在任何一个vue实例中都可以使用</li><li>注意：使用全局过滤器的时候，需要先创建全局过滤器，再创建Vue实例</li><li>显示的内容由过滤器的返回值决定</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.filter(&#39;filterName&#39;, function (value) {
  // value 表示要过滤的内容
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;{{ dateStr | date }}&lt;/div&gt;
&lt;div&gt;{{ dateStr | date(&#39;YYYY-MM-DD hh:mm:ss&#39;) }}&lt;/div&gt;

&lt;script&gt;
  Vue.filter(&#39;date&#39;, function(value, format) {
    // value 要过滤的字符串内容，比如：dateStr
    // format 过滤器的参数，比如：&#39;YYYY-MM-DD hh:mm:ss&#39;
  })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部过滤器" tabindex="-1"><a class="header-anchor" href="#局部过滤器" aria-hidden="true">#</a> 局部过滤器</h3><ul><li>说明：局部过滤器是在某一个vue实例的内容创建的，只在当前实例中起作用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  data: {},
  // 通过 filters 属性创建局部过滤器
  // 注意：此处为 filters
  filters: {
    filterName: function(value, format) {}
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按键值修饰符" tabindex="-1"><a class="header-anchor" href="#按键值修饰符" aria-hidden="true">#</a> 按键值修饰符</h2>`,18),Z=n("li",null,[s("说明：在监听键盘事件时，Vue 允许为 "),n("code",null,"v-on"),s(" 在监听键盘事件时添加关键修饰符")],-1),Q={href:"https://cn.vuejs.org/v2/guide/events.html#",target:"_blank",rel:"noopener noreferrer"},X=n("li",null,"其他：修饰键（.ctrl等）、鼠标按键修饰符（.left等）",-1),K=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 只有在 keyCode 是 13 时调用 vm.submit()
@keyup.13=&quot;submit&quot;
// 使用全局按键别名
@keyup.enter=&quot;add&quot;

---

// 通过全局 config.keyCodes 对象自定义键值修饰符别名
Vue.config.keyCodes.f2 = 113
// 使用自定义键值修饰符
@keyup.enter.f2=&quot;add&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监视数据变化-watch" tabindex="-1"><a class="header-anchor" href="#监视数据变化-watch" aria-hidden="true">#</a> 监视数据变化 - watch</h2>`,2),nn=n("li",null,[s("概述："),n("code",null,"watch"),s("是一个对象，键是需要观察的表达式，值是对应回调函数")],-1),sn=n("li",null,"作用：当表达式的值发生变化后，会调用对应的回调函数完成响应的监视操作",-1),an={href:"https://cn.vuejs.org/v2/api/#vm-watch",target:"_blank",rel:"noopener noreferrer"},en=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
  data: { a: 1, b: { age: 10 } },
  watch: {
    a: function(val, oldVal) {
      // val 表示当前值
      // oldVal 表示旧值
      console.log(&#39;当前值为：&#39; + val, &#39;旧值为：&#39; + oldVal)
    },

    // 监听对象属性的变化
    b: {
      handler: function (val, oldVal) { /* ... */ },
      // deep : true表示是否监听对象内部属性值的变化 
      deep: true
    },

    // 只监视user对象中age属性的变化
    &#39;user.age&#39;: function (val, oldVal) {
    },
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h2>`,2),tn=n("li",null,"说明：计算属性是基于它们的依赖进行缓存的，只有在它的依赖发生改变时才会重新求值",-1),ln=n("li",null,[s("注意："),n("strong",null,"computed中的属性不能与data中的属性同名，否则会报错")],-1),cn={href:"http://www.cnblogs.com/kidney/p/7384835.html?utm_source=debugrun&utm_medium=referral",target:"_blank",rel:"noopener noreferrer"},on=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let vm = new Vue({
  el: &#39;#app&#39;,
  data: {
    firstname: &#39;jack&#39;,
    lastname: &#39;rose&#39;
  },
  computed: {
    fullname() {
      return this.firstname + &#39;.&#39; + this.lastname
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例生命周期" tabindex="-1"><a class="header-anchor" href="#实例生命周期" aria-hidden="true">#</a> 实例生命周期</h2><ul><li>所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象即可 (一些根实例特有的选项除外)。</li><li>实例生命周期也叫做：组件生命周期</li></ul><h3 id="生命周期介绍" tabindex="-1"><a class="header-anchor" href="#生命周期介绍" aria-hidden="true">#</a> 生命周期介绍</h3>`,4),dn={href:"https://cn.vuejs.org/v2/api/#",target:"_blank",rel:"noopener noreferrer"},un=n("li",null,[s("简单说："),n("strong",null,"一个组件从开始到最后消亡所经历的各种状态，就是一个组件的生命周期")],-1),pn=t('<p>生命周期钩子函数的定义：从组件被创建，到组件挂载到页面上运行，再到页面关闭组件被卸载，这三个阶段总是伴随着组件各种各样的事件，这些事件，统称为组件的生命周期函数！</p><ul><li>注意：Vue在执行过程中会自动调用<code>生命周期钩子函数</code>，我们只需要提供这些钩子函数即可</li><li>注意：钩子函数的名称都是Vue中规定好的！</li></ul><h3 id="钩子函数-beforecreate" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforecreate" aria-hidden="true">#</a> 钩子函数 - beforeCreate()</h3><ul><li>说明：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用</li><li>注意：此时，无法获取 data中的数据、methods中的方法</li></ul><h3 id="钩子函数-created" tabindex="-1"><a class="header-anchor" href="#钩子函数-created" aria-hidden="true">#</a> 钩子函数 - <strong>created()</strong></h3>',5),rn=n("li",null,"注意：这是一个常用的生命周期，可以调用methods中的方法、改变data中的数据",-1),vn={href:"https://segmentfault.com/a/1190000008879966",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://segmentfault.com/a/1190000008010666",target:"_blank",rel:"noopener noreferrer"},bn=n("li",null,"使用场景：发送请求获取数据",-1),kn=t('<h3 id="钩子函数-beforemounted" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforemounted" aria-hidden="true">#</a> 钩子函数 - beforeMounted()</h3><ul><li>说明：在挂载开始之前被调用</li></ul><h3 id="钩子函数-mounted" tabindex="-1"><a class="header-anchor" href="#钩子函数-mounted" aria-hidden="true">#</a> 钩子函数 - <strong>mounted()</strong></h3><ul><li>说明：此时，vue实例已经挂载到页面中，可以获取到el中的DOM元素，进行DOM操作</li></ul><h3 id="钩子函数-beforeupdated" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforeupdated" aria-hidden="true">#</a> 钩子函数 - beforeUpdated()</h3><ul><li>说明：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。</li><li>注意：此处获取的数据是更新后的数据，但是获取页面中的DOM元素是更新之前的</li></ul><h3 id="钩子函数-updated" tabindex="-1"><a class="header-anchor" href="#钩子函数-updated" aria-hidden="true">#</a> 钩子函数 - updated()</h3><ul><li>说明：组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。</li></ul><h3 id="钩子函数-beforedestroy" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforedestroy" aria-hidden="true">#</a> 钩子函数 - beforeDestroy()</h3><ul><li>说明：实例销毁之前调用。在这一步，实例仍然完全可用。</li><li>使用场景：实例销毁之前，执行清理任务，比如：清除定时器等</li></ul><h3 id="钩子函数-destroyed" tabindex="-1"><a class="header-anchor" href="#钩子函数-destroyed" aria-hidden="true">#</a> 钩子函数 - destroyed()</h3><ul><li>说明：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。</li></ul><h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2>',13),hn=n("li",null,"作用：进行DOM操作",-1),gn=n("li",null,"使用场景：对纯 DOM 元素进行底层操作，比如：文本框获得焦点",-1),fn={href:"https://juejin.im/entry/58b7c5d8ac502e006cfee34a",target:"_blank",rel:"noopener noreferrer"},xn=n("li",null,"两种指令：1 全局指令 2 局部指令",-1),qn=t(`<h3 id="全局自定义指令" tabindex="-1"><a class="header-anchor" href="#全局自定义指令" aria-hidden="true">#</a> 全局自定义指令</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 第一个参数：指令名称</span>
<span class="token comment">// 第二个参数：配置对象，指定指令的钩子函数</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;directiveName&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// bind中只能对元素自身进行DOM操作，而无法对父级元素操作</span>
  <span class="token comment">// 只调用一次 指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。</span>
  <span class="token function">bind</span><span class="token punctuation">(</span> <span class="token parameter">el，binding<span class="token punctuation">,</span> vnode</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 参数详解</span>
    <span class="token comment">// el：指令所绑定的元素，可以用来直接操作 DOM 。</span>
    <span class="token comment">// binding：一个对象，包含以下属性：</span>
      <span class="token comment">// name：指令名，不包括 v- 前缀。</span>
      <span class="token comment">// value：指令的绑定值，等号后面的值 。</span>
      <span class="token comment">// oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。</span>
      <span class="token comment">// expression：字符串形式的指令表达式 等号后面的字符串 形式</span>
      <span class="token comment">// arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 &quot;foo&quot;。</span>
      <span class="token comment">// modifiers：指令修饰符。例如：v-directive.foo.bar中，修饰符对象为 { foo: true, bar: true }。</span>
    <span class="token comment">// vnode：Vue 编译生成的虚拟节点。。</span>
    <span class="token comment">// oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// inserted这个钩子函数调用的时候，当前元素已经插入页面中了，也就是说可以获取到父级节点了</span>
  <span class="token function">inserted</span> <span class="token punctuation">(</span>  <span class="token parameter">el，binding<span class="token punctuation">,</span> vnode</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//  DOM重新渲染前</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el，binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span>oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// DOM重新渲染后</span>
  <span class="token function">componentUpdated</span> <span class="token punctuation">(</span> <span class="token parameter">el，binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span>oldVnode</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 只调用一次，指令与元素解绑时调用</span>
  <span class="token function">unbind</span> <span class="token punctuation">(</span> <span class="token parameter">el</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指令所在的元素在页面中消失，触发</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 简写 如果你想在 bind 和 update 时触发相同行为，而不关心其它的钩子:</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;自定义指令名&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">el<span class="token punctuation">,</span> binding</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 例：</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binging<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 使用 注意直接些会被i成data中的数据“red” 需要字符串则嵌套引号&quot;&#39;red&#39;&quot;</span>
<span class="token operator">&lt;</span>p v<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">&quot;&#39;red&#39;&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部自定义指令" tabindex="-1"><a class="header-anchor" href="#局部自定义指令" aria-hidden="true">#</a> 局部自定义指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let vm = new Vue({
  el : &quot;#app&quot;,
  directives: {
    directiveName: { }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),_n={href:"https://segmentfault.com/a/1190000006599500",target:"_blank",rel:"noopener noreferrer"},yn=t(`<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><blockquote><p>组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树</p></blockquote><ul><li>创建组件的两种方式：1 全局组件 2 局部组件</li></ul><h3 id="全局组件" tabindex="-1"><a class="header-anchor" href="#全局组件" aria-hidden="true">#</a> 全局组件</h3><ul><li>说明：全局组件在所有的vue实例中都可以使用</li><li>注意：<strong>先注册组件，再初始化根实例</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1 注册全局组件  
Vue.component(&#39;my-component&#39;, {
  // template 只能有一个根元素
  template: &#39;&lt;p&gt;A custom component!&lt;/p&gt;&#39;,
  // 组件中的 \`data\` 必须是函数 并且函数的返回值必须是对象
  data() {
    return {
      msg: &#39;注意：组件的data必须是一个函数！！！&#39;
    }
  }
})

// 2 使用：以自定义元素的方式
&lt;div id=&quot;example&quot;&gt;
  &lt;my-component&gt;&lt;/my-component&gt;
&lt;/div&gt;

// =====&gt; 渲染结果
&lt;div id=&quot;example&quot;&gt;
  &lt;p&gt;A custom component!&lt;/p&gt;
&lt;/div&gt;


// 3 template属性的值可以是：
  - 1 模板字符串
  - 2 模板id  template: &#39;#tpl&#39;
&lt;script type=&quot;text/x-template&quot; id=&quot;tpl&quot;&gt;
  &lt;p&gt;A custom component!&lt;/p&gt;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>extend</code>：使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 注册组件，传入一个扩展过的构造器
Vue.component(&#39;my-component&#39;, Vue.extend({ /* ... */ }))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component(&#39;my-component&#39;, { /* ... */ })

let Home = Vue.extend({
  template: &#39;&#39;,
  data() {}
})
Vue.component(&#39;home&#39;, Home)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部组件" tabindex="-1"><a class="header-anchor" href="#局部组件" aria-hidden="true">#</a> 局部组件</h3><ul><li>说明：局部组件，是在某一个具体的vue实例中定义的，只能在这个vue实例中使用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let Child = {
  template: &#39;&lt;div&gt;A custom component!&lt;/div&gt;&#39;
}

new Vue({
  // 注意：此处为 components
  components: {
    // &lt;my-component&gt; 将只在当前vue实例中使用
    // my-component 为组件名 值为配置对象 
    &#39;my-component&#39;: {
      template: \`\`,
      data () { return { } },
      props : []
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="is特性" tabindex="-1"><a class="header-anchor" href="#is特性" aria-hidden="true">#</a> is特性</h3><blockquote><p>在某些特定的标签中只能存在指定表恰 如ul &gt; li 如果要浏览器正常解析则需要使用is</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 案例 --&gt;
&lt;ul id=&quot;app&quot;&gt;
  &lt;!-- 不能识别 --&gt;
  &lt;my-li&gt;&lt;/my-li&gt; 
  正常识别
  &lt;li is=&quot;my-li&quot;&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;script&gt;
  let vm = new Vue({
    el: &quot;#app&quot;,
    components : {
      myLi : {
        template : \`&lt;li&gt;内容&lt;/li&gt;\`
      }
    }
  })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件通讯" tabindex="-1"><a class="header-anchor" href="#组件通讯" aria-hidden="true">#</a> 组件通讯</h2><h3 id="父组件到子组件-props" tabindex="-1"><a class="header-anchor" href="#父组件到子组件-props" aria-hidden="true">#</a> 父组件到子组件(props)</h3><ul><li>方式：通过子组件<code>props</code>属性来传递数据 props是一个数组</li><li>注意：属性的值必须在组件中通过<code>props</code>属性显示指定，否则，不会生效</li><li>说明：传递过来的<code>props</code>属性的用法与<code>data</code>属性的用法相同</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
  &lt;!-- 如果需要往子组件总传递父组件data中的数据 需要加v-bind=&quot;数据名称&quot; --&gt;
  &lt;hello v-bind:msg=&quot;info&quot;&gt;&lt;/hello&gt;
  &lt;!-- 如果传递的是字面量 那么直接写--&gt;
  &lt;hello my-msg=&quot;abc&quot;&gt;&lt;/hello&gt;
&lt;/div&gt;

&lt;!-- js --&gt;
&lt;script&gt;
  new Vue({
    el: &quot;#app&quot;,
    data : {
      info : 15
    },
    components: {
      hello: {
        // 创建props及其传递过来的属性
        props: [&#39;msg&#39;, &#39;myMsg&#39;],
        template: &#39;&lt;h1&gt;这是 hello 组件，这是消息：{{msg}} --- {{myMsg}}&lt;/h1&gt;&#39;
      }
    }
  })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子组件到父组件-emit" tabindex="-1"><a class="header-anchor" href="#子组件到父组件-emit" aria-hidden="true">#</a> 子组件到父组件(emit)</h3><p>方式：父组件给子组件传递一个函数，由子组件调用这个函数</p><ul><li>说明：借助vue中的自定义事件（v-on:cunstomFn=&quot;fn&quot;）</li></ul><p>步骤:</p><ul><li>1、在父组件中定义方法 parentFn</li><li>2、在子组件 组件引入标签 中绑定自定义事件 v-on:自定义事件名=&quot;父组件中的方法&quot; ==&gt; @pfn=&quot;parentFn&quot;</li><li>3、子组件中通过<code>$emit()</code>触发自定义事件事件 this.$emit(pfn,参数列表。。。)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;hello @pfn=&quot;parentFn&quot;&gt;&lt;/hello&gt;

&lt;script&gt;
  Vue.component(&#39;hello&#39;, {
    template: &#39;&lt;button @click=&quot;fn&quot;&gt;按钮&lt;/button&gt;&#39;,
    methods: {
      // 子组件：通过$emit调用
      fn() {
        this.$emit(&#39;pfn&#39;, &#39;这是子组件传递给父组件的数据&#39;)
      }
    }
  })
  new Vue({
    methods: {
      // 父组件：提供方法
      parentFn(data) {
        console.log(&#39;父组件：&#39;, data)
      }
    }
  })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非父子组件通讯" tabindex="-1"><a class="header-anchor" href="#非父子组件通讯" aria-hidden="true">#</a> 非父子组件通讯</h3><h4 id="eventbus-不建议使用-之后会弃用" tabindex="-1"><a class="header-anchor" href="#eventbus-不建议使用-之后会弃用" aria-hidden="true">#</a> eventbus(不建议使用,之后会弃用)</h4><blockquote><p>在简单的场景下，可以使用一个空的 Vue 实例作为事件总线</p></blockquote><ul><li><code>$on()</code>：绑定自定义事件(不建议使用,之后会弃用)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let bus = new Vue()

// 在组件 B 绑定自定义事件
bus.$on(&#39;id-selected&#39;, function (id) {
  // ...
})
// 触发组件 A 中的事件
bus.$emit(&#39;id-selected&#39;, 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例：组件A ---&gt; 组件B</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 组件A： --&gt;
&lt;com-a&gt;&lt;/com-a&gt;
&lt;!-- 组件B： --&gt;
&lt;com-b&gt;&lt;/com-b&gt;

&lt;script&gt;
  // 中间组件
  let bus = new Vue()
  // 通信组件
  let vm = new Vue({
    el: &#39;#app&#39;,
    components: {
      comB: {
        template: &#39;&lt;p&gt;组件A告诉我：{{msg}}&lt;/p&gt;&#39;,
        data() {
          return {
            msg: &#39;&#39;
          }
        },
        created() {
          // 给中间组件绑定自定义事件 注意:如果用到this 需要用箭头函数
          bus.$on(&#39;tellComB&#39;, (msg) =&gt; {
            this.msg = msg
          })
        }
      },
      comA: {
        template: &#39;&lt;button @click=&quot;emitFn&quot;&gt;告诉B&lt;/button&gt;&#39;,
        methods: {
          emitFn() {
            // 触发中间组件中的自定义事件
            bus.$emit(&#39;tellComB&#39;, &#39;土豆土豆我是南瓜&#39;)
          }
        }
      }
    }
  })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ref和refs" tabindex="-1"><a class="header-anchor" href="#ref和refs" aria-hidden="true">#</a> <code>ref和refs</code></h4><p><code>ref</code>：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据， 我们看一个<code>ref</code> 来访问组件的例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 子组件 A.vue

export default {
  data () {
    return {
      name: &#39;Vue.js&#39;
    }
  },
  methods: {
    sayHello () {
      console.log(&#39;hello&#39;)
    }
  }
}
复制代码
// 父组件 app.vue

&lt;template&gt;
  &lt;component-a ref=&quot;comA&quot;&gt;&lt;/component-a&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    mounted () {
      const comA = this.$refs.comA;
      console.log(comA.name);  // Vue.js
      comA.sayHello();  // hello
    }
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="localstorage-sessionstorage" tabindex="-1"><a class="header-anchor" href="#localstorage-sessionstorage" aria-hidden="true">#</a> <code>localStorage</code> / <code>sessionStorage</code></h4><p>这种通信比较简单,缺点是数据和状态比较混乱,不太容易维护。 通过<code>window.localStorage.getItem(key)</code>获取数据 通过<code>window.localStorage.setItem(key,value)</code>存储数据</p><blockquote><p>注意用<code>JSON.parse()</code> / <code>JSON.stringify()</code> 做数据格式转换 <code>localStorage</code> / <code>sessionStorage</code>可以结合<code>vuex</code>, 实现数据的持久保存,同时使用vuex解决数据和状态混乱问题.</p></blockquote><h4 id="三、provide-inject" tabindex="-1"><a class="header-anchor" href="#三、provide-inject" aria-hidden="true">#</a> 三、<code>provide</code>/ <code>inject</code></h4><blockquote><p>概念:</p></blockquote><p><code>provide</code>/ <code>inject</code> 是<code>vue2.2.0</code>新增的api, 简单来说就是父组件中通过<code>provide</code>来提供变量, 然后再子组件中通过<code>inject</code>来注入变量。</p><blockquote><p>注意: 这里不论子组件嵌套有多深, 只要调用了<code>inject</code> 那么就可以注入<code>provide</code>中的数据，而不局限于只能从当前父组件的props属性中回去数据</p></blockquote><blockquote><p>举例验证</p></blockquote><p>接下来就用一个例子来验证上面的描述: 假设有三个组件: A.vue、B.vue、C.vue 其中 C是B的子组件，B是A的子组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// A.vue

&lt;template&gt;
  &lt;div&gt;
 &lt;comB&gt;&lt;/comB&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import comB from &#39;../components/test/comB.vue&#39;
  export default {
    name: &quot;A&quot;,
    provide: {
      for: &quot;demo&quot;
    },
    components:{
      comB
    }
  }
&lt;/script&gt;
复制代码
// B.vue

&lt;template&gt;
  &lt;div&gt;
    {{demo}}
    &lt;comC&gt;&lt;/comC&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import comC from &#39;../components/test/comC.vue&#39;
  export default {
    name: &quot;B&quot;,
    inject: [&#39;for&#39;],
    data() {
      return {
        demo: this.for
      }
    },
    components: {
      comC
    }
  }
&lt;/script&gt;
复制代码
// C.vue
&lt;template&gt;
  &lt;div&gt;
    {{demo}}
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: &quot;C&quot;,
    inject: [&#39;for&#39;],
    data() {
      return {
        demo: this.for
      }
    }
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vuex状态管理" tabindex="-1"><a class="header-anchor" href="#vuex状态管理" aria-hidden="true">#</a> vuex状态管理</h4><p>一般全局的数据处理可以使用,不再赘述</p><h3 id="内容分发-插槽" tabindex="-1"><a class="header-anchor" href="#内容分发-插槽" aria-hidden="true">#</a> 内容分发(插槽)</h3>`,47),jn={href:"https://cn.vuejs.org/v2/guide/components-slots.html",target:"_blank",rel:"noopener noreferrer"},wn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- html代码 --&gt;
&lt;div id=&quot;app&quot;&gt;
  &lt;hello&gt;
    &lt;!-- 如果只有一个slot插槽 那么不需要指定名称 --&gt;
    &lt;p slot=&quot;插槽名称&quot;&gt;我是额外的内容&lt;/p&gt;
  &lt;/hello&gt;
&lt;/div&gt;
// js代码
new vue({
  el : &quot;#app&quot;,
  components : {
    hello : {
      template : \`
          &lt;div&gt;
            &lt;p&gt;我是子组件中的内容&lt;/p&gt;
            &lt;slot name=&quot;名称&quot;&gt;&lt;/slot&gt;
          &lt;/div&gt;
        \`
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取组件-或元素-refs" tabindex="-1"><a class="header-anchor" href="#获取组件-或元素-refs" aria-hidden="true">#</a> 获取组件（或元素） - refs</h3><ul><li>说明：<code>vm.$refs</code> 一个对象，持有已注册过 ref 的所有子组件（或HTML元素）</li><li>使用：在 HTML元素 中，添加<code>ref</code>属性，然后在JS中通过<code>vm.$refs.属性</code>来获取</li><li>注意：如果获取的是一个子组件，那么通过ref就能获取到子组件中的data和methods</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
  &lt;div ref=&quot;dv&quot;&gt;&lt;/div&gt;
  &lt;my res=&quot;my&quot;&gt;&lt;/my&gt;
&lt;/div&gt;

&lt;!-- js --&gt;
&lt;script&gt;
  new Vue({
    el : &quot;#app&quot;,
    mounted() {
      this.$refs.dv //获取到元素
      this.$refs.my //获取到组件
    },
    components : {
      my : {
        template: \`&lt;a&gt;sss&lt;/a&gt;\`
      }
    }
  })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>`,5),Vn={href:"https://www.yuque.com/docs/share/2fcfcf69-9fab-4877-966d-50c5740e9226",target:"_blank",rel:"noopener noreferrer"},Mn=t(`<ul><li>路由即：浏览器中的哈希值（# hash）与展示视图内容（template）之间的对应规则</li><li>vue中的路由是：hash 和 component的对应关系 在 Web app 中，通过一个页面来展示和管理整个应用的功能。 SPA往往是功能复杂的应用，为了有效管理所有视图内容，前端路由 应运而生！ 简单来说，路由就是一套映射规则（一对一的对应规则），由开发人员制定规则。 当URL中的哈希值（# hash）发生改变后，路由会根据制定好的规则，展示对应的视图内容</li></ul><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><ul><li>安装：npm i -S vue-router</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;div id=&quot;app&quot;&gt;
      &lt;!-- 5 路由入口 指定跳转到只定入口 --&gt;
      &lt;router-link to=&quot;/home&quot;&gt;首页&lt;/router-link&gt;
      &lt;router-link to=&quot;/login&quot;&gt;登录&lt;/router-link&gt;
    
      &lt;!-- 7 路由出口：用来展示匹配路由视图内容 --&gt;
      &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
    
    &lt;!-- 1 导入 vue.js --&gt;
    &lt;script src=&quot;./vue.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 2 导入 路由文件 --&gt;
    &lt;script src=&quot;./node_modules/vue-router/dist/vue-router.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
      // 3 创建两个组件
      const Home = Vue.component(&#39;home&#39;, {
        template: &#39;&lt;h1&gt;这是 Home 组件&lt;/h1&gt;&#39;
      })
      const Login = Vue.component(&#39;login&#39;, {
        template: &#39;&lt;h1&gt;这是 Login 组件&lt;/h1&gt;&#39;
      })
    
      // 4 创建路由对象
      const router = new VueRouter({
        routes: [
          // 路径和组件一一对应
          { path: &#39;/home&#39;, component: Home },
          { path: &#39;/login&#39;, component: Login }
        ]
      })
    
      let vm = new Vue({
        el: &#39;#app&#39;,
        // 6 将路由实例挂载到vue实例
        router
      })
    &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  将path 重定向到 redirect
{ path: &#39;/&#39;, redirect: &#39;/home&#39; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由其他配置" tabindex="-1"><a class="header-anchor" href="#路由其他配置" aria-hidden="true">#</a> 路由其他配置</h3><ul><li>路由导航高亮 <ul><li>说明：当前匹配的导航链接，会自动添加router-link-exact-active router-link-active类</li><li>配置：linkActiveClass</li></ul></li><li>匹配路由模式 <ul><li>配置：mode</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Router({
  routers:[],
  mode: &quot;hash&quot;, //默认hash | history 可以达到隐藏地址栏hash值 | abstract，如果发现没有浏览器的 API 则强制进入
  linkActiveClass : &quot;now&quot; //当前匹配的导航链接将被自动添加now类
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数" aria-hidden="true">#</a> 路由参数</h3><ul><li>说明：我们经常需要把某种模式匹配到的所有路由，全都映射到同一个组件，此时，可以通过路由参数来处理</li><li>语法：/user/:id</li><li>使用：当匹配到一个路由时，参数值会被设置到 this.$route.params</li><li>其他：可以通过 $route.query 获取到 URL 中的查询参数 等</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 方式一
    &lt;router-link to=&quot;/user/1001&quot;&gt;如果你需要在模版中使用路由参数 可以这样 {{$router.params.id}}&lt;/router-link&gt;
    // 方式二
    &lt;router-link :to=&quot;{path:&#39;/user&#39;,query:{name:&#39;jack&#39;,age:18}}&quot;&gt;用户 Rose&lt;/router-link&gt;


    &lt;script&gt;
    // 路由
    let router = new Router({
      routers : [
        // 方式一 注意 只有/user/1001这种形式能被匹配 /user | /user/ | /user/1001/ 都不能被匹配
        // 将来通过$router.params获取参数返回 {id:1001}
        { path: &#39;/user/:id&#39;, component: User }, 
        // 方式二
        { path: &quot;user&quot; , component: User}
      ]
    })
    
    // User组件：
    const User = {
      template: \`&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;\`
    }
    &lt;/script&gt;  
    &lt;!-- 如果要子啊vue实例中获取路由参数 则使用this.$router.params 获取路由参数对象 --&gt;
    &lt;!--  {{$router.query}} 获取路由中的查询字符串 返回对象 --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套路由-子路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由-子路由" aria-hidden="true">#</a> 嵌套路由 - 子路由</h3><ul><li>路由是可以嵌套的，即：路由中又包含子路由</li><li>规则：父组件中包含 router-view，在路由规则中使用 children 配置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 父组件：
    const User = Vue.component(&#39;user&#39;, {
      template: \`
        &lt;div class=&quot;user&quot;&gt;
          &lt;h2&gt;User Center&lt;/h2&gt;
          &lt;router-link to=&quot;/user/profile&quot;&gt;个人资料&lt;/router-link&gt;
          &lt;router-link to=&quot;/user/posts&quot;&gt;岗位&lt;/router-link&gt;
          &lt;!-- 子路由展示在此处 --&gt;
          &lt;router-view&gt;&lt;/router-view&gt;
        &lt;/div&gt;
        \`
    })
    
    // 子组件[简写]
    const UserProfile = {
      template: &#39;&lt;h3&gt;个人资料：张三&lt;/h3&gt;&#39;
    }
    const UserPosts = {
      template: &#39;&lt;h3&gt;岗位：FE&lt;/h3&gt;&#39;
    }
    
    // 路由
    let router =new Router({
      routers : [

        { path: &#39;/user&#39;, component: User,
          // 子路由配置：
          children: [
            {
              // 当 /user/profile 匹配成功，
              // UserProfile 会被渲染在 User 的 &lt;router-view&gt; 中
              path: &#39;profile&#39;,
              component: UserProfile
            },
            {
              // 当 /user/posts 匹配成功
              // UserPosts 会被渲染在 User 的 &lt;router-view&gt; 中
              path: &#39;posts&#39;,
              component: UserPosts
            }
          ]
        }
      ]
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex状态管理-1" tabindex="-1"><a class="header-anchor" href="#vuex状态管理-1" aria-hidden="true">#</a> vuex状态管理</h2><p>这个一般非专业前端也用不到,跳过</p>`,17),Dn={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},On=t(`<h2 id="spa-单页应用程序" tabindex="-1"><a class="header-anchor" href="#spa-单页应用程序" aria-hidden="true">#</a> SPA -单页应用程序</h2><h3 id="spa-single-page-application" tabindex="-1"><a class="header-anchor" href="#spa-single-page-application" aria-hidden="true">#</a> SPA： Single Page Application</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单页Web应用（single page application，SPA），就是只有一个Web页面的应用，
是加载单个HTML页面，并在用户与应用程序交互时动态更新该页面的Web应用程序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单页面应用程序： <ul><li>只有第一次会加载页面, 以后的每次请求, 仅仅是获取必要的数据.然后, 由页面中js解析获取的数据, 展示在页面中</li></ul></li><li>传统多页面应用程序： <ul><li>对于传统的多页面应用程序来说, 每次请求服务器返回的都是一个完整的页面</li></ul></li></ul><p>优势</p><ul><li>1 减少了请求体积，加快页面响应速度，降低了对服务器的压力</li><li>2 更好的用户体验，让用户在web app感受native app的流畅</li></ul><p>实现思路和技术点</p><ul><li>1 ajax</li><li>2 锚点的使用（window.location.hash #）</li><li>3 hashchange 事件 window.addEventListener(&quot;hashchange&quot;,function () {})</li><li>4 监听锚点值变化的事件，根据不同的锚点值，请求相应的数据</li><li>5 原本用作页面内部进行跳转，定位并展示相应的内容</li></ul><h2 id="前端模块化" tabindex="-1"><a class="header-anchor" href="#前端模块化" aria-hidden="true">#</a> 前端模块化</h2><blockquote><p>为什么需要模块化</p></blockquote><ul><li>1 最开始的js就是为了实现客户端验证以及一些简单的效果</li><li>2 后来，js得到重视，应用越来越广泛，前端开发的复杂度越来越高</li><li>3 旧版本的js中没有提供与模块（module）相关的内容</li></ul><h3 id="模块的概念" tabindex="-1"><a class="header-anchor" href="#模块的概念" aria-hidden="true">#</a> 模块的概念</h3><ul><li>在js中，一个模块就是实现特定功能的文件（js文件）</li><li>遵循模块的机制，想要什么功能就加载什么模块</li><li>模块化开发需要遵循规范</li></ul><h3 id="模块化解决的问题" tabindex="-1"><a class="header-anchor" href="#模块化解决的问题" aria-hidden="true">#</a> 模块化解决的问题</h3><ul><li>1 命名冲突</li><li>2 文件依赖（加载文件）</li><li>3 模块的复用</li><li>4 统一规范和开发方式</li></ul><h3 id="js实现模块化的规范" tabindex="-1"><a class="header-anchor" href="#js实现模块化的规范" aria-hidden="true">#</a> JS实现模块化的规范</h3><ul><li>AMD 浏览器端 <ul><li>requirejs</li></ul></li><li>CommonJS nodejs <ul><li>加载模块：require()</li><li>导出模块：module.exports = {} / exports = {}</li></ul></li><li>ES6 中的 import / export</li><li>CMD 浏览器端 <ul><li>玉伯（阿里前端大神） -&gt; seajs</li></ul></li><li>UMD 通用模块化规范，可以兼容 AMD、CommonJS、浏览器中没有模块化规范 等这些语法</li></ul><p>AMD 的使用</p><blockquote><p>Asynchronous Module Definition：异步模块定义，浏览器端模块开发的规范 代表：require.js 特点：模块被异步加载，模块加载不影响后面语句的运行</p></blockquote><p>1、定义模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 语法:define(name, dependencies?, factory);
    // name表示：当前模块的名称，是一个字符串 可有可无
    // dependencies表示：当前模块的依赖项，是一个数组无论依赖一项还是多项 无则不写
    // factory表示：当前模块要完成的一些功能，是一个函数
    
    // 定义对象模块
    define({})
    // 定义方法模块
    define(function() {
      return {}
    })
    // 定义带有依赖项的模块
    define([&#39;js/a&#39;], function() {})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、加载模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// - 注意：require的第一个参数必须是数组

    // 参数必须是数组 表示模块路径 以当前文件为基准,通过回调函数中的参数获取加载模块中的变量 参数与模块按照顺序一一对应
    require([&#39;a&#39;, &#39;js/b&#39;], function(a, b) {
      // 使用模块a 和 模块b 中的代码
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、路径查找配置</p><ul><li>requirejs 默认使用 baseUrl+paths 的路径解析方式</li><li>可以使用以下方式避开此设置： <ul><li>1 以.js结尾</li><li>2 以 / 开始</li><li>3 包含协议：https:// 或 http://</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 配置示例
    // 注意配置应当在使用之前
    require.config({
      baseUrl: &#39;./js&#39; // 配置基础路径为：当前目录下的js目录
    })
    require([&#39;a&#39;])    // 查找 基础路径下的 ./js/a.js

// 简化加载模块路径
    require.config({
      baseUrl: &#39;./js&#39;,
      // 配置一次即可，直接通过路径名称（template || jquery）加载模块
      paths: {
        template: &#39;assets/artTemplate/template-native&#39;,
        jquery: &#39;assets/jquery/jquery.min&#39;
      }
    })
    // 加载jquery template模块
    require([&#39;jquery&#39;, &#39;template&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、非模块化和依赖项支持</p><ul><li>1 添加模块的依赖模块，保证加载顺序（deps）</li><li>2 将非模块化模块，转化为模块化（exports）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 示例
    require.config({
      baseUrl: &#39;./js&#39;,
      paths: {
        // 配置路径
        noModule: &#39;assets/demo/noModule&#39;
      },
      // 配置不符合规范的模块项
      shim: {
        // 模块名称
        noModule: {
          deps: [],         // 依赖项
          exports: &#39;sayHi&#39;  // 导出模块中存在的函数或变量
        }
      }
    });

// 注意点  如果定义模块的时候，指定了模块名称，需要使用该名称来引用模块
    // 定义 这个模块名称与paths中的名称相同
    define(&#39;moduleA&#39;, function() {})
    // 导入
    require.config({
      paths: {
        // 此处的模块名：moduleA
        moduleA: &#39;assets/demo/moduleA&#39;
      }
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、路径加载规则</p><ul><li>路径配置的优先级： <ul><li>1 通过 config 配置规则查找</li><li>2 通过 data-main 指定的路径查找</li><li>3 以引入 requirejs 的页面所在路径为准查找</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;!-- 
      设置data-main属性
      1 data-main属性指定的文件也会同时被加载
      2 用于指定查找其他模块的基础路径
    --&gt;
    &lt;script src=&quot;js/require.js&quot; data-main=&quot;js/main&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2>`,33),Sn=n("li",null,[s("Promise based HTTP client for the browser and node.js "),n("ul",null,[n("li",null,"以Promise为基础的HTTP客户端，适用于：浏览器和node.js"),n("li",null,"封装ajax，用来发送请求，异步获取数据")])],-1),An=n("li",null,[s("安装："),n("code",null,"yarn add axios")],-1),Cn={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},Un=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在浏览器中使用，直接引入js文件使用下面的GET/POST请求方式即可</span>
<span class="token comment">// 1 引入 axios.js</span>
<span class="token comment">// 2 直接调用axios提供的API发送请求</span>
<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token operator">--</span><span class="token operator">-</span>
<span class="token comment">// 配合 webpack 使用方式如下：</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token comment">// 将 axios 添加到 Vue.prototype 中</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$axios <span class="token operator">=</span> axios

<span class="token operator">--</span><span class="token operator">-</span>
<span class="token comment">// 在组件中使用：</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">--</span><span class="token operator">-</span>
<span class="token comment">// API使用方式：</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">axios</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-请求" tabindex="-1"><a class="header-anchor" href="#get-请求" aria-hidden="true">#</a> Get 请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;http://vue.studyit.io/api/getnewslist&#39;</span>

<span class="token comment">// url中带有query参数</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user?id=89&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// url和参数分离，使用对象</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-请求" tabindex="-1"><a class="header-anchor" href="#post-请求" aria-hidden="true">#</a> Post 请求</h3>`,4),Pn={href:"https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format",target:"_blank",rel:"noopener noreferrer"},Tn=n("li",null,[s("默认情况下，axios 会将JS对象序列化为JSON对象。为了使用 "),n("code",null,"application/x-www-form-urlencoded"),s(" 格式发送请求，我们可以这样：")],-1),Bn=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用 qs 包，处理将对象序列化为字符串</span>
<span class="token comment">// npm i -S qs</span>
<span class="token comment">// let qs = require(&#39;qs&#39;)</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span>
qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">===</span><span class="token operator">&gt;</span> <span class="token string">&quot;bar=123&quot;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 或者：</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar=123&amp;age=19&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;http://vue.studyit.io/api/postcomment/17&#39;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">&#39;content=点个赞不过份&#39;</span><span class="token punctuation">)</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flintstone&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 设置请求公共路径：
axios.defaults.baseURL = &#39;http://vue.studyit.io&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h3><ul><li>拦截器会拦截发送的每一个请求，请求发送之前执行<code>request</code>中的函数，请求发送完成之后执行<code>response</code>中的函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 所有请求之前都要执行的操作</span>

    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 错误处理</span>

    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 所有请求完成后都要执行的操作</span>

    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 错误处理</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function $n(Ln,Nn){const e=i("ExternalLinkIcon"),l=i("CodeDemo");return o(),d("div",null,[v,m,n("ul",null,[n("li",null,[n("a",b,[s("vue2官网"),a(e)]),s(" ("),n("a",k,[s("vue3在这里"),a(e)]),s(")")]),n("li",null,[n("a",h,[s("vue-rotuer官网"),a(e)])]),n("li",null,[n("a",g,[s("vuex官网"),a(e)])]),n("li",null,[n("a",f,[s("vue调试工具(必装,需要科学上网)"),a(e)])]),n("li",null,[n("a",x,[s("vue组件大全"),a(e)])]),n("li",null,[n("a",q,[s("vue-cli开发工具"),a(e)])]),n("li",null,[n("a",_,[s("vite开发工具"),a(e)])]),n("li",null,[n("a",y,[s("vue-ssr官网"),a(e)])]),n("li",null,[n("a",j,[s("nuxtjs官网"),a(e)]),s("(实现vuessr,快速搭建平台)")]),w]),V,n("p",null,[n("a",M,[s("Vite"),a(e)]),s(" 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。 通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目。 使用 npm：")]),D,n("div",O,[S,n("p",null,[s("推荐使用vue官网的sfc工具 ,"),n("a",A,[s("链接"),a(e)])])]),C,a(l,{id:"code-demo-154",type:"vue",code:"eJxNjkEOgyAQRa8yYaMmTd1T9CRsqNDWZBQCo7Uh3L2gpunuz8z7LxPZuhjGmSAzOVRkejkDCD2uMKAKoZPsbjfJ9vVx6GOcwjMl0ZZhx88k2j+LCIMfHeVkNmc9gTYPtSBBLBWtSHGoG+h6qCNkIa9eBtHC23rUFaTmUjg5p1sR/2Qi0AeL/5r/guDUfAgHi9Zz8EZnPu2VE8wOlr7fuk9t"},{default:u(()=>[U]),_:1}),P,n("ul",null,[T,n("li",null,[n("a",B,[s("Vue - 深入响应式原理"),a(e)])]),n("li",null,[n("a",$,[s("MDN - Object.defineProperty()"),a(e)])])]),L,n("ul",null,[n("li",null,[n("a",N,[s("剖析Vue原理&实现双向绑定MVVM"),a(e)])])]),H,n("ul",null,[E,z,n("li",null,[n("a",F,[s("vue key"),a(e)])]),n("li",null,[n("a",R,[s("vue key属性的说明"),a(e)])])]),J,n("ul",null,[n("li",null,[n("a",I,[s("条件渲染"),a(e)])]),W,Y]),G,n("ul",null,[Z,n("li",null,[n("a",Q,[s("键盘事件 - 键值修饰符"),a(e)])]),X]),K,n("ul",null,[nn,sn,n("li",null,[n("a",an,[s("VUE $watch"),a(e)])])]),en,n("ul",null,[tn,n("li",null,"注意：Mustache语法（"+p()+"）中不要放入太多的逻辑，否则会让模板过重、难以理解和维护",1),ln,n("li",null,[n("a",cn,[s("Vue computed属性原理"),a(e)])])]),on,n("ul",null,[n("li",null,[n("a",dn,[s("vue生命周期钩子函数"),a(e)])]),un]),pn,n("ul",null,[rn,n("li",null,[n("a",vn,[s("vue实例生命周期 参考1"),a(e)])]),n("li",null,[n("a",mn,[s("vue实例生命周期 参考2"),a(e)])]),bn]),kn,n("ul",null,[hn,gn,n("li",null,[n("a",fn,[s("vue 自定义指令用法实例"),a(e)])]),xn]),qn,n("ul",null,[n("li",null,[n("a",_n,[s("vue 剖析Vue原理&实现双向绑定MVVM"),a(e)])])]),yn,n("p",null,[s("这个比较复杂,建议直接看文档 "),n("a",jn,[s("插槽使用"),a(e)]),s(" 案例：")]),wn,n("p",null,[s("详细内容和案例见 [链接]("),n("a",Vn,[s("https://www.yuque.com/docs/share/2fcfcf69-9fab-4877-966d-50c5740e9226"),a(e)]),s("?# 《vue-router教程》)")]),Mn,n("p",null,[s("详细见"),n("a",Dn,[s("vuex官网"),a(e)])]),On,n("ul",null,[Sn,An,n("li",null,[n("a",Cn,[s("axios"),a(e)])])]),Un,n("ul",null,[n("li",null,[n("a",Pn,[s("不同环境中处理 POST请求"),a(e)])]),Tn]),Bn])}const En=c(r,[["render",$n],["__file","vue-tutor.html.vue"]]);export{En as default};