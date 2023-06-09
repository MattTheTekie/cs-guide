import{_ as n,o as s,c as r,a as o}from"./app-3d979d38.js";const a={},i=o(`<h1 id="node的使用" tabindex="-1"><a class="header-anchor" href="#node的使用" aria-hidden="true">#</a> node的使用</h1><h2 id="node使用国内镜像" tabindex="-1"><a class="header-anchor" href="#node使用国内镜像" aria-hidden="true">#</a> node使用国内镜像</h2><p>假设已经安装好了npm,则需要更改代理 <code>npm i -g mirror-config-china</code> 他会在<code>$home</code> 目录生成一个.npmrc文件,配置代理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npmmirror.com
<span class="token assign-left variable">disturl</span><span class="token operator">=</span>https://npmmirror.com/dist
chromedriver-cdnurl<span class="token operator">=</span>https://npmmirror.com/mirrors/chromedriver
couchbase-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/couchbase/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
debug-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/node-inspector
electron-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/electron/
flow-bin-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/flow/v
fse-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/fsevents
fuse-bindings-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/fuse-bindings/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
git4win-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/git-for-windows
gl-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/gl/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
grpc-node-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors
hackrf-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/hackrf/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
leveldown-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/leveldown/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
leveldown-hyper-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/leveldown-hyper/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
mknod-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/mknod/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
node-sqlite3-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors
node-tk5-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/node-tk5/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
nodegit-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/nodegit/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/
operadriver-cdnurl<span class="token operator">=</span>https://npmmirror.com/mirrors/operadriver
phantomjs-cdnurl<span class="token operator">=</span>https://npmmirror.com/mirrors/phantomjs
profiler-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/node-inspector/
puppeteer-download-host<span class="token operator">=</span>https://npmmirror.com/mirrors
python-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/python
rabin-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/rabin/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
sass-binary-site<span class="token operator">=</span>https://npmmirror.com/mirrors/node-sass
sodium-prebuilt-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/sodium-prebuilt/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
sqlite3-binary-site<span class="token operator">=</span>https://npmmirror.com/mirrors/sqlite3
utf-8-validate-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/utf-8-validate/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
utp-native-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/utp-native/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
zmq-prebuilt-binary-host-mirror<span class="token operator">=</span>https://npmmirror.com/mirrors/zmq-prebuilt/v<span class="token punctuation">{</span>version<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局包位置" tabindex="-1"><a class="header-anchor" href="#全局包位置" aria-hidden="true">#</a> 全局包位置</h2><p>npm全局包位置 <code>AppData\\Roaming\\npm</code></p>`,6),e=[i];function t(p,c){return s(),r("div",null,e)}const l=n(a,[["render",t],["__file","npm-conf.html.vue"]]);export{l as default};
