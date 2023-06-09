import{_ as t,r as l,o as d,c,d as n,e as s,b as i,a}from"./app-3d979d38.js";const p={},o=a(`<h1 id="elementaryos安装" tabindex="-1"><a class="header-anchor" href="#elementaryos安装" aria-hidden="true">#</a> elementaryos安装</h1><h2 id="安装系统更新" tabindex="-1"><a class="header-anchor" href="#安装系统更新" aria-hidden="true">#</a> 安装系统更新</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade
<span class="token function">sudo</span> <span class="token function">apt-get</span> dist upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◾安装额外的驱动</p><p>在软件与更新中直接选择安装额外驱动即可。</p><p>◾安装媒体解码器并且启用 DVD 回放</p><p>a) 安装多媒体框架</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> apt-add-repository ppa:mc3man/trusty-media

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">[</span>Ubuntu<span class="token punctuation">]</span><span class="token punctuation">(</span>https://www.linuxidc.com/topicnews.aspx?tid<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>-restricted-extras ffmpeg gstreamer0.10-plugins-ugly libavcodec-extra-54 libvdpau-va-gl1 libmad0 mpg321 gstreamer1.0-libav
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b) 启用 DVD 回放</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/share/doc/libdvdread4/install-css.s­h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◾安装 VLC 媒体播放器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> vlc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),u={href:"http://www.linuxidc.com/Java",target:"_blank",rel:"noopener noreferrer"},r=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository <span class="token parameter variable">-y</span> ppa:webupd8team/java

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">[</span>Oracle<span class="token punctuation">]</span><span class="token punctuation">(</span>https://www.linuxidc.com/topicnews.aspx?tid<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span>-java9-installer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◾安装各种归档文件，压缩文件格式支持</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> unace <span class="token function">rar</span> <span class="token function">unrar</span> p7zip-rar p7zip sharutils uudeview mpack arj cabextract lzip lunzip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◾安装 LibreOffice 办公软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libreoffice libreoffice-gtk libreoffice-style-sifr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◾安装其他的网页浏览器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> chromium-browser firefox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◾安装种子下载器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> transmission
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◾安装下载管理器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://xdman.sourceforge.net/xdman_mint_ubuntu.deb

<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> xdman_mint_ubuntu.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◾安装图像处理软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gimp inkscape
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◾安装搜索指示器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> apt-add-repository ppa:elementary-os/unstable-upstream

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> indicator-synapse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◾安装系统调整工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> apt-add-repository ppa:mpstark/elementary-tweaks-daily

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> elementary-tweak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◾安装 Bleachbit 系统记录清理工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> bleachbit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◾安装在线云存储客户端</p>`,20),v={href:"https://www.dropbox.com/install?os=lnx",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>安装 Google Drive</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:alessandro-strada/ppa

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> google-drive-ocamlfuse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◾针对笔记本，安装 TLP 以延长电池寿命，减少发热</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:linrunner/tlp

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> tlp tlp-rdw

<span class="token function">sudo</span> tlp start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(g,h){const e=l("ExternalLinkIcon");return d(),c("div",null,[o,n("p",null,[s("◾安装 "),n("a",u,[s("Java"),i(e)])]),r,n("p",null,[s("下载 DropBox : "),n("a",v,[s("https://www.dropbox.com/install?os=lnx"),i(e)])]),b])}const k=t(p,[["render",m],["__file","elementary-linux.html.vue"]]);export{k as default};
