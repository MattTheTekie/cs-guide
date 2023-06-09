import{_ as a,o as n,c as s,a as e}from"./app-3d979d38.js";const r={},i=e(`<h1 id="yarn配置" tabindex="-1"><a class="header-anchor" href="#yarn配置" aria-hidden="true">#</a> yarn配置</h1><h2 id="从-create-包创建一个模板" tabindex="-1"><a class="header-anchor" href="#从-create-包创建一个模板" aria-hidden="true">#</a> 从 <code>create-*</code> 包创建一个模板</h2><p>这个命令让你做两件事情:</p><ul><li>全局安装<code>create-&lt;starter-kit-package&gt;</code>  , 或者把这个包更新到最新版本(如果存在的话)</li><li>Run the executable located in the <code>bin</code> field of the starter kits <code>package.json</code>, forwarding any <code>&lt;args&gt;</code> to it 例如, <code>yarn create react-app my-app</code>等价于:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> create-react-app
create-react-app my-app
<span class="token function">yarn</span> remove create-react-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 全局包位置

C:\\Users\\yanni\\AppData\\Local\\Yarn  (bin目录是可执行文件目录)
npm全局包位置
C:\\Users\\yanni\\AppData\\Roaming\\npm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用yarn 安装node-sass失败 出现node-gyp error就在根目录下新建一个<code>.yarnrc</code> 文件 然后写入,这样就可以下载node-sass了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
phantomjs_cdnurl https://npmmirror.com/mirrors/phantomjs
sass_binary_site https://npmmirror.com/mirrors/node-sass/
registry https://registry.npmmirror.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实node-sass已经弃用了,建议使用dart-sass , 命令<code>yarn add sass</code> ​</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> disturl https://npmmirror.com/dist <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> electron_mirror https://npmmirror.com/mirrors/electron/ <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> sass_binary_site https://npmmirror.com/mirrors/node-sass/ <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> chromedriver_cdnurl https://npmmirror.com/dist/chromedriver <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> operadriver_cdnurl https://npmmirror.com/dist/operadriver <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> fse_binary_host_mirror https://npmmirror.com/mirrors/fsevents <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[i];function c(l,d){return n(),s("div",null,t)}const p=a(r,[["render",c],["__file","yarn-conf.html.vue"]]);export{p as default};
