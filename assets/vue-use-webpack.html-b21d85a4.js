import{_ as t,r as o,o as l,c,d as n,e as s,b as e,a as p}from"./app-3d979d38.js";const i={},r=n("h1",{id:"wepack教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wepack教程","aria-hidden":"true"},"#"),s(" wepack教程")],-1),u=n("h2",{id:"webpack-发布项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack-发布项目","aria-hidden":"true"},"#"),s(" Webpack 发布项目")],-1),d={href:"https://dailc.github.io/2017/03/13/webpackfreshmanualAndBug.html",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,[n("code",null,"webpack"),s(" 命令能够生成dist目录到磁盘中，最终，把打包后的代码，部署服务器中去")],-1),v=n("li",null,[n("code",null,"webpack-dev-server"),s(" 仅是在内存中生成的文件，并没有写到磁盘中，所以，只能在开发期间使用")],-1),m=p(`<h3 id="创建项目发布配置文件" tabindex="-1"><a class="header-anchor" href="#创建项目发布配置文件" aria-hidden="true">#</a> 创建项目发布配置文件</h3><ul><li>开发期间配置文件：<code>webpack.config.js</code></li><li>项目发布配置文件：<code>webpack.prod.js</code> （文件名称非固定 production 生产环境）</li><li>命令：<code>webpack --config webpack.prod.js</code> 指定配置文件名称运行webpack</li><li>参数：<code>--display-error-details</code> 用于显示webpack打包的错误信息</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/* package.json */</span>

<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.prod.js&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1 在项目根目录中创建 webpack.prod.js 文件</span>
<span class="token comment">// 2 在 package.json 中, 配置一个 scripts</span>
<span class="token comment">// 3 在 终端中 通过 npm run build 对项目进行打包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包处理过程" tabindex="-1"><a class="header-anchor" href="#打包处理过程" aria-hidden="true">#</a> 打包处理过程</h3><p>1 删除掉 devServer 相关的配置项 2 将图片和字体文件输出到指定的文件夹中 3 自动删除dist目录 4 分离第三方包（将使用的vue等第三方包抽离到 vender.js 中） 5 压缩混淆JS 以及 指定生成环境 6 抽取和压缩CSS文件 7 压缩HTML页面 8 配合vue的异步组件，实现按需加载功能</p><h3 id="处理图片路径" tabindex="-1"><a class="header-anchor" href="#处理图片路径" aria-hidden="true">#</a> 处理图片路径</h3>`,6),b=n("li",null,[s("注意：如果"),n("code",null,"limit"),s("小于比图片大，那么图片将被转化为"),n("code",null,"base64"),s("编码格式")],-1),h={href:"https://github.com/webpack-contrib/file-loader",target:"_blank",rel:"noopener noreferrer"},g=p(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/* webpack.prod.js */</span>
<span class="token comment">// 处理URL路径的loader</span>

<span class="token punctuation">{</span>
  test<span class="token operator">:</span> /\\.(jpg|png|gif|bmp|jpeg)$/<span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">{</span>
    loader<span class="token operator">:</span> &#39;url-loader&#39;<span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      limit<span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> &#39;images/<span class="token punctuation">[</span>hash<span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">]</span>.<span class="token punctuation">[</span>ext<span class="token punctuation">]</span>&#39; <span class="token comment">// 作用：将图片输出到images文件夹中，文件名采用7位的哈希值（MD5），并且保持原来的图片文件扩展名</span>

      <span class="token comment">// name：指定文件输出路径和输出文件命令规则</span>
      <span class="token comment">// [hash:7]：表示使用7位哈希值代表文件名称</span>
      <span class="token comment">// [ext]：表示保持文件原有后缀名</span>
      <span class="token comment">// name: &#39;imgs/img-[hash:7].[ext]&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动删除dist目录" tabindex="-1"><a class="header-anchor" href="#自动删除dist目录" aria-hidden="true">#</a> 自动删除dist目录</h3><ul><li>安装：<code>npm i -D clean-webpack-plugin</code></li><li>作用: 每次打包之前, 删除上一次打包的dist目录</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* webpack.prod.js */</span>
<span class="token keyword">const</span> cleanWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// 创建一个删除文件夹的插件，删除dist目录</span>
  <span class="token keyword">new</span> <span class="token class-name">cleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分离第三方包" tabindex="-1"><a class="header-anchor" href="#分离第三方包" aria-hidden="true">#</a> 分离第三方包</h3><ul><li>目的：将公共的第三方包，抽离为一个单独的包文件，这样防止重复打包！ <ul><li>例如：main.js、router、vuex中都引入了vue，不分离的话，vue会被打包3次</li><li>抽离后, vue文件只会被打包一次, 用到的地方仅仅是引用</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* webpack.prod.js */</span>

<span class="token comment">// 1 入口 -- 打包文件的入口</span>
<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 项目代码入口</span>
  <span class="token literal-property property">app</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/js/main.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 第三方包入口</span>
  <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 2 修改输出文件路径和命名规则</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].[chunkhash].js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// 3 抽离第三方包</span>
  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 将 entry 中指定的 [&#39;vue&#39;, &#39;vue-router&#39;, &#39;axios&#39;] 打包到名为 vendor 的js文件中</span>
    <span class="token comment">// 第三方包入口名称，对应 entry 中的 vendor 属性</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩混淆js" tabindex="-1"><a class="header-anchor" href="#压缩混淆js" aria-hidden="true">#</a> 压缩混淆JS</h3><ul><li>注意：<strong>uglifyjs 无法压缩ES6的代码</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// 优化代码</span>
  <span class="token comment">// https://github.com/webpack-contrib/uglifyjs-webpack-plugin/tree/v0.4.6</span>
  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 压缩</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 移除警告</span>
      <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// 指定环境为生产环境：vue会根据这一项启用压缩后的vue文件</span>
  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;p<wbr>rocess.env&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;NODE_ENV&#39;</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽取和压缩css文件" tabindex="-1"><a class="header-anchor" href="#抽取和压缩css文件" aria-hidden="true">#</a> 抽取和压缩CSS文件</h3>`,11),y=n("li",null,[s("安装：抽离 "),n("code",null,"npm i -D extract-text-webpack-plugin")],-1),w=n("li",null,[s("安装：压缩 "),n("code",null,"npm i -D optimize-css-assets-webpack-plugin")],-1),f={href:"https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.npmjs.com/package/optimize-css-assets-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},j=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>压缩和抽离<span class="token constant">CSS</span>报错的说明：
Error processing file<span class="token operator">:</span> css<span class="token operator">/</span>style<span class="token punctuation">.</span>css
postcss<span class="token operator">-</span>svgo<span class="token operator">:</span> Error <span class="token keyword">in</span> parsing <span class="token constant">SVG</span><span class="token operator">:</span> Unquoted attribute value

原因：压缩和抽离<span class="token constant">CSS</span>的插件中只允许 <span class="token constant">SVG</span> 使用双引号
<span class="token comment">/* webpack.prod.js */</span>

<span class="token comment">// 分离 css 到独立的文件中</span>
<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;extract-text-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 压缩 css 资源文件</span>
<span class="token keyword">const</span> OptimizeCssAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// bug描述: 生成后面的css文件中图片路径错误，打开页面找不到图片</span>
<span class="token comment">// 解决：bing搜索 webpack css loader 样式图片路径</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token comment">// https://doc.webpack-china.org/configuration/output/#output-publicpath</span>
  <span class="token comment">// 设置公共路径</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// 通过插件抽离 css (参数)</span>
  <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">&quot;css/style.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 抽离css 的辅助压缩插件</span>
  <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩html页面" tabindex="-1"><a class="header-anchor" href="#压缩html页面" aria-hidden="true">#</a> 压缩HTML页面</h3>`,2),x={href:"https://github.com/kangax/html-minifier#options-quick-reference",target:"_blank",rel:"noopener noreferrer"},q=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 模板页面</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// 压缩HTML</span>
  <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 移除空白</span>
    <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 移除注释</span>
    <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 移除属性中的双引号</span>
    <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue配合webpack实现路由按需加载" tabindex="-1"><a class="header-anchor" href="#vue配合webpack实现路由按需加载" aria-hidden="true">#</a> vue配合webpack实现路由按需加载</h3>`,2),S={href:"https://router.vuejs.org/zh-cn/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://cn.vuejs.org/v2/guide/components.html#",target:"_blank",rel:"noopener noreferrer"},P={href:"http://www.cnblogs.com/zhanyishu/p/6587571.html",target:"_blank",rel:"noopener noreferrer"},E=n("li",null,"Vue.js路由懒加载[译]",-1),N=p(`<h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4><ul><li>1 修改组件的引用方式</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方式一: require.ensure()</span>
<span class="token keyword">const</span> <span class="token function-variable function">NewsList</span> <span class="token operator">=</span> <span class="token parameter">r</span> <span class="token operator">=&gt;</span> require<span class="token punctuation">.</span><span class="token function">ensure</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">r</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../components/news/newslist.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;news&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 方式二: import() -- 推荐</span>
<span class="token comment">// 注意：/* webpackChunkName: &quot;newsinfo&quot; */ 是一个特殊的语法，表示生成js文件的名称</span>
<span class="token keyword">const</span> <span class="token function-variable function">NewsInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;newsinfo&quot; */</span> <span class="token string">&#39;../components/news/newsinfo.vue&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2 修改 webpack 配置文件的output</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ------添加 chunkFilename, 指定输出js文件的名称------</span>
  <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].[chunkhash].js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function V(z,T){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,u,n("ul",null,[n("li",null,[n("a",d,[s("webpack 打包的各种坑"),e(a)])]),k,v]),m,n("ul",null,[b,n("li",null,[n("a",h,[s("name参数介绍"),e(a)])])]),g,n("ul",null,[y,w,n("li",null,[n("a",f,[s("webpack 抽离CSS文档"),e(a)])]),n("li",null,[n("a",_,[s("压缩抽离后的CSS"),e(a)])])]),j,n("ul",null,[n("li",null,[s("详细的配置可以参考"),n("a",x,[s("html-minifier"),e(a)])])]),q,n("ul",null,[n("li",null,[n("a",S,[s("Vue 路由懒加载"),e(a)])]),n("li",null,[n("a",C,[s("Vue 异步组件"),e(a)])]),n("li",null,[n("a",P,[s("Vue 组件懒加载浅析"),e(a)])]),E]),N])}const D=t(i,[["render",V],["__file","vue-use-webpack.html.vue"]]);export{D as default};
