import{_ as p,r as t,o as e,c as o,d as n,e as l,b as i,a as s}from"./app-3d979d38.js";const c={},r=s(`<h1 id="vite插件" tabindex="-1"><a class="header-anchor" href="#vite插件" aria-hidden="true">#</a> vite插件</h1><h2 id="vitejs-plugin-vue-js-用于jsx-tsx" tabindex="-1"><a class="header-anchor" href="#vitejs-plugin-vue-js-用于jsx-tsx" aria-hidden="true">#</a> @vitejs/plugin-vue-js 用于jsx tsx</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i @vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>vue<span class="token operator">-</span>jsx <span class="token operator">-</span>d
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue-jsx&#39;</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-plugin-style-import-第三方包样式按需引入" tabindex="-1"><a class="header-anchor" href="#vite-plugin-style-import-第三方包样式按需引入" aria-hidden="true">#</a> vite-plugin-style-import 第三方包样式按需引入</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i vite<span class="token operator">-</span>plugin<span class="token operator">-</span>style<span class="token operator">-</span><span class="token keyword">import</span> <span class="token operator">-</span>d
<span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">libs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
           <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ant-design-vue/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/css</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rollup-plugin-terser-打包-压缩js代码-清除console-log" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-terser-打包-压缩js代码-清除console-log" aria-hidden="true">#</a> rollup-plugin-terser 打包 压缩js代码 清除console.log</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i <span class="token operator">-</span>d rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>terser
<span class="token keyword">import</span> <span class="token punctuation">{</span> terser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-terser&quot;</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">gzipSize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">brotliSize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-plugin-imagemin-打包压缩图片" tabindex="-1"><a class="header-anchor" href="#vite-plugin-imagemin-打包压缩图片" aria-hidden="true">#</a> vite-plugin-imagemin 打包压缩图片</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i <span class="token operator">-</span>d vite<span class="token operator">-</span>plugin<span class="token operator">-</span>imagemin
<span class="token keyword">import</span> viteImagemin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-imagemin&#39;</span>
plugins<span class="token punctuation">[</span>
      <span class="token function">viteImagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">gifsicle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token literal-property property">interlaced</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optipng</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">webp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mozjpeg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">65</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pngquant</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.65</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">svgo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">removeViewBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">removeEmptyAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-plugin-compression-开启gzip、br压缩" tabindex="-1"><a class="header-anchor" href="#vite-plugin-compression-开启gzip、br压缩" aria-hidden="true">#</a> vite-plugin-compression 开启gzip、br压缩</h2>`,10),u={href:"https://github.com/vbenjs/vite-plugin-compression",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> 
<span class="token keyword">import</span> compressPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span>
 plugins<span class="token punctuation">[</span>
      <span class="token function">compressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;.gz&#39;</span><span class="token punctuation">,</span><span class="token comment">//gz br</span>
        <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span> <span class="token comment">//brotliCompress gzip</span>
        <span class="token literal-property property">deleteOriginFile</span><span class="token operator">:</span><span class="token boolean">true</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>


     <span class="token comment">//vite.config.ts</span>
<span class="token literal-property property">build</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 生产环境下移除console</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-plugin-html" tabindex="-1"><a class="header-anchor" href="#vite-plugin-html" aria-hidden="true">#</a> vite-plugin-html</h2><p>在index.html插入想要的东西</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>&lt;%- title %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  &lt;%- injectScript %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createHtmlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-html&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">createHtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * 在这里写entry后，你将不需要在\`index.html\`内添加 script 标签，原有标签需要删除
       * <span class="token keyword">@default</span> src/main.ts
       */</span>
      <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;src/main.ts&#39;</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * 如果你想将 \`index.html\`存放在指定文件夹，可以修改它，否则不需要配置
       * <span class="token keyword">@default</span> index.html
       */</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;public/index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * 需要注入 index.html ejs 模版的数据
       */</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">injectScript</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;script src=&quot;./inject.js&quot;&gt;&lt;/script&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(v,m){const a=t("ExternalLinkIcon");return e(),o("div",null,[r,n("p",null,[n("a",u,[l("https://github.com/vbenjs/vite-plugin-compression"),i(a)])]),d])}const g=p(c,[["render",k],["__file","vite-plugins.html.vue"]]);export{g as default};
