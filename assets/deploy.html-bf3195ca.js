import{_ as s,r as p,o as t,c as i,d as a,e as n,b as l,a as c}from"./app-3d979d38.js";const o={},d=c(`<h1 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署" aria-hidden="true">#</a> 项目部署</h1><h2 id="安装php" tabindex="-1"><a class="header-anchor" href="#安装php" aria-hidden="true">#</a> 安装php</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php php-devel
<span class="token comment"># 安装常用工具(可选)</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php-mysql php-gd php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启apache服务器<code>apachectl restart</code></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加一个php文件</span>
<span class="token function">vi</span> /var/www/html/info.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>写入</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r={href:"http://localhost/info.php",target:"_blank",rel:"noopener noreferrer"};function h(u,m){const e=p("ExternalLinkIcon");return t(),i("div",null,[d,a("p",null,[n("然后访问"),a("a",r,[n("http://localhost/info.php"),l(e)])])])}const f=s(o,[["render",h],["__file","deploy.html.vue"]]);export{f as default};