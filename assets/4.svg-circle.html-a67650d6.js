import{_ as c,r as s,o as e,c as u,b as a,d as n,e as l,a as t}from"./app-3d979d38.js";const i={},k=n("h1",{id:"使用代码实现svg",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用代码实现svg","aria-hidden":"true"},"#"),l(" 使用代码实现svg")],-1),r=n("p",null,"下面是一个例子",-1),d=t(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>svgRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> svgRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> svg1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// set width and height</span>
  svg1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  svg1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// create a circle</span>
  <span class="token keyword">const</span> cir1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;fill&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// attach it to the container</span>
  svg1<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>cir1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>svgRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
  svgRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>svg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-svg-元素" tabindex="-1"><a class="header-anchor" href="#创建-svg-元素" aria-hidden="true">#</a> 创建 SVG 元素</h2><p>首先，需要创建一个 SVG 元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> svg1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
svg1<span class="token punctuation">.</span> <span class="token function">setAttribute</span> <span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
svg1<span class="token punctuation">.</span> <span class="token function">setAttribute</span> <span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 viewBox 的一个例子:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> svg1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
svg1<span class="token punctuation">.</span> <span class="token function">setAttribute</span> <span class="token punctuation">(</span><span class="token string">&quot;viewBox&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0 0 300 300&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-svg-形状" tabindex="-1"><a class="header-anchor" href="#创建-svg-形状" aria-hidden="true">#</a> 创建 SVG 形状</h2><p>任何 SVG 元素都是这样创建的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cir1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cx&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cy&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要创建其他形状，代码类似。创建 shape 标记，然后设置其属性。</p><p>创建一个形状之后，需要将其附加到 SVG 元素上:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// create svg element</span>
<span class="token keyword">const</span> svg1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
svg1<span class="token punctuation">.</span> <span class="token function">setAttribute</span> <span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
svg1<span class="token punctuation">.</span> <span class="token function">setAttribute</span> <span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// create a shape</span>
<span class="token keyword">const</span> cir1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cx&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cy&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
cir1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// attach the shape to svg</span>
svg1 <span class="token punctuation">.</span> <span class="token function">appendChild</span> <span class="token punctuation">(</span> cir1 <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// attach the svg to a element on page</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span> <span class="token punctuation">(</span><span class="token string">&#39;x77738&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">appendChild</span> <span class="token punctuation">(</span> svg1 <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将-svg-元素附加到网页" tabindex="-1"><a class="header-anchor" href="#将-svg-元素附加到网页" aria-hidden="true">#</a> 将 SVG 元素附加到网页</h2><p>您需要将 SVG 元素附加到网页上的一个元素上。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> svg1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// code for adding shapes ...</span>

<span class="token comment">// attach the svg to a element on the web page</span>
<span class="token keyword">const</span> e1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span> <span class="token punctuation">(</span><span class="token string">&#39;x43865&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
e1 <span class="token punctuation">.</span> <span class="token function">appendChild</span> <span class="token punctuation">(</span> svg1 <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这件事应该最后再做。</p><h2 id="如何编写-svg-脚本" tabindex="-1"><a class="header-anchor" href="#如何编写-svg-脚本" aria-hidden="true">#</a> 如何编写 SVG 脚本？</h2><p>记住 SVG 只是 XML。(XML 类似于 HTML，但语法更加严格)所以，要编写 SVG 脚本，您不必做任何特殊的事情。只需要使用 JavaScript 编写普通的 XML 脚本。</p><p>以下是你需要做的。</p><ol><li>使用“ createElementNS”创建一个 SVG 元素</li><li>使用“ createElementNS”创建 SVG 形状元素(例如，circle、 rect、 path、 ... ...)</li><li>将 shape 元素附加到 SVG 元素</li><li>将 SVG 元素附加到文档中</li></ol><h2 id="创建一个圆" tabindex="-1"><a class="header-anchor" href="#创建一个圆" aria-hidden="true">#</a> 创建一个圆</h2>`,21),v=t(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> circle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cos <span class="token operator">=</span> Math<span class="token punctuation">.</span>cos<span class="token punctuation">;</span>
  <span class="token keyword">const</span> sin <span class="token operator">=</span> Math<span class="token punctuation">.</span>sin<span class="token punctuation">;</span>
  <span class="token keyword">const</span> π <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">f_matrix_times</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>c<span class="token punctuation">,</span> d<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    a <span class="token operator">*</span> x <span class="token operator">+</span> b <span class="token operator">*</span> y<span class="token punctuation">,</span>
    c <span class="token operator">*</span> x <span class="token operator">+</span> d <span class="token operator">*</span> y<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">f_rotate_matrix</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token function">cos</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cos</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">f_vec_add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>a1<span class="token punctuation">,</span> a2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>b1<span class="token punctuation">,</span> b2<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>a1 <span class="token operator">+</span> b1<span class="token punctuation">,</span> a2 <span class="token operator">+</span> b2<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">f_svg_ellipse_arc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>cx<span class="token punctuation">,</span> cy<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>rx<span class="token punctuation">,</span> ry<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>t1<span class="token punctuation">,</span> Δ<span class="token punctuation">]</span><span class="token punctuation">,</span> φ</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Δ <span class="token operator">=</span> Δ <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> π<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rotMatrix <span class="token operator">=</span> <span class="token function">f_rotate_matrix</span><span class="token punctuation">(</span>φ<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>sX<span class="token punctuation">,</span> sY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">f_vec_add</span><span class="token punctuation">(</span>
      <span class="token function">f_matrix_times</span><span class="token punctuation">(</span>rotMatrix<span class="token punctuation">,</span> <span class="token punctuation">[</span>rx <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">,</span> ry <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>cx<span class="token punctuation">,</span> cy<span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>eX<span class="token punctuation">,</span> eY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">f_vec_add</span><span class="token punctuation">(</span>
      <span class="token function">f_matrix_times</span><span class="token punctuation">(</span>rotMatrix<span class="token punctuation">,</span> <span class="token punctuation">[</span>rx <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>t1 <span class="token operator">+</span> Δ<span class="token punctuation">)</span><span class="token punctuation">,</span> ry <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>t1 <span class="token operator">+</span> Δ<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>cx<span class="token punctuation">,</span> cy<span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fA <span class="token operator">=</span> Δ <span class="token operator">&gt;</span> π <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fS <span class="token operator">=</span> Δ <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 命名空间</span>
    <span class="token keyword">var</span> <span class="token constant">SVG_NS</span> <span class="token operator">=</span> <span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> svgArea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;circle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 1、创建svg容器</span>
    <span class="token keyword">var</span> svg <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token constant">SVG_NS</span><span class="token punctuation">,</span> <span class="token string">&quot;svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2、创建svg中的 tag, 如rect</span>

    <span class="token keyword">const</span> path_2wk2r <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token constant">SVG_NS</span><span class="token punctuation">,</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path_2wk2r<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>
      <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;M &quot;</span> <span class="token operator">+</span>
        sX <span class="token operator">+</span>
        <span class="token string">&quot; &quot;</span> <span class="token operator">+</span>
        sY <span class="token operator">+</span>
        <span class="token string">&quot; A &quot;</span> <span class="token operator">+</span>
        <span class="token punctuation">[</span>rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> <span class="token punctuation">(</span>φ <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> π<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">360</span><span class="token punctuation">,</span> fA<span class="token punctuation">,</span> fS<span class="token punctuation">,</span> eX<span class="token punctuation">,</span> eY<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 4、将tag塞进svg中</span>
    svg<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>path_2wk2r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 5、将svg塞进指定容器</span>

    <span class="token keyword">return</span> svg<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> svgDom <span class="token operator">=</span> <span class="token function">f_svg_ellipse_arc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  circle<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>svgDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(g,b){const p=s("create-svg"),o=s("svg-list");return e(),u("div",null,[k,r,a(p),d,a(o),v])}const f=c(i,[["render",m],["__file","4.svg-circle.html.vue"]]);export{f as default};
