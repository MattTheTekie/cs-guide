import{_ as e,o as a,c as d,a as i}from"./app-3d979d38.js";const n={},r=i(`<h1 id="virtualenv使用" tabindex="-1"><a class="header-anchor" href="#virtualenv使用" aria-hidden="true">#</a> Virtualenv使用</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><h2 id="推荐使用pipenv" tabindex="-1"><a class="header-anchor" href="#推荐使用pipenv" aria-hidden="true">#</a> 推荐使用pipenv</h2></div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>在使用 <code>Python</code> 开发的过程中，工程一多，难免会碰到不同的工程依赖不同版本的库的问题；亦或者是在开发过程中不想让物理环境里充斥各种各样的库，引发未来的依赖灾难。</p><p>因此，我们需要对于不同的工程使用不同的虚拟环境来保持开发环境以及宿主环境的清洁。而 <code>virtualenv</code>就是一个可以帮助我们管理不同 <code>Python</code> 环境的绝好工具。<code>virtualenv</code> 可以在系统中建立多个不同并且相互不干扰的虚拟环境。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> pip3 <span class="token function">install</span> virtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就成功了</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h2><p>假如我们想要用<code>scrapy</code>去爬取某个网站的信息，我们不想再宿主环境总安装scrapy以及requests这些包，那我们就可以使用virtualenv了。</p><p>假设我们把这个虚拟环境放在<code>~/workspaces/project_env/spider/</code>目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> virtualenv ~/workspaces/project_env/spider/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样虚拟环境就创建好了，我们可以看到在这个目录下油三个目录被建立</p><ul><li>bin：包含一些在这个虚拟环境中可用的命令，以及开启虚拟环境的脚本 <code>activate</code></li><li>include：包含虚拟环境中的头文件，包括 <code>Python</code> 的头文件</li><li>lib：这里面就是一些依赖库</li></ul><h2 id="激活" tabindex="-1"><a class="header-anchor" href="#激活" aria-hidden="true">#</a> # 激活</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> source ~/workspaces/project_env/spider/bin/activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时我们就已经在虚拟环境中了</p><p>可以安装一下requests这个模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> pip install requests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到很快就成功</p><h2 id="退出虚拟环境" tabindex="-1"><a class="header-anchor" href="#退出虚拟环境" aria-hidden="true">#</a> # 退出虚拟环境</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="virtualenvwrapper" tabindex="-1"><a class="header-anchor" href="#virtualenvwrapper" aria-hidden="true">#</a> virtualenvwrapper</h2><h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2><p>我们刚才了解了<code>virtualenv</code>，我觉得比较麻烦，每次开启虚拟环境之前要去虚拟环境所在目录下的 <code>bin</code> 目录下 <code>source</code>一下 <code>activate</code>，这就需要我们记住每个虚拟环境所在的目录。</p><p>一种可行的解决方案是，将所有的虚拟环境目录全都集中起来，比如放到 <code>~/virtualenvs/</code>，并对不同的虚拟环境使用不同的目录来管理。<code>virtualenvwrapper</code> 正是这样做的。并且，它还省去了每次开启虚拟环境时候的 <code>source</code> 操作，使得虚拟环境更加好用。</p><h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> pip install virtualwrapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们就安装好了可以管理虚拟环境的神器</p><h2 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h2><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> # 配置</h2><p>首先需要对<code>virtualenvwrapper</code>进行配置:</p><ul><li>需要指定一个环境变量，叫做<code>WORKON_HOME</code>，它是用来存放各种虚拟环境目录的目录</li><li>需要export vitualenvwrapper这个模块存放的位置</li><li>需要运行一下它的初始化工具 <code>virtualenvwrapper.sh</code>，可通过<code>which virtualenvwrapper.sh</code>查看位置，我的在<code>/usr/local/bin/</code></li></ul><p>由于每次都需要执行这两步操作，我们可以将其写入终端的配置文件中。</p><p>如果使用 <code>bash</code>，则添加到 <code>~/.bashrc</code> 中</p><p>如果使用 <code>zsh</code>，则添加到 <code>~/.zshrc</code> 中</p><p>这样每次启动终端的时候都会自动运行，终端启动之后 <code>virtualenvwrapper</code> 就可以用啦</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> export WORKON_HOME=&#39;~/Workspaces/Envs&#39;

 export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3

 source /usr/local/bin/virtualenvwrapper.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建虚拟机</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkvirtualenv env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建虚拟环境完成后，会自动切换到创建的虚拟环境中</p><p>当然也可以指定虚拟机的 python 版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkvirtualenv env -p C:\\python27\\python.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>列出虚拟环境列表</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>workon 或者 lsvirtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>启动/切换虚拟环境</strong></p><p>使用 workon [virtual-name] 即可切换到对应的虚拟环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>workon [虚拟环境名称]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除虚拟环境</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rmvirtualenv [虚拟环境名称]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>离开虚拟环境，和 virutalenv 一样的命令</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,53),s=[r];function t(l,c){return a(),d("div",null,s)}const v=e(n,[["render",t],["__file","virtualenv.html.vue"]]);export{v as default};
