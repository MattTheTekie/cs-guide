import{_ as i,r as l,o as r,c as t,d as s,e as a,b as c,a as n}from"./app-3d979d38.js";const p={},o=n(`<h1 id="配置manjaro" tabindex="-1"><a class="header-anchor" href="#配置manjaro" aria-hidden="true">#</a> 配置manjaro</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>记得进入设置&gt;工作空间行为&gt;锁屏&gt;关闭自动锁屏，不然会卡死在登陆</p></div><blockquote><h2 id="分区工具的使用-partitionmanager" tabindex="-1"><a class="header-anchor" href="#分区工具的使用-partitionmanager" aria-hidden="true">#</a> 分区工具的使用 partitionmanager</h2></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yay <span class="token parameter variable">-S</span> partitionmanager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><h2 id="pacman-的日常使用" tabindex="-1"><a class="header-anchor" href="#pacman-的日常使用" aria-hidden="true">#</a> pacman 的日常使用</h2></blockquote><p>安装todesk远程控制</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yay <span class="token operator">-</span>Ss todesk
找到todesk  
yay <span class="token operator">-</span><span class="token constant">S</span> todesk<span class="token operator">-</span>bin
# 需要开启u服务
systemctl start todeskd<span class="token punctuation">.</span>service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pacman <span class="token parameter variable">-S</span> xx1 xx2   <span class="token comment"># 安装或升级软件包，或者一列软件包（包含依赖包）</span>
pacman <span class="token parameter variable">-Sy</span>          <span class="token comment"># 更新软件源</span>
pacman <span class="token parameter variable">-Syy</span>         <span class="token comment"># 强制更新软件源</span>
pacman <span class="token parameter variable">-Su</span>          <span class="token comment"># 更新软件包</span>
pacman <span class="token parameter variable">-Syu</span>         <span class="token comment"># 更新软件源并更新软件包（-Syyu）</span>
pacman <span class="token parameter variable">-Sc</span>          <span class="token comment"># 清除软件包缓存</span>
pacman <span class="token parameter variable">-Ss</span>  xxx     <span class="token comment"># 搜索名字含 xxx 的软件</span>
pacman <span class="token parameter variable">-Ss</span> ^xxx     <span class="token comment"># 搜索名字以 xxx 开头的软件</span>
pacman <span class="token parameter variable">-R</span> xxx       <span class="token comment"># 删除单个软件包，保留其安装的依赖关系</span>
pacman <span class="token parameter variable">-Rs</span> xxx      <span class="token comment"># 删除指定软件包，及其没有被其他已安装软件包使用的依赖关系</span>
pacman <span class="token parameter variable">-Rn</span> xxx      <span class="token comment"># 一并删除全局配置文件</span>
pacman <span class="token parameter variable">-Rns</span> xxx     <span class="token comment"># 删除一个软件的推荐命令</span>
pacman <span class="token parameter variable">-Rns</span> <span class="token variable"><span class="token variable">$(</span>pacman <span class="token parameter variable">-Qdtq</span><span class="token variable">)</span></span> <span class="token comment"># 删除没有依赖的包</span>
pacman <span class="token parameter variable">-Q</span>           <span class="token comment"># 查询本地软件包数据库</span>
pacman <span class="token parameter variable">-Qq</span>          <span class="token comment"># 查询本地软件包数据库，但不显示版本信息</span>
pacman <span class="token parameter variable">-Qe</span>          <span class="token comment"># 查询非系统自带软件包数据库</span>
pacman <span class="token parameter variable">-Q</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>   <span class="token comment"># 查看有多少本地软件包</span>
pacman <span class="token parameter variable">-Qs</span> regex    <span class="token comment"># 按正则表达式查询软件包</span>
pacman <span class="token parameter variable">-Qdt</span>         <span class="token comment"># 查看没有依赖的包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更换源" tabindex="-1"><a class="header-anchor" href="#更换源" aria-hidden="true">#</a> 更换源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//1.配置镜像源:
<span class="token function">sudo</span> pacman-mirrors <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> China <span class="token parameter variable">-m</span> rank
//2.设置 archlinuxcn 源,
<span class="token comment">#使用方法：在 /etc/pacman.conf 文件末尾添加以下两行：</span>

<span class="token punctuation">[</span>archlinuxcn<span class="token punctuation">]</span>
Server <span class="token operator">=</span> https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/<span class="token variable">$arch</span>

<span class="token comment"># 之后安装 archlinuxcn-keyring 包导入 GPG key。</span>
//3.更新源列表
<span class="token function">sudo</span> pacman-mirrors <span class="token parameter variable">-g</span>
//4.更新pacman数据库并全面更新系统
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Syyu</span>
//5.更新签名
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> archlinuxcn-keyring
//6.安装yay,e更换aur的源
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> yay <span class="token function">git</span> net-tools tree <span class="token function">vim</span>
//7.执行以下命令修改 aururl <span class="token builtin class-name">:</span>
yay <span class="token parameter variable">--aururl</span> <span class="token string">&quot;https://aur.tuna.tsinghua.edu.cn&quot;</span> <span class="token parameter variable">--save</span>
//8.修改的配置文件位于 <span class="token variable"><span class="token variable">\`</span>~/.config/yay/config.json<span class="token variable">\`</span></span> ，还可通过以下命令查看修改过的配置：
yay <span class="token parameter variable">-P</span> <span class="token parameter variable">-g</span>
以后就可以直接执行yay <span class="token parameter variable">-S</span> 你要安装的软件名字，比如
yay <span class="token parameter variable">-S</span> netease-cloud-music
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新文件夹语言" tabindex="-1"><a class="header-anchor" href="#更新文件夹语言" aria-hidden="true">#</a> 更新文件夹语言</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export LANG=en_US
xdg-user-dirs-gtk-update  //弹出对话框，问是否改成英文，点是，并且选“不再提示”
export LANG=zh_CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装常用的软件" tabindex="-1"><a class="header-anchor" href="#安装常用的软件" aria-hidden="true">#</a> 安装常用的软件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-S</span> net-tools base-devel
浏览器我推荐brave浏览器
yay <span class="token parameter variable">-S</span> brave
chrome浏览器： yay <span class="token parameter variable">-S</span> google-chrome 
Microsoft-edge浏览器：yay <span class="token parameter variable">-S</span> microsoft-edge-dev-bin
Git软件： yay <span class="token parameter variable">-S</span> <span class="token function">git</span> 
Uget配合aria2： yay <span class="token parameter variable">-S</span> aria2 
下载工具： yay <span class="token parameter variable">-S</span> uget 
解压工具： yay <span class="token parameter variable">-S</span> p7zip file-roller <span class="token function">unrar</span> 
图像编辑器： yay <span class="token parameter variable">-S</span> gimp （开源版PS）
WPS办公： yay <span class="token parameter variable">-S</span> wps-office 
WPS缺少的字体： yay <span class="token parameter variable">-S</span> ttf-wps-fonts 
WPS安装中文： <span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> wps-office-mui-zh-cn 
Vscode开发工具： yay <span class="token parameter variable">-S</span> visual-studio-code-bin 
Markdown编辑器： yay <span class="token parameter variable">-S</span> typora 
强大的Web内容（视频，音频，图片）下载工具：  yay <span class="token parameter variable">-S</span> you-get 
火焰截图： yay <span class="token parameter variable">-S</span> flameshot  <span class="token punctuation">(</span>超好用,系统设置里面添加快捷键即可<span class="token punctuation">)</span>
云笔记软件： yay <span class="token parameter variable">-S</span> joplin <span class="token punctuation">(</span>开源免费，云服务需要飞天服务<span class="token punctuation">)</span>
chm文件阅读器： yay <span class="token parameter variable">-S</span> kchmviewer 
有道词典： yay <span class="token parameter variable">-S</span> youdao-dict 
开源电子书阅读器： yay <span class="token parameter variable">-S</span> calibre 
MD文件编辑器： yay <span class="token parameter variable">-S</span> typora 
Gif录制软件： yay <span class="token parameter variable">-S</span> peek 
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> filezilla
<span class="token comment"># 关闭电子钱包</span>
用了kde以后，每次打开浏览器都会跳出电子钱包什么的，十分烦人，也可能是我自己不习惯
于是就想办法把他关掉！
搜索Kwallet， 不是KwalletManager
然后把启用的勾勾去掉就好啦
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> <span class="token function">docker</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> <span class="token function">docker-compose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装java" tabindex="-1"><a class="header-anchor" href="#安装java" aria-hidden="true">#</a> 安装java</h2>`,17),d={href:"https://wiki.archlinux.org/index.php/Java#Installation",target:"_blank",rel:"noopener noreferrer"},m=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> java-runtime-common java-environment-common
yay jdk8  <span class="token comment"># Select extra/jdk8-openjdk</span>
使用 archlinux-java 命令来管理 Java 环境。
列举 Java 环境：
archlinux-java status
选择 Java 环境：
<span class="token function">sudo</span> archlinux-java <span class="token builtin class-name">set</span> java-8-openjdk

打开.bashrc
<span class="token comment"># 在后面加上， 地址根据你jdk修改</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/home/hxy/java/jdk-13
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\${JAVA_HOME}</span>/lib:<span class="token variable">\${JRE_HOME}</span>/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token comment"># 启用配置，不过我这边不知道怎么退出（我是强制关掉）</span>
<span class="token builtin class-name">source</span>  .bashrc

<span class="token comment"># 查看是否配置成功</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装node-nvm-yarn" tabindex="-1"><a class="header-anchor" href="#安装node-nvm-yarn" aria-hidden="true">#</a> 安装node,nvm，yarn</h2><p>注意区别</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">/</span>etc<span class="token operator">/</span>profile<span class="token operator">:</span> 此文件为系统的每个用户设置环境信息<span class="token punctuation">,</span>当用户第一次登录时<span class="token punctuation">,</span>该文件被执行<span class="token punctuation">.</span>并从<span class="token operator">/</span>etc<span class="token operator">/</span>profile<span class="token punctuation">.</span>d目录的配置文件中搜集shell的设置<span class="token punctuation">.</span>
<span class="token operator">/</span>etc<span class="token operator">/</span>bashrc<span class="token operator">:</span>  为每一个运行bash shell的用户执行此文件<span class="token punctuation">.</span>当bash shell被打开时<span class="token punctuation">,</span>该文件被读取<span class="token punctuation">.</span>
<span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bash_profile<span class="token operator">:</span> 每个用户都可使用该文件输入专用于自己使用的shell信息<span class="token punctuation">,</span>当用户登录时<span class="token punctuation">,</span>该文件仅仅执行一次<span class="token operator">!</span>默认情况下<span class="token punctuation">,</span>他设置一些环境变量<span class="token punctuation">,</span>执行用户的<span class="token punctuation">.</span>bashrc文件<span class="token punctuation">.</span>
<span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc<span class="token operator">:</span> 该文件包含专用于你的bash shell的bash信息<span class="token punctuation">,</span>当登录时以及每次打开新的shell时<span class="token punctuation">,</span>该该文件被读取<span class="token punctuation">.</span>
<span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bash_logout<span class="token operator">:</span> 当每次退出系统<span class="token punctuation">(</span>退出bash shell<span class="token punctuation">)</span>时<span class="token punctuation">,</span>执行该文件<span class="token punctuation">.</span>
  
另外<span class="token punctuation">,</span><span class="token operator">/</span>etc<span class="token operator">/</span>profile中设定的变量<span class="token punctuation">(</span>全局<span class="token punctuation">)</span>的可以作用于任何用户<span class="token punctuation">,</span>而<span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc等中设定的变量<span class="token punctuation">(</span>局部<span class="token punctuation">)</span>只能继承<span class="token operator">/</span>etc<span class="token operator">/</span>profile中的变量<span class="token punctuation">,</span>他们是<span class="token string">&quot;父子&quot;</span>关系<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>先配置下载github太慢
 kate /etc/hosts
在最后添加 
<span class="token number">199.232</span>.68.133  raw.githubusercontent.com
<span class="token comment"># 1.下载nvm脚本文件</span>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token comment"># 2. 或者：</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node
<span class="token comment"># 注：如果只是在终端输入了上面的代码只能在本次窗口没有关闭的时候生效，下次打开还是会还原成默认的源</span>
<span class="token comment"># 如果需要长久的使用淘宝源则需要如下操作</span>
<span class="token comment"># 确认你的sh是什么，一般bash或者zsh</span>
<span class="token comment"># 如果是 bash 则键入 </span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile

<span class="token comment"># 如果是 zsh 则输入 </span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc

<span class="token comment"># 最后再分别执行命令</span>

<span class="token comment"># bash 为 ：source ~/.bash_profile</span>

<span class="token comment"># zsh 为 ：source ~/.zshrc</span>
等同于
在.bashrc中添加下面的内容
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>http://npmmirror.com/mirrors/node
<span class="token number">3</span>.下载node,配置国内镜像
nvm <span class="token function">install</span> <span class="token function">node</span>
设置npm国内镜像
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
安装镜像服务
<span class="token comment"># npm i -g mirror-config-china #不需要了</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
设置yarn镜像（可以做成一个a.sh脚本执行）
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> disturl https://npmmirror.com/dist <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> electron_mirror https://npmmirror.com/mirrors/electron/ <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> sass_binary_site https://npmmirror.com/mirrors/node-sass/ <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> phantomjs_cdnurl https://npmmirror.com/mirrors/phantomjs/ <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> chromedriver_cdnurl https://npmmirror.com/dist/chromedriver <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> operadriver_cdnurl https://npmmirror.com/dist/operadriver <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> fse_binary_host_mirror https://npmmirror.com/mirrors/fsevents <span class="token parameter variable">-g</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装miniconda" tabindex="-1"><a class="header-anchor" href="#安装miniconda" aria-hidden="true">#</a> 安装miniconda</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>从清华镜像下载miniconda执行的sh
 https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/ 

 配置conda国内镜像
 i在.condarc中加入下面的：
 channels:
  - defaults
show_channel_urls: <span class="token boolean">true</span>
channel_alias: https://mirrors.tuna.tsinghua.edu.cn/anaconda
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装Anaconda后终端出现的(base)字样去除方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda config <span class="token parameter variable">--set</span> auto_activate_base False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装输入法" tabindex="-1"><a class="header-anchor" href="#安装输入法" aria-hidden="true">#</a> 安装输入法</h2><p>设置小键盘开机自动启动方法 打开设置 找到输入设备-&gt;键盘 -&gt; plasma启动时numlock状态-&gt;开启即可 关闭触控板也是输入设备-&gt;触摸板</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>下载fcitx5并安装
<span class="token function">sudo</span> yay <span class="token parameter variable">-S</span> fcitx5 fcitx5-chinese-addons  fcitx5-rime fcitx5-chewing  fcitx5-configtool
<span class="token number">1</span>、在用户文件夹下创建.xprofile配置文件

输入命令
<span class="token function">sudo</span> <span class="token function">vim</span> ~/.xprofile 

然后插入如下内容
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GTK_IM_MODULE</span><span class="token operator">=</span>fcitx5
<span class="token builtin class-name">export</span> <span class="token assign-left variable">QT_IM_MODULE</span><span class="token operator">=</span>fcitx5
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">XMODIFIERS</span></span><span class="token operator">=</span>@im<span class="token operator">=</span>fcitx
<span class="token number">2</span>、设置fcitx5为开机启动
①: 直接在~/.xprofile中插入下面这行
fcitx5 <span class="token operator">&amp;</span>
②: 如果是KDE用户，可在系统设置-启动和关闭-自启动中填加fcitx5为开机自启动项
编辑~<span class="token variable"><span class="token variable">\`</span>/.pam_environment<span class="token variable">\`</span></span>
INPUT_METHOD  <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span>fcitx5
GTK_IM_MODULE <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span>fcitx5
QT_IM_MODULE  <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span>fcitx5
<span class="token environment constant">XMODIFIERS</span>    <span class="token assign-left variable">DEFAULT</span><span class="token operator">=</span><span class="token punctuation">\\</span>@im<span class="token operator">=</span>fcitx5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装golang" tabindex="-1"><a class="header-anchor" href="#安装golang" aria-hidden="true">#</a> 安装golang</h2><h3 id="_1-使用pacman-yay" tabindex="-1"><a class="header-anchor" href="#_1-使用pacman-yay" aria-hidden="true">#</a> 1.使用pacman/yay</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> go go-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>可选用 <code>gcc-go</code> ，但若需要使用 JetBrains 的 IDE 则必须使用 <code>go</code> ，否则 IDE 无法在 <code>/usr/lib/go</code> 下找到 Go SDK。</p></blockquote><h3 id="_2-从官网下载" tabindex="-1"><a class="header-anchor" href="#_2-从官网下载" aria-hidden="true">#</a> 2.从官网下载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>在golang官网下载go的安装包，go1.16.linux-amd64.tar.gz 然后
<span class="token comment"># 1.解压到local目录</span>
<span class="token function">wget</span>  https://go.dev/dl/go1.17.7.linux-amd64.tar.gz
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-C</span> /opt <span class="token parameter variable">-xzf</span> go1.17.7.linux-amd64.tar.gz
<span class="token comment"># 2.编辑环境变量，在/etc/profile和.bashrc添加</span>
<span class="token comment">#vim ~/.zshrc  # OR ~/.bashrc OR ~/.profile</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> ~/.bashrc ~/bashrcbak
<span class="token comment"># 添加a环境变量</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOMODPATH</span><span class="token operator">=</span>/opt/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$GOMODPATH</span>/bin:<span class="token variable">$GOMODPATH</span>/golangmod/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token comment"># 修改/opt的权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /opt/go



<span class="token builtin class-name">echo</span> <span class="token string">&#39;export GOMODPATH=/opt/go
export PATH=&quot;$GOMODPATH/bin:$GOMODPATH/golangmod/bin:$PATH&quot;&#39;</span> <span class="token operator">&gt;&gt;</span>~/.bashrc
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token comment"># 3.输入go version检查是否有安装成功</span>
<span class="token comment"># 4.配置go代理</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/opt/go/golangmod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装teamviewer" tabindex="-1"><a class="header-anchor" href="#安装teamviewer" aria-hidden="true">#</a> 安装teamviewer</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-S</span> teamviewer
提示：TeamViewer Daemon is not running，解决方法：
<span class="token function">sudo</span> teamviewer <span class="token parameter variable">--daemon</span> <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装myql-已经被替换为mariadb-请使用下面的方法" tabindex="-1"><a class="header-anchor" href="#安装myql-已经被替换为mariadb-请使用下面的方法" aria-hidden="true">#</a> 安装myql：（已经被替换为mariadb,请使用下面的方法）</h2><p>如果要使用mysql8,需要设置aur！！！！！！！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//下载Mysql
pacman <span class="token parameter variable">-S</span> mysql
//初始化Mysql，记住生成的密码，方便修改
<span class="token function">sudo</span> mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/usr <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/var/lib/mysql
//设置开机启动
systemctl <span class="token builtin class-name">enable</span> mysqld.service
//启动Mysql
<span class="token function">sudo</span> systemctl start mysqld.service
//修改密码
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;新密码&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果忘记密码，直接百度mysql8忘记密码怎么办</p><h3 id="manjaro-。忘记密码解决办法" tabindex="-1"><a class="header-anchor" href="#manjaro-。忘记密码解决办法" aria-hidden="true">#</a> manjaro 。忘记密码解决办法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.先编辑mysql配置文件</span>
kate /etc/mysql/my.cnf
<span class="token comment"># 2.添加一个     skip-grant-tables</span>
<span class="token comment"># 3.  重启mysql服务</span>
<span class="token function">sudo</span> systemctl restart mysqld
<span class="token comment"># 4.进入mysql 直接在命令行进入lmysql</span>
<span class="token comment"># 5 设置 root密码为空</span>
mysql<span class="token operator">&gt;</span>use mysql<span class="token punctuation">;</span>  
mysql<span class="token operator">&gt;</span>update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">authentication_string</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>   <span class="token comment">#将密码置空 </span>
mysql<span class="token operator">&gt;</span>exit
<span class="token comment">#6 去掉mysql配置文件里的     skip-grant-tables 重新登陆mysql使用</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>  <span class="token comment">#两次确定就可进去</span>
<span class="token comment">#7. ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;123456&#39;;# 然后退出mysql登陆就可以了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如果出现" tabindex="-1"><a class="header-anchor" href="#如果出现" aria-hidden="true">#</a> 如果出现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行进入mysql输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以连上了</p><h2 id="安装mariadb" tabindex="-1"><a class="header-anchor" href="#安装mariadb" aria-hidden="true">#</a> 安装mariadb</h2><h2 id="_1-安装-与ubuntu不同-arch默认已经不再支持mysql-但是可以安装mariadb-其比mysql的性能更好且操作基本相同。-输入下面命令安装" tabindex="-1"><a class="header-anchor" href="#_1-安装-与ubuntu不同-arch默认已经不再支持mysql-但是可以安装mariadb-其比mysql的性能更好且操作基本相同。-输入下面命令安装" aria-hidden="true">#</a> 1. 安装 与Ubuntu不同，arch默认已经不再支持MySQL，但是可以安装MariaDB，其比MySQL的性能更好且操作基本相同。 输入下面命令安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop mysqld    //停止mysql服务
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> mariadb libmariadbclient mariadb-clients    //安装mariadb
<span class="token function">sudo</span> mysql_install_db <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/usr <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/var/lib/mysql
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-启动" tabindex="-1"><a class="header-anchor" href="#_2-启动" aria-hidden="true">#</a> 2. 启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mariadb
mysql_secure_installation    //设置密码等管理操作
systemctl restart mariadb
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装postgressql" tabindex="-1"><a class="header-anchor" href="#安装postgressql" aria-hidden="true">#</a> 安装postgressql</h2><p>安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span>  postgresql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化(必须)：</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>sudo su <span class="token operator">-</span> postgres <span class="token operator">-</span>c <span class="token string-literal"><span class="token string">&quot;initdb --locale zh_CN.UTF-8 -E UTF8 -D &#39;/var/lib/postgres/data&#39;&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，我将原本的en_US改为了zh_CN，未见异常。想要撤销的话，只需要把<code>&#39;/var/lib/postgres/data&#39;</code>下面的内容清空。 启动/开机启动 PostgreSQL：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>systemctl start postgresql.service
systemctl enable postgresql.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到postgres用户，然后登录（初始无密码）：</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>sudo -i -u postgres
psql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要退出psql或返回原用户，都是用<code>exit</code>命令。 PostgreSQL的用户跟系统用户有些关联，前者必须也是后者。在初始化过程中会在系统中创建postgres用户，同时也是数据库的超级权限用户，postgres用户可以创建其他数据库用户。</p><blockquote><p>提示： 如果创建一个与你的系统用户同名的数据库用户，并允许其访问 PostgreSQL 数据库，那么在登录PostgreSQL 数据库 shell 的时候无需切换用户（这样做会比较方便）。</p></blockquote><h3 id="通用基本操作-1" tabindex="-1"><a class="header-anchor" href="#通用基本操作-1" aria-hidden="true">#</a> 通用基本操作<a href="#fn1">[1]</a></h3><h4 id="数据库shell外" tabindex="-1"><a class="header-anchor" href="#数据库shell外" aria-hidden="true">#</a> 数据库shell外</h4><p>添加数据库（须在原用户操作）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>createdb myDatabaseName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接数据库shell（须用postgres用户，所以先切一下用户）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-u</span> postgres
psql <span class="token parameter variable">-d</span> myDatabaseName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以一步进入postgres用户的myDatabaseName数据库，与上面效果一样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-d</span> myDatabaseName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若要创建用户，要在数据库程序外，用postgres用户执行：</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>createuser --interactive myUserName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="数据库shell内" tabindex="-1"><a class="header-anchor" href="#数据库shell内" aria-hidden="true">#</a> 数据库shell内</h4><p>注意：数据库内的SQL语句，建议大写，必须分号结尾。 进入数据库后可修改密码：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>alter user postgres <span class="token keyword">with</span> password <span class="token string-literal"><span class="token string">&#39; *** 密码 *** &#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有其他用户，可以把postgres换成其他用户的名。 一些常用的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">\\</span>c myDatabaseName     <span class="token comment"># 连接到数据库myDatabaseName</span>
<span class="token punctuation">\\</span>du    <span class="token comment"># 列出所有用户以及他们的权限</span>
<span class="token punctuation">\\</span>dt    <span class="token comment"># 展示当前数据库中所有的表相关的汇总信息</span>
<span class="token punctuation">\\</span>q    <span class="token comment"># 退出psql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开启ssh服务" tabindex="-1"><a class="header-anchor" href="#开启ssh服务" aria-hidden="true">#</a> 开启ssh服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> sshd.service 开机启动
systemctl start sshd.service 立即启动
systemctl restart sshd.service 立即重启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-S</span> nginx-mainline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis" aria-hidden="true">#</a> 安装redis</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-S</span> redis

<span class="token number">1</span> 启动服务端
<span class="token function">sudo</span> redis-server
启动redis
<span class="token number">2</span> 启动客户端
<span class="token function">sudo</span> redis-cli
systemctl redis start
<span class="token comment"># 关闭redis</span>
systemctl redis stop
<span class="token comment"># 开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置redis密码：在<code>/etc/redis.conf</code>中找到requirepass,去掉h注释并更换为自己的密码； 出现</p><h3 id="system-limit-for-number-of-file-watchers-reached" tabindex="-1"><a class="header-anchor" href="#system-limit-for-number-of-file-watchers-reached" aria-hidden="true">#</a> System limit for number of file watchers reached</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> fs.inotify.max_user_watches <span class="token operator">=</span> <span class="token number">524288</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/sysctl.conf 
<span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装php和composer" tabindex="-1"><a class="header-anchor" href="#安装php和composer" aria-hidden="true">#</a> 安装php和composer</h2><p>安装php：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-S</span> php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一步，下载composer。（切换到项目的根目录，再执行）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php <span class="token parameter variable">-r</span> <span class="token string">&quot;readfile(&#39;https://getcomposer.org/installer&#39;);&quot;</span> <span class="token operator">|</span> php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载之后后自动安装，执行 php composer.phar。查看composer是否安装成功。 第二步，将composer.phar文件移动到bin目录以便全局使用composer命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-r</span> composer.phar /usr/local/bin/composer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（如果只是针对某个项目使用composer,可忽略此步） 第三步，切换国内源（如果第一步下载成功，可忽略此步）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> config <span class="token parameter variable">-g</span> repo.packagist <span class="token function">composer</span> https://packagist.phpcomposer.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第四步，安装phpcgi</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-S</span> php-apache php-cgi php-fpm php-gd  php-embed php-intl php-imap  php-redis php-snmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第五步，安装pecl</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://pear.php.net/go-pear.phar
php go-pear.phar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第六步，安装xdebug</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pecl <span class="token function">install</span> xdebug

//为php.ini 添加 <span class="token assign-left variable">extension</span><span class="token operator">=</span>xdebug.so
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/php/php.ini
<span class="token function">sudo</span> systemctl reload php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,88);function v(u,b){const e=l("ExternalLinkIcon");return r(),t("div",null,[o,s("p",null,[a("（"),s("a",d,[a("https://wiki.archlinux.org/index.php/Java#Installation"),c(e)]),a("）")]),m])}const k=i(p,[["render",v],["__file","manjaro-configs.html.vue"]]);export{k as default};
