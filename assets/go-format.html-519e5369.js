import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},p=e(`<h1 id="go命名规范" tabindex="-1"><a class="header-anchor" href="#go命名规范" aria-hidden="true">#</a> Go命名规范</h1><p>好的命名可以提高代码的可读性，特点：</p><ul><li>统一 ： 容易猜想，约定俗成</li><li>简短 ：容易书写（Go尤为强调）</li><li>准确 ：准确表达意思</li></ul><h2 id="核心准则" tabindex="-1"><a class="header-anchor" href="#核心准则" aria-hidden="true">#</a> 核心准则</h2><p>声明的地方和使用的地方离得越远，名字就建议越详细，相对也会越长，同样上下文没提供有效的描述也是如此。</p><h2 id="常见命名" tabindex="-1"><a class="header-anchor" href="#常见命名" aria-hidden="true">#</a> 常见命名</h2><h3 id="camel命名" tabindex="-1"><a class="header-anchor" href="#camel命名" aria-hidden="true">#</a> Camel命名</h3><ul><li>Go推荐驼峰命名方式，不建议使用下划线（包括常量，包名） <strong>Good</strong><strong>Bed</strong></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>userManger
UserManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>user_manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>单词缩写默认全大写，或全小写 <strong>Good</strong><strong>Bed</strong></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>userID
baiduCDN
id
cdn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>userId
baiduCdn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目名-仓库名" tabindex="-1"><a class="header-anchor" href="#项目名-仓库名" aria-hidden="true">#</a> 项目名（仓库名）</h3><ul><li>多个单词建议采用中划线分隔. \v 目前github中大多数项目都是使用中划线，不建议采用驼峰式分隔，不要使用下划线(kubernetes中的组件名称不允许使用下划线) \v<strong>例如</strong></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>github<span class="token punctuation">.</span>com<span class="token operator">/</span>redis<span class="token operator">-</span><span class="token keyword">go</span>
github<span class="token punctuation">.</span>com<span class="token operator">/</span>mattn<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>sqlite3
github<span class="token punctuation">.</span>com<span class="token operator">/</span>gin<span class="token operator">-</span>gonic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命名尽量在三个单词以内。</li><li>命名可以是项目功能的描述；也可以是一个代号（如神话人物的名字，或者希腊语） （注：适合采用代号的项目有两种：公司的基础组件或者开源项目，一般这种项目都有详细的文档）</li></ul><h3 id="local变量" tabindex="-1"><a class="header-anchor" href="#local变量" aria-hidden="true">#</a> Local变量</h3><ul><li>保持简短。太长的命名有的时候反而使代码不简洁，影响阅读\v 索引：i （Good），index（Bad） reader：简写：r buffer：简写为：b</li><li>避免冗余。命名不要和上下文重叠，例如： 在user上下文中 变量名count 会比userCount更简洁 在map的上下文下可以简写：v,ok=m[k]</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func UserCount() int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注：一般情况下<strong>不需要</strong>长命名，长命名出现的情况是func<strong>很长，变量很多</strong>（意味着<strong>你该重构了</strong>）</p><p><strong>Local变量 - 例子1</strong></p><p><strong>Bad</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">RuneCount</span><span class="token punctuation">(</span>buffer <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    runeCount <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> index <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> buffer<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> RuneSelf <span class="token punctuation">{</span>
            index<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token boolean">_</span><span class="token punctuation">,</span> size <span class="token operator">:=</span> <span class="token function">DecodeRune</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span>index<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            index <span class="token operator">+=</span> size
        <span class="token punctuation">}</span>
        runeCount<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> runeCount
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Good</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">RuneCount</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    count <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> RuneSelf <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token function">DecodeRune</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            i <span class="token operator">+=</span> n
        <span class="token punctuation">}</span>
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Local变量 - 例子2</strong></p><p><strong>Bad</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Read</span><span class="token punctuation">(</span>buffer <span class="token operator">*</span>Buffer<span class="token punctuation">,</span> inBuffer <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>size <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> buffer<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                buffer<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        size <span class="token operator">=</span> <span class="token function">copy</span><span class="token punctuation">(</span>
                inBuffer<span class="token punctuation">,</span>
                buffer<span class="token punctuation">.</span>buffer<span class="token punctuation">[</span>buffer<span class="token punctuation">.</span>offset<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        buffer<span class="token punctuation">.</span>offset <span class="token operator">+=</span> size
        <span class="token keyword">return</span> size<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Good</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Read</span><span class="token punctuation">(</span>b <span class="token operator">*</span>Buffer<span class="token punctuation">,</span> p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> b<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        n <span class="token operator">=</span> <span class="token function">copy</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> b<span class="token punctuation">.</span>buf<span class="token punctuation">[</span>b<span class="token punctuation">.</span>off<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        b<span class="token punctuation">.</span>off <span class="token operator">+=</span> n
        <span class="token keyword">return</span> n<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="receiver命名" tabindex="-1"><a class="header-anchor" href="#receiver命名" aria-hidden="true">#</a> Receiver命名</h3><p>方法接收名称也是特殊的参数，一般用一个或两个字母（优先r）</p><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Buffer<span class="token punctuation">)</span> <span class="token function">Read</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>sh serverHandler<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>rw ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>Request<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r Rectangle<span class="token punctuation">)</span> <span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Point
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ul><li>同一个接收者的命名要保持全局唯一</li><li>不会体现到文档里，指向性强</li><li>避免是用&quot;me&quot;, &quot;this&quot; or &quot;self&quot;</li></ul><h3 id="func-method-参数" tabindex="-1"><a class="header-anchor" href="#func-method-参数" aria-hidden="true">#</a> func/method - 参数</h3><p>和本地变量一样，但是名称还会作为文档，一般规则：</p><ul><li>如果类型具有描述特征，变量名可以简短，例如：</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Escape</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mux <span class="token operator">*</span>ServeMux<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>Request<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果类型没有指向性，名字可以完整，例如：strings包：</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">HasSuffix</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> suffix <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
<span class="token function">Map</span><span class="token punctuation">(</span>mapping <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">rune</span><span class="token punctuation">)</span> <span class="token builtin">rune</span><span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="func-method-返回值" tabindex="-1"><a class="header-anchor" href="#func-method-返回值" aria-hidden="true">#</a> func/method - 返回值</h3><ul><li>函数/方法可以对返回值定义变量名</li><li>变量名仅作为文档，不能只是为了在方法体内少定义变量</li><li>规则和参数类似，取决于类型是否具有描述性，例如：</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Copy</span><span class="token punctuation">(</span>dst Writer<span class="token punctuation">,</span> src Reader<span class="token punctuation">)</span> <span class="token punctuation">(</span>written <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">ScanBytes</span><span class="token punctuation">(</span>data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> atEOF <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>advance <span class="token builtin">int</span><span class="token punctuation">,</span> token <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="method-get-set" tabindex="-1"><a class="header-anchor" href="#method-get-set" aria-hidden="true">#</a> method - get/set</h3><p>Go没对get/set特别支持，必要的时候可以自己定义\v。Go对get有不同建议，认为不符合语言习惯，例如：</p><p>读取Persion获取FirstName</p><p>Bad：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p<span class="token punctuation">.</span><span class="token function">GetFirstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Good：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p<span class="token punctuation">.</span><span class="token function">FirstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="package导出命名" tabindex="-1"><a class="header-anchor" href="#package导出命名" aria-hidden="true">#</a> package导出命名</h3><p>包对外导出变量、函数、类型等，在包的上下文中，避免冗余</p><p><strong>Good</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>bytes<span class="token punctuation">.</span>Buffer
strings<span class="token punctuation">.</span>Reader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Bad</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>bytes<span class="token punctuation">.</span>Buffer
strings<span class="token punctuation">.</span>Reader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口命名" tabindex="-1"><a class="header-anchor" href="#接口命名" aria-hidden="true">#</a> 接口命名</h3><ul><li>如果接口只有一个方法，默认为方法名+er 来命名接口：例如： 注：有的时候加er不一定是正确的单词，但是也还是会遵守</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Reader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Read</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Purger <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">Purge</span><span class="token punctuation">(</span>u PurgeURL<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果接口有多个方法， 会以用一个能准备描述他的用途来命名 type ResponseWriter interface</li></ul><h3 id="error的命名" tabindex="-1"><a class="header-anchor" href="#error的命名" aria-hidden="true">#</a> error的命名</h3><ul><li>自定义error命名通常： “名称+Error” 作为结构体的名字，例如：</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TypeError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Errors <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>变量时会用简写err + 名称</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ErrShortDst <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;transform: short destination buffer&quot;</span><span class="token punctuation">)</span>
ErrShortSrc <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;transform: short source buffer&quot;</span><span class="token punctuation">)</span>
ErrEndOfSpan <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;transform: input and output are not identical&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包命名" tabindex="-1"><a class="header-anchor" href="#包命名" aria-hidden="true">#</a> 包命名</h3><p>包名选择有意义的名称，尽量避免：util ， common</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>bytes<span class="token punctuation">.</span>Buffer
ioutil<span class="token punctuation">.</span>ReadFile
strconv<span class="token punctuation">.</span>Atoi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import路径" tabindex="-1"><a class="header-anchor" href="#import路径" aria-hidden="true">#</a> import路径</h3><ul><li>路径中的最后一段尽量和包名保持一致，例如： &quot;net/http&quot; // package http 调用：http.File</li><li>路径尽量流畅，避免类似这样： “github.com/goauth/oauth2” 类库一般会把代码放在根目录： “github.com/oauth2”</li><li>路径都是小写，尽量避免混合大小写</li></ul><h2 id="常用缩写" tabindex="-1"><a class="header-anchor" href="#常用缩写" aria-hidden="true">#</a> 常用缩写</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src = source
srv = server
arg = argument
conn = connect, connection
attr = attribute
abs = absolute
min = minimum
len = length
auth = authenticate
buf = buffer
ctl = control
ctx = context
str = string
msg = message
fmt = format
dest = destination
diff = difference
orig = original
recv = receive
ref = reference
repo = repository
util = utility
fmt = format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","go-format.html.vue"]]);export{r as default};
