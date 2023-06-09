import{_ as t,r as p,o as e,c as o,d as n,e as s,b as c,a as i}from"./app-3d979d38.js";const l={},u=n("h1",{id:"react升级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react升级","aria-hidden":"true"},"#"),s(" react升级")],-1),r={href:"https://www.cnblogs.com/crazycode2/p/10340183.html",target:"_blank",rel:"noopener noreferrer"},d=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span><span class="token parameter">nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id <span class="token operator">!==</span> nextProps<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求详情数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> nextProps<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以写成;</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">static</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id <span class="token operator">!==</span> state<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">editInfo</span><span class="token operator">:</span> props<span class="token punctuation">.</span>editInfo
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> prevState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id <span class="token operator">!==</span> prevState<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求详情数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editInfo<span class="token punctuation">.</span>id
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("react 生命周期 componentWillReceiveProps(nextProps) 的替代方法"),c(a)]),s(" 例如:")]),d])}const f=t(l,[["render",k],["__file","upgrade.html.vue"]]);export{f as default};
