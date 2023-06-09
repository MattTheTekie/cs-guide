import{_ as i,r as o,o as r,c as l,d as s,e as n,b as e,a as t}from"./app-3d979d38.js";const c={},h=t(`<h1 id="安装zsh和插件" tabindex="-1"><a class="header-anchor" href="#安装zsh和插件" aria-hidden="true">#</a> 安装zsh和插件</h1><h2 id="zsh-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#zsh-oh-my-zsh" aria-hidden="true">#</a> zsh/oh-my-zsh</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> <span class="token function">zsh</span>
  或者
  <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">zsh</span>
  <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
  <span class="token comment"># 更改默认shell</span>
  chsh <span class="token parameter variable">-s</span> /bin/zsh
  <span class="token comment"># 必备插件安装</span>

  <span class="token comment">#zsh-autosuggestions自动补全</span>
  <span class="token function">git</span> clone https://github.com/zsh-users/zsh-completions ~/.oh-my-zsh/custom/plugins/zsh-completions
  <span class="token comment">#国内使用</span>
  <span class="token function">git</span> clone https://gitclone.com/github.com/zsh-users/zsh-completions.git ~/.oh-my-zsh/custom/plugins/zsh-completions

<span class="token comment">#zsh-syntax-highlighting 命令有语法高亮效果</span>
  <span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
  <span class="token comment">#国内使用</span>
  <span class="token function">git</span> clone https://gitclone.com/github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
<span class="token comment"># 自动提示插件</span>
  <span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
<span class="token comment">#国内使用</span>
  <span class="token function">git</span> clone https://gitclone.com/github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions

  <span class="token function">vim</span> ~/.zshrc
  <span class="token comment"># edit plugins &amp; save</span>
  <span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git zsh-syntax-highlighting <span class="token function">docker</span> <span class="token function">docker-compose</span> zsh-autosuggestions zsh-completions extract<span class="token punctuation">)</span>

  autoload <span class="token parameter variable">-U</span> compinit <span class="token operator">&amp;&amp;</span> compinit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主题推荐" tabindex="-1"><a class="header-anchor" href="#主题推荐" aria-hidden="true">#</a> 主题推荐</h2>`,4),d={href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes",target:"_blank",rel:"noopener noreferrer"},p=t('<p>我的主题: jtriley</p><p><img src="https://user-images.githubusercontent.com/49100982/108254869-8d8a7480-716c-11eb-8857-ee82b1fe4023.jpg" alt="j"></p><p>我的主题: amuse <img src="https://user-images.githubusercontent.com/49100982/108254748-78ade100-716c-11eb-8f61-0a2bec4f671c.jpg" alt="a"></p><p>我的主题: gnzh</p><p><img src="https://user-images.githubusercontent.com/49100982/108254837-882d2a00-716c-11eb-9f49-3b5e6e62eb52.jpg" alt="a"></p><p>我的主题: junkfood</p><p><img src="https://user-images.githubusercontent.com/49100982/108254874-8e230b00-716c-11eb-90ea-e4f66c9a3dd6.jpg" alt="a"></p><p>我的主题: agnoster</p><p><img src="https://user-images.githubusercontent.com/49100982/108254745-777cb400-716c-11eb-800a-a8cfa612253f.jpg" alt="a"></p>',9),u={href:"https://github.com/romkatv/powerlevel10k",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="插件推荐" tabindex="-1"><a class="header-anchor" href="#插件推荐" aria-hidden="true">#</a> 插件推荐</h2><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gaa = git add --all
gcmsg = git commit -m
ga = git add
gst = git status
gp = git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="last-working-dir" tabindex="-1"><a class="header-anchor" href="#last-working-dir" aria-hidden="true">#</a> last-working-dir</h3><p>此插件的作用是下一次打开终端时定位到之前的目录下，是一个很好用的插件</p><h3 id="extract" tabindex="-1"><a class="header-anchor" href="#extract" aria-hidden="true">#</a> extract</h3><p>提供一个 extract 命令，以及它的别名 x。功能是：一！键！解！压！你知道tar的四种写法吗？我也不知道，所以我装了这个。从今以后 tar, gz, zip, rar 全部使用 extract 命令解压，再也不用天天查 cheatsheet 啦！</p><h3 id="rand-quote" tabindex="-1"><a class="header-anchor" href="#rand-quote" aria-hidden="true">#</a> rand-quote</h3><p>提供一条 quote 命令，显示随机名言。和fortune的作用差不多，但是我感觉fortune上面大多是冷笑话，还是quote的内容比较有意思。</p><p>当然这种东西很少有人会主动去按的。所以你可以在你的zshrc里面的最后一行加上quote，实现每次打开shell显示一条名言的效果～</p><p>再进一步，安装一个cowsay，把quote | cowsay放到zshrc的最后一行。于是每次打开终端你就可以看到一头牛对你说(自己加)</p><h3 id="themes" tabindex="-1"><a class="header-anchor" href="#themes" aria-hidden="true">#</a> themes</h3><p>提供一条 theme 命令，用来随时手动切换主题。在想要尝试各种主题的时候很实用，不需要一直改 zshrc 然后重载</p><h3 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> gitignore</h3><p>提供一条 gi 命令，用来查询 gitignore 模板。比如你新建了一个 python 项目，就可以用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gi python <span class="token operator">&gt;</span> .gitignore 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来生成一份 gitignore 文件。</p><h3 id="zsh-reload" tabindex="-1"><a class="header-anchor" href="#zsh-reload" aria-hidden="true">#</a> zsh_reload</h3><p>提供一个 src 命令，重载 zsh。对于经常折腾 zshrc 的我，这条命令非常实用</p><h3 id="git-open" tabindex="-1"><a class="header-anchor" href="#git-open" aria-hidden="true">#</a> git-open</h3><p>提供一个 git-open 命令，在浏览器中打开当前所在 git 项目的远程仓库地址。</p><h3 id="z" tabindex="-1"><a class="header-anchor" href="#z" aria-hidden="true">#</a> z</h3><p>提供一个 z 命令，在常用目录之间跳转。类似 autojump，但是不需要额外安装软件</p><p>接着是 oh-my-zsh 自带的，其他一些功能强大的实用工具。</p><h2 id="_1-vi-mode" tabindex="-1"><a class="header-anchor" href="#_1-vi-mode" aria-hidden="true">#</a> 1. vi-mode</h2><p>vim输入模式，非常强大，不用多说。</p><h2 id="_2-per-directory-history" tabindex="-1"><a class="header-anchor" href="#_2-per-directory-history" aria-hidden="true">#</a> 2. per-directory-history</h2><p>开启之后在一个目录下只能查询到这个目录下的历史命令。按 Ctrl+g 开启/关闭。对我来说很实用，但是不一定所有人都喜欢，可以考虑一下自己是否真的需要。</p><h2 id="_3-command-not-found" tabindex="-1"><a class="header-anchor" href="#_3-command-not-found" aria-hidden="true">#</a> 3. command-not-found</h2><p>当你输入一条不存在的命令时，会自动查询这条命令可以如何获得。</p><h2 id="_4-safe-paste" tabindex="-1"><a class="header-anchor" href="#_4-safe-paste" aria-hidden="true">#</a> 4. safe-paste</h2><p>像我这样的懒人，经常会从网上复制各种脚本。但是复制的命令有可能并不就是我要的，可能还需要改一改。但是往往我复制了几行脚本，粘贴到 zsh 里，就发现它直接运行了。这真是非常危险。</p><p>这个插件的功能就是：当你往 zsh 粘贴脚本时，它不会被立刻运行。给了我这种懒人修改别人脚本的机会。</p><h2 id="_5-colored-man-pages" tabindex="-1"><a class="header-anchor" href="#_5-colored-man-pages" aria-hidden="true">#</a> 5. colored-man-pages</h2><p>给你带颜色的 man 命令。</p><h2 id="_6-sudo" tabindex="-1"><a class="header-anchor" href="#_6-sudo" aria-hidden="true">#</a> 6. sudo</h2><p>apt 忘了加 sudo？开启这个插件，双击 Esc，zsh 会把上一条命令加上 sudo 给你。</p><h2 id="_7-history-substring-search" tabindex="-1"><a class="header-anchor" href="#_7-history-substring-search" aria-hidden="true">#</a> 7. history-substring-search</h2><p>一般人会在 zsh 中绑定 history-search-backward 与 histor-search-forward 两个功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bindkey &#39;^P&#39; history-search-backward
bindkey &#39;^N&#39; history-search-forward
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子，就可以在输入一个命令，比如 git 之后，按 Ctrl-P 与 Ctrl-N 在以 git为前缀的历史记录中浏览，非常方便。</p><p>但是这个做法有一个问题，就是这个功能只考虑输入的第一个单词。也就是说，如果之前输入了 git status, git commit, git push 等等命令，那么我输入 &quot;git s&quot; 再 Ctrl-P，并不会锁定到 &quot;git status&quot;, 而是会在所有以 git 开头的历史命令中循环。</p><p>这个插件的功能就是实现了一对更好用的 history-search-backward 与 histor-search-forward ，解决了上面所说的问题。开启之后，需要绑定按键：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bindkey &#39;^P&#39; history-substring-search-up
bindkey &#39;^N&#39; history-substring-search-down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子就可以以自己输入的所有内容为前缀，进行历史查找了。</p><p>然后下面是需要单独安装的：</p>`,46),m={id:"_1-zplug",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#_1-zplug","aria-hidden":"true"},"#",-1),b={href:"https://github.com/zplug/zplug",target:"_blank",rel:"noopener noreferrer"},z=t(`<p>zsh 的插件管理器，类似 vim 的 vundle，把你需要的所有插件写到 zshrc 里，然后运行 zplug install 就可以安装这些插件。就像这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> ~/.zplug/init.zsh <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">source</span> ~/.zplug/init.zsh

  zplug <span class="token string">&quot;zsh-users/zsh-syntax-highlighting&quot;</span>
  zplug <span class="token string">&quot;zsh-users/zsh-autosuggestions&quot;</span>
  zplug <span class="token string">&quot;supercrabtree/k&quot;</span>
  zplug <span class="token string">&quot;denisidoro/navi&quot;</span>
  zplug <span class="token string">&quot;MichaelAquilina/zsh-you-should-use&quot;</span>
  zplug <span class="token string">&quot;changyuheng/zsh-interactive-cd&quot;</span>
  zplug <span class="token string">&quot;SleepyBag/zsh-confer&quot;</span>

  zplug <span class="token string">&quot;Powerlevel9k/powerlevel9k&quot;</span>, from:github, as:theme, if:<span class="token string">&quot;[[ <span class="token variable">$ZSH_THEME_STYLE</span> == 9k ]]&quot;</span>
  zplug <span class="token string">&quot;denysdovhan/spaceship-prompt&quot;</span>, use:spaceship.zsh-theme, from:github, as:theme, if:<span class="token string">&quot;[[ <span class="token variable">$ZSH_THEME_STYLE</span> == spaceship ]]&quot;</span>
  zplug <span class="token string">&quot;caiogondim/bullet-train.zsh&quot;</span>, use:bullet-train.zsh-theme, from:github, as:theme, if:<span class="token string">&quot;[[ <span class="token variable">$ZSH_THEME_STYLE</span> == bullet ]]&quot;</span>
  zplug <span class="token string">&quot;skylerlee/zeta-zsh-theme&quot;</span>, from:github, as:theme, if:<span class="token string">&quot;[[ <span class="token variable">$ZSH_THEME_STYLE</span> == zeta ]]&quot;</span>

  <span class="token keyword">if</span> <span class="token operator">!</span> zplug check --verbose<span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&#39;Run &quot;zplug install&quot; to install&#39;</span>
  <span class="token keyword">fi</span>
  <span class="token comment"># Then, source plugins and add commands to $PATH</span>
  zplug load
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个工具不仅可以用来装 zsh 插件，事实上它可以用来自动安装任何你认为有必要的插件、主题、脚本甚至二进制程序。但是对于非 zsh 插件的程序，在安装之前要先看看 zplug 的文档，搞清楚如何安装。</p>`,3),k={id:"_2-zsh-syntax-highlighting",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#_2-zsh-syntax-highlighting","aria-hidden":"true"},"#",-1),_={href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"},x=s("p",null,"shell 命令的代码高亮。你没有理由拒绝高亮。",-1),y={id:"_3-zsh-autosuggestions",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#_3-zsh-autosuggestions","aria-hidden":"true"},"#",-1),w={href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"},E=s("p",null,"在输入命令的过程中根据你的历史记录显示你可能想要输入的命令，按 tab 补全。",-1),T=s("p",null,"不过 tab 键似乎与 zsh 的补全有冲突，所以我改成了 ctrl-y 直接运行命令，关于如何修改快捷键，项目主页上也有写",-1);function S(j,H){const a=o("ExternalLinkIcon");return r(),l("div",null,[h,s("p",null,[s("a",d,[n("https://github.com/ohmyzsh/ohmyzsh/wiki/Themes"),e(a)])]),p,s("p",null,[n("一个需要自行安装的主题 "),s("a",u,[n("https://github.com/romkatv/powerlevel10k"),e(a)])]),g,s("h2",m,[v,n(" 1. "),s("a",b,[n("zplug"),e(a)])]),z,s("h2",k,[f,n(" 2. "),s("a",_,[n("zsh-syntax-highlighting"),e(a)])]),x,s("h2",y,[q,n(" 3. "),s("a",w,[n("zsh-autosuggestions"),e(a)])]),E,T])}const N=i(c,[["render",S],["__file","install-zsh.html.vue"]]);export{N as default};
