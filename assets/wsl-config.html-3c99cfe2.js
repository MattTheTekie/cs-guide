import{_ as t,r as o,o as i,c as l,d as a,e as n,b as e,a as r}from"./app-3d979d38.js";const c={},d=r(`<h1 id="wsl配置" tabindex="-1"><a class="header-anchor" href="#wsl配置" aria-hidden="true">#</a> wsl配置</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>资源管理器中输入：<code>\\\\wsl$</code><br> 对应的路径是</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>C:\\Users\\Melville\\AppData\\Local\\Packages\\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\\LocalState\\rootfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="一键换源" tabindex="-1"><a class="header-anchor" href="#一键换源" aria-hidden="true">#</a> 一键换源</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>直接复制下面的命令到窗口中执行：
sudo sed <span class="token operator">-</span>i &#39;s<span class="token operator">/</span>archive<span class="token punctuation">.</span>ubuntu<span class="token punctuation">.</span>com<span class="token operator">/</span>mirrors<span class="token punctuation">.</span>ustc<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>g&#39; <span class="token operator">/</span>etc<span class="token operator">/</span>apt<span class="token operator">/</span>sources<span class="token punctuation">.</span>list
如果想替换security源：
sudo sed <span class="token operator">-</span>i &#39;s<span class="token operator">/</span>security<span class="token punctuation">.</span>ubuntu<span class="token punctuation">.</span>com<span class="token operator">/</span>mirrors<span class="token punctuation">.</span>ustc<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>g&#39; <span class="token operator">/</span>etc<span class="token operator">/</span>apt<span class="token operator">/</span>sources<span class="token punctuation">.</span>list 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p={href:"http://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://mirrors.sohu.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://mirrors.163.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://mirrors.oschina.net/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://mirrors.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},b=r(`<h2 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h2><h3 id="安装基本软件" tabindex="-1"><a class="header-anchor" href="#安装基本软件" aria-hidden="true">#</a> 安装基本软件</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sudo  apt install net<span class="token operator">-</span>tools tree htop <span class="token builtin">zip</span> unzip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取linux的ip" tabindex="-1"><a class="header-anchor" href="#获取linux的ip" aria-hidden="true">#</a> 获取linux的ip</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>alias myip <span class="token operator">=</span><span class="token string">&quot;ip address|grep inet |grep eth0|awk &#39;{print$2}&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装java" tabindex="-1"><a class="header-anchor" href="#安装java" aria-hidden="true">#</a> 安装java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>sudo apt install openjdk<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>jdk<span class="token operator">-</span>headless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装nvm" tabindex="-1"><a class="header-anchor" href="#安装nvm" aria-hidden="true">#</a> 安装nvm</h3>`,8),k={href:"https://github.com/nvm-sh/nvm#git-install",target:"_blank",rel:"noopener noreferrer"},g=r(`<h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx

<span class="token comment"># 启动</span>
<span class="token function">sudo</span> nginx

<span class="token comment"># 获取配置文件路径</span>
nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 重启</span>
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={href:"https://docs.microsoft.com/zh-cn/windows/wsl/basic-commands#install",target:"_blank",rel:"noopener noreferrer"},f=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> wsl <span class="token parameter variable">--shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function x(w,j){const s=o("ExternalLinkIcon");return i(),l("div",null,[d,a("p",null,[n("其它更多国内源参考，将上面的"),a("a",p,[n("http://mirrors.ustc.edu.cn"),e(s)]),n("换成下面任一种即可，不同地区下载速度有一定差别。")]),a("ul",null,[a("li",null,[n("搜狐开源镜像站："),a("a",u,[n("http://mirrors.sohu.com/"),e(s)])]),a("li",null,[n("网易开源镜像站："),a("a",h,[n("http://mirrors.163.com/"),e(s)])]),a("li",null,[n("开源中国："),a("a",m,[n("http://mirrors.oschina.net/"),e(s)])]),a("li",null,[n("阿里云开源镜像："),a("a",v,[n("http://mirrors.aliyun.com/"),e(s)])])]),b,a("p",null,[a("a",k,[n("https://github.com/nvm-sh/nvm#git-install"),e(s)])]),g,a("p",null,[a("a",_,[n("关闭wsl"),e(s)])]),f])}const L=t(c,[["render",x],["__file","wsl-config.html.vue"]]);export{L as default};
