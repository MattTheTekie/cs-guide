import{_ as t,r as c,o as l,c as d,d as a,e as n,b as e,a as i}from"./app-3d979d38.js";const o={},p=a("h1",{id:"conda使用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#conda使用","aria-hidden":"true"},"#"),n(" conda使用")],-1),r=a("h2",{id:"安装miniconda",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装miniconda","aria-hidden":"true"},"#"),n(" 安装miniconda")],-1),u={href:"https://www.anaconda.com/products/individual#windows",target:"_blank",rel:"noopener noreferrer"},m=a("br",null,null,-1),v={href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Windows-x86_64.exe",target:"_blank",rel:"noopener noreferrer"},h=a("br",null,null,-1),b=a("code",null,"d:\\Miniconda3",-1),k={href:"https://conda.io/projects/conda/en/latest/user-guide/getting-started.html#before-you-start",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="新建虚拟环境" tabindex="-1"><a class="header-anchor" href="#新建虚拟环境" aria-hidden="true">#</a> 新建虚拟环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个名为condapkg的环境，指定Python版本是3.5（不用管是3.10，conda会为我们自动寻找3.10中的最新版本）</span>
conda create <span class="token parameter variable">--name</span> condapkg <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="然后配置python" tabindex="-1"><a class="header-anchor" href="#然后配置python" aria-hidden="true">#</a> 然后配置python</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 在环境变量里面加了这些</span>
D:\\Miniconda3\\Scripts
D:\\Miniconda3\\envs\\condapkg
D:\\Miniconda3\\envs\\condapkg\\Scripts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加-condarc和pip-ini文件" tabindex="-1"><a class="header-anchor" href="#添加-condarc和pip-ini文件" aria-hidden="true">#</a> 添加.condarc和pip.ini文件</h2><p>.condarc</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">channels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  <span class="token punctuation">-</span> defaults
<span class="token key atrule">show_channel_urls</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">default_channels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
<span class="token key atrule">custom_channels</span><span class="token punctuation">:</span>
  <span class="token key atrule">conda-forge</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  <span class="token key atrule">msys2</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  <span class="token key atrule">bioconda</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  <span class="token key atrule">menpo</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  <span class="token key atrule">pytorch</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  <span class="token key atrule">simpleitk</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
<span class="token key atrule">changeps1</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">auto_activate_base</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pip.ini (<code>%userprofile%\\pip\\pip.ini</code>)</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">global</span><span class="token punctuation">]</span>
<span class="token key property">index-url</span> <span class="token punctuation">=</span> https://pypi<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn/simple
<span class="token punctuation">[</span><span class="token table class-name">install</span><span class="token punctuation">]</span>
<span class="token key property">trusted-host</span> <span class="token punctuation">=</span> pypi<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conda的包管理" tabindex="-1"><a class="header-anchor" href="#conda的包管理" aria-hidden="true">#</a> <strong>Conda的包管理</strong></h2><p>安装命令行工具建议用<code>conda install</code>,或者<code>pip3 install</code> 不能用<code>python -m pip install</code></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>conda activate condapkg
conda install httpie
pip3 install httpie
不能用 python <span class="token operator">-</span>m pip install httpie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装库" tabindex="-1"><a class="header-anchor" href="#安装库" aria-hidden="true">#</a> 安装库</h2><p>为当前环境安装库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># numpy
conda install numpy
# conda会从从远程搜索numpy的相关信息和依赖项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看已经安装的库" tabindex="-1"><a class="header-anchor" href="#查看已经安装的库" aria-hidden="true">#</a> 查看已经安装的库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看已经安装的packages
conda list
# 最新版的conda是从site-packages文件夹中搜索已经安装的包，可以显示出通过各种方式安装的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看某个环境的已安装包" tabindex="-1"><a class="header-anchor" href="#查看某个环境的已安装包" aria-hidden="true">#</a> 查看某个环境的已安装包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 更新python</span>
 
conda update python
<span class="token comment"># 查看某个指定环境的已安装包</span>
conda list <span class="token parameter variable">-n</span> py310
conda create <span class="token parameter variable">-n</span> env_name package_name <span class="token comment">#创建名为env_name的新环境，并在该环境下安装名为package_name 的包，可以指定新环境的版本号，例如：conda create -n python2 python=python2.7 numpy pandas，创建了python2环境，python版本为2.7，同时还安装了numpy pandas包</span>
<span class="token comment"># 删除某个环境</span>
conda remove <span class="token parameter variable">--name</span> env_name –all 
<span class="token comment"># 或者</span>
conda <span class="token function">env</span> remove <span class="token parameter variable">-n</span> env_name
<span class="token comment">#在指定环境中安装包</span>
conda <span class="token function">install</span> <span class="token parameter variable">--name</span> env_name package_name 
 
<span class="token comment"># 查找package信息</span>
conda search numpy
 
<span class="token comment"># 安装package</span>
conda <span class="token function">install</span> <span class="token parameter variable">-n</span> py310 numpy
<span class="token comment"># 如果不用-n指定环境名称，则被安装在当前活跃环境</span>
<span class="token comment"># 也可以通过-c指定通过某个channel安装</span>
 
<span class="token comment"># 更新package</span>
conda update <span class="token parameter variable">-n</span> py310 numpy
 
<span class="token comment"># 删除package</span>
conda remove <span class="token parameter variable">-n</span> py310 numpy
 
<span class="token comment"># 更新conda，保持conda最新</span>
conda update conda
 
 
<span class="token comment"># 更新anaconda</span>
conda update anaconda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>兼容pip,所以直接可以用pip安装</p></div><h2 id="conda错误" tabindex="-1"><a class="header-anchor" href="#conda错误" aria-hidden="true">#</a> conda错误</h2>`,21),_={href:"https://repo.anaconda.com/pkgs/main/win-64/curre",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/conda/conda/issues/9746",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="安装conda后终端出现的-base-字样去除方法" tabindex="-1"><a class="header-anchor" href="#安装conda后终端出现的-base-字样去除方法" aria-hidden="true">#</a> 安装conda后终端出现的(base)字样去除方法</h3><p>修改.condarc文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssl_verify: <span class="token boolean">true</span>
channels:
  defaults
changeps1: False <span class="token comment">#加上这个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(w,N){const s=c("ExternalLinkIcon");return l(),d("div",null,[p,r,a("p",null,[n("不要选择使用环境变量,因为一会儿自己配 anaconda下载地址: "),a("a",u,[n("https://www.anaconda.com/products/individual#windows"),e(s)]),n("(请选择清华镜像)"),m,n(" miniconda下载地址: "),a("a",v,[n("https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Windows-x86_64.exe"),e(s)]),n(" (点击下载)"),h,n(" 我把anaconda安装在了 "),b,n(" 目录")]),a("p",null,[n("安装后查看文档 "),a("a",k,[n("conda文档"),e(s)]),n(" ​")]),g,a("p",null,[n("CondaHTTPError: HTTP 000 CONNECTION FAILED for url ＜"),a("a",_,[n("https://repo.anaconda.com/pkgs/main/win-64/curre"),e(s)])]),a("p",null,[a("a",y,[n("https://github.com/conda/conda/issues/9746"),e(s)])]),f])}const E=t(o,[["render",x],["__file","conda-tutor.html.vue"]]);export{E as default};
