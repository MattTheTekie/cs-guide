import{_ as a,r as i,o as l,c as t,d as n,e as s,b as p,a as c}from"./app-3d979d38.js";const r={},d=n("h1",{id:"pipenv使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pipenv使用","aria-hidden":"true"},"#"),s(" pipenv使用")],-1),o=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),u={href:"https://registry.npmmirror.com/binary.html?path=python/",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m=c(`<h2 id="安装pipenv" tabindex="-1"><a class="header-anchor" href="#安装pipenv" aria-hidden="true">#</a> 安装pipenv</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> pipenv 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用pipenv" tabindex="-1"><a class="header-anchor" href="#使用pipenv" aria-hidden="true">#</a> 使用pipenv</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>添加镜像

「清华源」：&quot;https://pypi.tuna.tsinghua.edu.cn/simple/&quot;
「阿里源」：&quot;http://mirrors.aliyun.com/pypi/simple/&quot;
「豆瓣源」：&quot;http://pypi.douban.com/simple&quot;
华为也有镜像源 [华为](https://mirrors.huaweicloud.com/home)


配置镜像
export PIPENV_DEFAULT_PYTHON_VERSION=3.7 
export PIPENV_PYPI_MIRROR=https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">source</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://pypi.tuna.tsinghua.edu.cn/simple&quot;</span>
<span class="token key property">verify_ssl</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;pypi&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置在:Windows路径为：<code>C:\\Users\\&lt;UserName&gt;\\pip\\pip.ini</code></p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">global</span><span class="token punctuation">]</span>
<span class="token key property">index-url</span> <span class="token punctuation">=</span> https://repo<span class="token punctuation">.</span>huaweicloud<span class="token punctuation">.</span>com/repository/pypi/simple
<span class="token key property">trusted-host</span> <span class="token punctuation">=</span> repo<span class="token punctuation">.</span>huaweicloud<span class="token punctuation">.</span>com
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token number">120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认安装的虚拟环境都在c盘<code>%userprofile%的.virtualenvs</code>文件夹下面,如果想更换,可以添加<code>PIPENV_VENV_IN_PROJECT</code>环境变量,并设置值为<code>1</code>,就是在项目下面创建虚拟环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个env环境</span>
pipenv <span class="token function">install</span>
<span class="token comment"># 删除env</span>
pipenv <span class="token parameter variable">--rm</span>
<span class="token comment"># 安装一个依赖</span>
pipenv <span class="token function">install</span> httpx
<span class="token comment"># 导出requirements</span>
pipenv lock <span class="token parameter variable">-r</span> <span class="token operator">&gt;</span> requirements.txt
<span class="token comment"># 安装包</span>
pipenv <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
<span class="token comment"># 检查包</span>
pipenv run pip list
<span class="token comment"># 删除所有</span>
pipenv uninstall <span class="token parameter variable">--all</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如何运行呢? 需要在命令行加上一句<code>pipenv shell;$env:PYTHONPATH=&quot;E:\\PycharmProjects\\douyin-spider&quot;;激活当前的pipenv并</code>把<code>PYTHONPATH</code>改为当前路径,才能让python知道自己当前目录是一个包,不然自己写的包没办法引进去,会报错<code>ModuleNotFoundError: No module named &#39;util&#39;</code></p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipenv <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> COMMAND <span class="token punctuation">[</span>ARGS<span class="token punctuation">]</span><span class="token punctuation">..</span>.

OPTIONS:
<span class="token parameter variable">--where</span>          显示项目文件所在路径
<span class="token parameter variable">--venv</span>           显示虚拟环境实际文件所在路径
<span class="token parameter variable">--py</span>             显示虚拟环境 Python 解释器所在路径
<span class="token parameter variable">--envs</span>           显示虚拟环境的选项变量
<span class="token parameter variable">--rm</span>             删除虚拟环境
<span class="token parameter variable">--bare</span>           最小化输出
<span class="token parameter variable">--completion</span>     完整输出
<span class="token parameter variable">--man</span>            显示帮助页面
<span class="token parameter variable">--three</span> / two    使用 Python <span class="token number">3</span> / <span class="token number">2</span> 创建虚拟环境（注意须是本机已安装的 Python 版本）
<span class="token parameter variable">--python</span> TEXT    指定某个 Python 版本作为虚拟环境的安装源
--site-packages  附带安装原 Python 解释器中的第三方库
<span class="token parameter variable">--jumbotron</span>      复活节彩蛋
<span class="token parameter variable">--version</span>        版本信息
<span class="token parameter variable">--h</span> / <span class="token builtin class-name">help</span>       帮助信息

COMMANDS：
check            检查安全漏洞
graph            显示当前依赖关系图信息
<span class="token function">install</span>          安装虚拟环境或者第三方库
lock             锁定并生成 Pipfile.lock 文件
<span class="token function">open</span>             在编辑其中查看一个库
run              在虚拟环境中运行命令
shell            进入虚拟环境
uninstall        卸载一个库
update           写在当前所有的库，并安装它们的最新版本

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,11);function b(h,k){const e=i("ExternalLinkIcon");return l(),t("div",null,[d,o,n("p",null,[s("安装python "),n("a",u,[s("安装包"),p(e)]),v,s(" windows安装后会自动吧pip和python加入到环境变量")]),m])}const g=a(r,[["render",b],["__file","pipenv.html.vue"]]);export{g as default};
