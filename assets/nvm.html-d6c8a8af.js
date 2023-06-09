import{_ as i,r,o as t,c as d,d as n,e,b as a,a as l}from"./app-3d979d38.js";const o={},c=n("h1",{id:"使用nvm和fnm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用nvm和fnm","aria-hidden":"true"},"#"),e(" 使用nvm和fnm")],-1),m={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"提示",-1),p={href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),u=n("h2",{id:"linux安装nvm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux安装nvm","aria-hidden":"true"},"#"),e(" linux安装nvm")],-1),b={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"windows安装nvm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows安装nvm","aria-hidden":"true"},"#"),e(" windows安装nvm")],-1),g=n("h3",{id:"下载地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载地址","aria-hidden":"true"},"#"),e(" 下载地址")],-1),f={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nvm 设置淘宝镜像</span>
<span class="token comment">#windows版本</span>
<span class="token comment"># 设置npm_mirror:</span>
nvm npm_mirror https://npmmirror.com/mirrors/npm/

<span class="token comment">#设置node_mirror:</span>
nvm node_mirror https://npmmirror.com/mirrors/node/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后就是安装nodejs了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装最新的node</span>
nvm <span class="token function">install</span> <span class="token function">node</span>

<span class="token comment">#使用某个版本</span>
nvm use <span class="token number">16.2</span>.0

<span class="token comment">#卸载某个版本</span>
nvm uninstall <span class="token number">16.2</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装nrm" tabindex="-1"><a class="header-anchor" href="#安装nrm" aria-hidden="true">#</a> 安装nrm</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>nrm可以随时切换镜像源</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> nrm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>nrm ls</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># nrm ls

  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function x(w,y){const s=r("ExternalLinkIcon");return t(),d("div",null,[c,n("div",m,[v,n("p",null,[e("也可以使用"),n("a",p,[e("fnm"),a(s)]),e(" 一个rust写的工具"),h,e(" nvm全名node.js version management，顾名思义是一个nodejs的版本管理工具。通过它可以安装和切换不同版本的nodejs。下面列出下载、安装及使用方法:")])]),u,n("p",null,[e("见 "),n("a",b,[e("https://github.com/nvm-sh/nvm"),a(s)])]),_,g,n("p",null,[n("a",f,[e("https://github.com/coreybutler/nvm-windows/releases"),a(s)])]),k])}const N=i(o,[["render",x],["__file","nvm.html.vue"]]);export{N as default};
