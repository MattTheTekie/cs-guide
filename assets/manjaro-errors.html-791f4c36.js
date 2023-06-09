import{_ as a,o as n,c as s,a as e}from"./app-3d979d38.js";const p={},o=e(`<h1 id="linux驱动问题" tabindex="-1"><a class="header-anchor" href="#linux驱动问题" aria-hidden="true">#</a> linux驱动问题</h1><p>选择驱动: 一般选择 opensource,除非你是双显卡 ​</p><h2 id="manjaro软件更新失败-无效或已损坏的软件包-pgp签名" tabindex="-1"><a class="header-anchor" href="#manjaro软件更新失败-无效或已损坏的软件包-pgp签名" aria-hidden="true">#</a> Manjaro软件更新失败：无效或已损坏的软件包(pgp签名)</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># <span class="token number">1</span><span class="token punctuation">,</span>移除旧的keys
sudo rm <span class="token operator">-</span>rf <span class="token operator">/</span>etc<span class="token operator">/</span>pacman<span class="token punctuation">.</span>d<span class="token operator">/</span>gnupg
# <span class="token number">2</span><span class="token punctuation">,</span>初始化pacman的keys
sudo pacman<span class="token operator">-</span>key <span class="token operator">--</span>init
# <span class="token number">3</span><span class="token punctuation">,</span>加载签名的keys
sudo pacman<span class="token operator">-</span>key <span class="token operator">--</span>populate archlinux
# <span class="token number">4</span><span class="token punctuation">,</span>刷新升级已经签名的keys
sudo pacman<span class="token operator">-</span>key <span class="token operator">--</span>refresh<span class="token operator">-</span>keys
# <span class="token number">5</span><span class="token punctuation">,</span>清空并且下载新数据
sudo pacman <span class="token operator">-</span><span class="token class-name">Sc</span>
# <span class="token number">6</span><span class="token punctuation">,</span>安装archlinuxcn<span class="token operator">-</span>keyring
sudo pacman <span class="token operator">-</span><span class="token class-name">S</span> archlinuxcn<span class="token operator">-</span>keyring

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[o];function c(t,l){return n(),s("div",null,r)}const d=a(p,[["render",c],["__file","manjaro-errors.html.vue"]]);export{d as default};
