import{_ as n,o as a,c as e,a as s}from"./app-3d979d38.js";const i={},d=s(`<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h2 id="capacitor" tabindex="-1"><a class="header-anchor" href="#capacitor" aria-hidden="true">#</a> capacitor</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#安装 Capacitor</span>
npm install <span class="token operator">--</span>save @capacitor/core @capacitor/<span class="token function">cli</span>

<span class="token comment">#初始化 Capacitor，会要求输入 App Name、App ID</span>
npx cap init

<span class="token comment">#添加 iOS 或 Android 平台</span>
npx cap add ios 
npx cap add android 

<span class="token comment">#自动打开 Xcode 或 Android Studio 打包工程。</span>
npx cap open ios 
npx cap open android 

<span class="token comment">#拷贝\`www\`目录到iOS或Android工程</span>
 npx cap <span class="token function">copy</span> ios
 npx cap <span class="token function">copy</span> android 
 
<span class="token comment">#安装插件或依赖后更新iOS或Androd工程的依赖</span>
 npx cap update ios 
 npx cap update android 
 
 <span class="token comment">#同步工程包括更新依赖以及拷贝\`www\`目录，相当于\`copy\`+\`update\`</span>
 npx cap sync
 
 <span class="token comment">#打开浏览器测试PWA</span>
 npx cap serve 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># live-reload</span>
ionic capacitor run android <span class="token parameter variable">-l</span> <span class="token parameter variable">--external</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[d];function l(r,o){return a(),e("div",null,c)}const t=n(i,[["render",l],["__file","quick-start.html.vue"]]);export{t as default};
