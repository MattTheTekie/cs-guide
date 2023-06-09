import{_ as r,r as a,o as s,c as l,d as e,e as n,b as o,a as i}from"./app-3d979d38.js";const c={},d=e("h1",{id:"electron相关资源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#electron相关资源","aria-hidden":"true"},"#"),n(" electron相关资源")],-1),u=e("h2",{id:"electron-fiddle-无法下载electron的问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#electron-fiddle-无法下载electron的问题","aria-hidden":"true"},"#"),n(" electron fiddle 无法下载electron的问题")],-1),p={href:"https://github.com/electron/fiddle/issues/258",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ELECTRON_MIRROR=&quot;https://npmmirror.com/mirrors/electron/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意,electron使用vue-devtools需要使用ladder下载插件!!!</p><h2 id="使用vue-devtools" tabindex="-1"><a class="header-anchor" href="#使用vue-devtools" aria-hidden="true">#</a> 使用vue-devtools</h2><p>可以使用<code>electron-devtools-vendor</code>这个包</p><p>如果不想ladder 需要把devtool插件的文件夹放到这里</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\yanni\\AppData\\Roaming\\vite-electron-builder\\extensions\\ljjemllljcmogpfapbkkighbhhppjdbg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动打开控制台,添加快捷键<code>ctrl+shift+i</code> 在createWindow函数里面加</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>globalShortcut<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;Shift+CommandOrControl+I&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        browserWindow<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">toggleDevTools</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="electron网站" tabindex="-1"><a class="header-anchor" href="#electron网站" aria-hidden="true">#</a> electron网站</h2>`,9),b={href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/electron/fiddle",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/nklayman/vue-cli-plugin-electron-builder",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/cawa-93/vite-electron-builder",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/SimulatedGREG/electron-vue",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"开源项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开源项目","aria-hidden":"true"},"#"),n(" 开源项目")],-1),k={href:"https://github.com/blogwy/BilibiliVideoDownload",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/nklayman/vue-cli-plugin-electron-builder",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/cawa-93/vite-electron-builder",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/lyswhut/lx-music-desktop",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/biuuu/genshin-wish-export",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/cuiocean/ZY-Player",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/oldj/SwitchHosts",target:"_blank",rel:"noopener noreferrer"};function S(V,B){const t=a("ExternalLinkIcon");return s(),l("div",null,[d,u,e("p",null,[n("解决办法 "),e("a",p,[n("github issue"),o(t)]),n(" 设置环境变量")]),h,e("ul",null,[e("li",null,[e("a",b,[n("https://www.electronjs.org/"),o(t)])]),e("li",null,[e("a",g,[n("https://github.com/electron/fiddle"),o(t)])]),e("li",null,[e("a",_,[n("https://github.com/nklayman/vue-cli-plugin-electron-builder"),o(t)])]),e("li",null,[e("a",m,[n("https://github.com/cawa-93/vite-electron-builder"),o(t)])]),e("li",null,[e("a",f,[n("https://github.com/SimulatedGREG/electron-vue"),o(t)])])]),v,e("p",null,[e("a",k,[n("https://github.com/blogwy/BilibiliVideoDownload"),o(t)])]),e("p",null,[e("a",x,[n("vue-cli-plugin-electron-builder"),o(t)])]),e("p",null,[e("a",w,[n("vite-electron-builder"),o(t)])]),e("p",null,[e("a",j,[n("picgo"),o(t)])]),e("p",null,[e("a",y,[n("落雪音乐助手"),o(t)]),n(" ​ "),e("a",E,[n("https://github.com/biuuu/genshin-wish-export"),o(t)])]),e("p",null,[e("a",R,[n("ZY-Player"),o(t)])]),e("p",null,[e("a",C,[n("switchhosts"),o(t)])])])}const N=r(c,[["render",S],["__file","electron-website.html.vue"]]);export{N as default};