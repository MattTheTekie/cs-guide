import{_ as p,r as t,o as l,c as o,d as a,e as n,b as e,a as i}from"./app-3d979d38.js";const r={},d=i(`<h1 id="pip配置" tabindex="-1"><a class="header-anchor" href="#pip配置" aria-hidden="true">#</a> pip配置</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>常用的全局包</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install <span class="token operator">-</span>U you<span class="token operator">-</span>get pipenv rembg pyinstaller auto<span class="token operator">-</span>py<span class="token operator">-</span>to<span class="token operator">-</span>exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>python3已经自带了pip,运行<code>python -m pip -V</code> ,就可以看到了</p><p>配置文件路径</p><ul><li>On Unix and macOS the configuration file is: <code>$HOME/.pip/pip.conf</code></li><li>On Windows the configuration file is: <code>%HOME%\\pip\\pip.ini</code></li></ul><h2 id="配置国内镜像源" tabindex="-1"><a class="header-anchor" href="#配置国内镜像源" aria-hidden="true">#</a> 配置国内镜像源</h2><p>将pip源更换到国内镜像 用pip管理工具安装库文件时，默认使用国外的源文件，因此在国内的下载速度会比较慢，可能只有50KB/s。幸好，国内的一些顶级科研机构已经给我们准备好了各种镜像，下载速度可达2MB/s。 其中，比较常用的国内镜像包括：</p>`,8),c={href:"http://mirrors.aliyun.com/pypi/simple/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://pypi.douban.com/simple/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pypi.tuna.tsinghua.edu.cn/simple/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://pypi.mirrors.ustc.edu.cn/simple/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://pypi.hustunique.com/",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,"注意：新版ubuntu要求使用https源。",-1),g=a("br",null,null,-1),k=a("br",null,null,-1),y={href:"https://pypi.tuna.tsinghua.edu.cn/simple",target:"_blank",rel:"noopener noreferrer"},f={href:"https://pypi.tuna.tsinghua.edu.cn/simple",target:"_blank",rel:"noopener noreferrer"},_=i(`<p>（2）永久修改，一劳永逸：<br> （a）Linux下，修改 ~/.pip/pip.conf (没有就创建一个文件夹及文件。文件夹要加“.”，表示是隐藏文件夹) 内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">global</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">index-url</span> <span class="token punctuation">=</span> <span class="token value attr-value">https://pypi.tuna.tsinghua.edu.cn/simple</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">trusted-host</span> <span class="token punctuation">=</span> <span class="token value attr-value">https://pypi.tuna.tsinghua.edu.cn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(b) windows下，直接在user目录中创建一个pip目录，如：C:\\Users\\xx\\pip，然后新建文件pip.ini，即 %HOMEPATH%\\pip\\pip.ini，在pip.ini文件中输入以下内容（以豆瓣镜像为例）：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">global</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">index-url</span> <span class="token punctuation">=</span> <span class="token value attr-value">http://pypi.douban.com/simple</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">trusted-host</span> <span class="token punctuation">=</span> <span class="token value attr-value">pypi.douban.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用命令行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><p>注意:pip默认安装依赖的位置在 <code>python文件夹\\Lib\\site-packages</code> 比如我的就是在<code>C:\\Users\\yanni\\miniconda3\\envs\\condapkg\\Lib\\site-packages</code> conda在某个环境比如condapkg安装依赖比如pandas的时候,会在两个目录生成pandas包目录 使用conda安装依赖和pip安装依赖在pycharm中依赖的位置是一样的,没区别哦</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>miniconda3/pkgs   <span class="token comment"># 这个目录是全局的</span>
miniconda3/envs/condapkg/Lib/site-packages   <span class="token comment">#这个是condapkg环境的依赖</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> SomePackage            <span class="token comment"># latest version</span>
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token assign-left variable">SomePackage</span><span class="token operator">==</span><span class="token number">1.0</span>.4     <span class="token comment"># specific version</span>
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token string">&#39;SomePackage&gt;=1.0.4&#39;</span>     <span class="token comment"># minimum version</span>
python <span class="token parameter variable">-m</span> pip uninstall SomePackage            <span class="token comment">#删除依赖</span>
python <span class="token parameter variable">-m</span> pip list                <span class="token comment">#列出依赖</span>
python <span class="token parameter variable">-m</span> pip search <span class="token string">&quot;query&quot;</span>


<span class="token comment">#安装和生成requirements中的依赖</span>
python <span class="token parameter variable">-m</span> pip freeze <span class="token operator">&gt;</span> requirements.txt
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu-安装最新版本的-python3-10" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装最新版本的-python3-10" aria-hidden="true">#</a> Ubuntu 安装最新版本的 Python3.10</h2><blockquote><p>必须在 <code>root</code> 下执行。</p></blockquote><p><strong>安装最新版本的 Python3.10</strong></p><ul><li><p>查看当前 python3 的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python3 <span class="token parameter variable">--version</span>
Python <span class="token number">3.8</span>.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>升级包及安装环境前置依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加 deadsnakes PPA 到源列表 安装过程中需要按 <code>Enter</code> 进入下一步</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>add-apt-repository ppa:deadsnakes/ppa
<span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看软件包是否包含 python3.10</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> list <span class="token operator">|</span> <span class="token function">grep</span> python3.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装 python3.10</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> python3.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看当前 Python 版本，发现版本未更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置默认版本为 Python3.10</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>update-alternatives <span class="token parameter variable">--install</span> /usr/bin/python3 python3 /usr/bin/python3.8 <span class="token number">1</span>
update-alternatives <span class="token parameter variable">--install</span> /usr/bin/python3 python3 /usr/bin/python3.10 <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行，选择默认版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>update-alternatives <span class="token parameter variable">--config</span> python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看最新的 Python 版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python <span class="token parameter variable">--version</span>
Python <span class="token number">3.10</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>按需要决定是否移除旧版本的 Python3.8（因是默认的 Python，建议不移除，以防个别破坏内置依赖）</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> remove python3.8
<span class="token function">apt</span> autoremove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>修复 pip 和 disutils 执行 <code>pip --version</code> 会报错：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ModuleNotFoundError: No module named <span class="token string">&#39;distutils.util&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> python3.10-distutils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重装 pip</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -fSL https://bootstrap.pypa.io/get-pip.py |   python3 get-pip.py --user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,18);function x(P,q){const s=t("ExternalLinkIcon");return l(),o("div",null,[d,a("ul",null,[a("li",null,[n("阿里云 "),a("a",c,[n("http://mirrors.aliyun.com/pypi/simple/"),e(s)])]),a("li",null,[n("豆瓣"),a("a",u,[n("http://pypi.douban.com/simple/"),e(s)])]),a("li",null,[n("清华大学 "),a("a",m,[n("https://pypi.tuna.tsinghua.edu.cn/simple/"),e(s)])]),a("li",null,[n("中国科学技术大学 "),a("a",v,[n("http://pypi.mirrors.ustc.edu.cn/simple/"),e(s)])]),a("li",null,[n("华中科技大学"),a("a",h,[n("http://pypi.hustunique.com/"),e(s)])])]),b,a("p",null,[n("设置方法：（以清华镜像为例，其它镜像同理）"),g,n(" （1）临时使用："),k,n(" 可以在使用pip的时候，加上参数-i和镜像地址(如 "),a("a",y,[n("https://pypi.tuna.tsinghua.edu.cn/simple)"),e(s)]),n(")， 例如：pip install -i "),a("a",f,[n("https://pypi.tuna.tsinghua.edu.cn/simple"),e(s)]),n(" pandas，这样就会从清华镜像安装pandas库。")]),_])}const L=p(r,[["render",x],["__file","pip-tutor.html.vue"]]);export{L as default};