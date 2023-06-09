import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},i=t(`<h1 id="go导入包" tabindex="-1"><a class="header-anchor" href="#go导入包" aria-hidden="true">#</a> go导入包</h1><p>golang 使用包 package 来管理定义模块，可以使用 import 关键字来导入使用。</p><ul><li>如果导入的是 go 自带的包，则会去安装目录<code>$GOROOT/src</code> 按包路径加载，如 fmt 包</li><li>如果是我们 go get 安装或自定义的包，则会去 <code>$GOPATH/src</code> 下加载</li></ul><h2 id="package-的定义" tabindex="-1"><a class="header-anchor" href="#package-的定义" aria-hidden="true">#</a> package 的定义</h2><p>package 的存放位置是以 <code>$GOPATH/src</code> 作为根目录，然后灵活的按照目录去组织，且包名需与最后一级目录名一致。</p><p>例如我们自定义 baz 包，包模块的存放位置则为 <code>$GOPATH/src/foo/bar/baz</code>，baz 包的源码都存放在此目录下，foo/bar/baz 则作为包路径被 import 载入。</p><p>我们需要规范的将 baz 包中源码的 package 定义为 baz，就定义好一个可 import 载入的的包了。</p><p>hello 模块</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//$GOPATH/src/foo/bar/baz/hello.go</span>
<span class="token keyword">package</span> baz

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 模块初始化函数 import 包时被调用</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello module init function&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>world 模块</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//$GOPATH/src/foo/bar/baz/world.go</span>
<span class="token keyword">package</span> baz

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 模块初始化函数 import 包时被调用</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;world module init function&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">World</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;world&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;foo/bar/baz&quot;</span> <span class="token comment">//引入我们自定义的包</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>baz<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> baz<span class="token punctuation">.</span><span class="token function">World</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import的使用" tabindex="-1"><a class="header-anchor" href="#import的使用" aria-hidden="true">#</a> import的使用</h2><h3 id="普通操作" tabindex="-1"><a class="header-anchor" href="#普通操作" aria-hidden="true">#</a> 普通操作</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>
    <span class="token string">&quot;foo/bar/baz&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>普通导入就是按照加载机制，将要使用的包导入进来，然后使用 packageName.MethodName 的方式调用包内的方法即可。注意如果要包方法在其他包中可以调用，包方法需要首字母大写，例如：fmt.Println() fmt.Printf()。</p><h3 id="别名操作" tabindex="-1"><a class="header-anchor" href="#别名操作" aria-hidden="true">#</a> 别名操作</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    myBaz <span class="token string">&quot;foo/bar/baz&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myBaz<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> myBaz<span class="token punctuation">.</span><span class="token function">World</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果两个包的包名存在冲突，或者包名太长需要简写时，我们可以使用别名导入来解决。</p><h3 id="点操作" tabindex="-1"><a class="header-anchor" href="#点操作" aria-hidden="true">#</a> 点操作</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token punctuation">.</span> <span class="token string">&quot;foo/bar/baz&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">World</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 直接使用包内的方法即可 不需要显式使用包名</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>. 导入可以让包内的方法注册到当前包的上下文中，直接调用方法名即可，不需要再加包前缀。</p><h3 id="下划线操作" tabindex="-1"><a class="header-anchor" href="#下划线操作" aria-hidden="true">#</a> 下划线操作</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token boolean">_</span> <span class="token string">&quot;foo/bar/baz&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>baz<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> baz<span class="token punctuation">.</span><span class="token function">World</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 错误 _ 并没有导入包 只是引入并执行包模块的 init  方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_ 是包引用操作，只会执行包下各模块中的 init 方法，并不会真正的导入包，所以不可以调用包内的其他方法。</p>`,24),p=[i];function o(c,l){return s(),a("div",null,p)}const d=n(e,[["render",o],["__file","go-import.html.vue"]]);export{d as default};
