import{_ as o,r as p,o as l,c as i,d as s,e as n,b as e,a as t}from"./app-3d979d38.js";const c={},u=t(`<h1 id="babel教程" tabindex="-1"><a class="header-anchor" href="#babel教程" aria-hidden="true">#</a> babel教程</h1><p>使用babel需要以下依赖</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">&quot;@babel/cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.12.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.11.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.12.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.12.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.11.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/preset-typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.10.4&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;babel-jest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^26.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-plugin-lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-plugin-module-resolver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-preset-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.2&quot;</span><span class="token punctuation">,</span>
  
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>你是否采用的是单一仓库（monorepo）模式？</li><li>你是否需要编译 node_modules？</li></ul>`,4),r={href:"https://www.babeljs.cn/docs/configuration#babelconfigjson",target:"_blank",rel:"noopener noreferrer"},d=s("ul",null,[s("li",null,"你的配置文件是否仅适用于项目的某个部分？")],-1),b={href:"https://www.babeljs.cn/docs/configuration#babelrcjson",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.babeljs.cn/docs/config-files#project-wide-configuration",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/babel/babel/blob/master/babel.config.js",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="babel-config-json" tabindex="-1"><a class="header-anchor" href="#babel-config-json" aria-hidden="true">#</a> babel.config.json</h2><p>在项目的根目录（package.json 文件所在的目录）下创建一个名为 babel.config.json 的文件，并输入如下内容。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个例子" tabindex="-1"><a class="header-anchor" href="#一个例子" aria-hidden="true">#</a> 一个例子</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;edge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;firefox&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;67&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;safari&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11.1&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.6.5&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="或者使用babel-config-js" tabindex="-1"><a class="header-anchor" href="#或者使用babel-config-js" aria-hidden="true">#</a> 或者使用babel.config.js</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>module.exports = function (api) <span class="token punctuation">{</span>
  api.cache(<span class="token boolean">true</span>);

  const presets = <span class="token punctuation">[</span> ... <span class="token punctuation">]</span>;
  const plugins = <span class="token punctuation">[</span> ... <span class="token punctuation">]</span>;

  return <span class="token punctuation">{</span>
    presets<span class="token punctuation">,</span>
    plugins
  <span class="token punctuation">}</span>;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>需要添加如下依赖
<span class="token punctuation">{</span>
      <span class="token property">&quot;@babel/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.14.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.14.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.14.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.2.2&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

并在规则中添加如下<span class="token operator">:</span>
<span class="token punctuation">{</span>
        test<span class="token operator">:</span> /\\.js$/<span class="token punctuation">,</span>
        exclude<span class="token operator">:</span> /(node_modules|bower_components)/<span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">{</span>
          loader<span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          options<span class="token operator">:</span> <span class="token punctuation">{</span>
            presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

还要配置一下babel.config.json

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function q(g,h){const a=p("ExternalLinkIcon");return l(),i("div",null,[u,s("blockquote",null,[s("p",null,[n("那么 "),s("a",r,[n("babel.config.json"),e(a)]),n(" 文件可以满足你的的需求！")])]),d,s("blockquote",null,[s("p",null,[n("那么 "),s("a",b,[n(".babelrc.json"),e(a)]),n(" 文件适合你！ 我们建议使用 "),s("a",v,[n("babel.config.json"),e(a)]),n(" 格式的配置文件。 "),s("a",k,[n("Babel 自身使用的就是这种"),e(a)]),n("。")])]),m])}const j=o(c,[["render",q],["__file","babel-loader.html.vue"]]);export{j as default};
