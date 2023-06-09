import{_ as s,r as t,o as c,c as d,d as e,e as n,b as i,a}from"./app-3d979d38.js";const o={},r=a(`<h1 id="confluence-安装和配置" tabindex="-1"><a class="header-anchor" href="#confluence-安装和配置" aria-hidden="true">#</a> Confluence 安装和配置</h1><h2 id="confluence-6-15-4" tabindex="-1"><a class="header-anchor" href="#confluence-6-15-4" aria-hidden="true">#</a> Confluence 6.15.4</h2><ul><li>最新 6.15.4 版本时间：2019-05</li></ul><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run \\
	--name mysql-confluence \\
	--restart always \\
	-p 3316:3306 \\
	-e MYSQL_ROOT_PASSWORD=adg123456 \\
	-e MYSQL_DATABASE=confluence_db \\
	-e MYSQL_USER=confluence_user \\
	-e MYSQL_PASSWORD=confluence_123456 \\
	-d \\
	mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>连上容器：<code>docker exec -it mysql-confluence /bin/bash</code><ul><li>连上 MySQL：<code>mysql -u root -p</code></li></ul></li><li>设置编码： <ul><li><strong>必须做这一步，不然配置过程会报错，confluence 的 DB 要求是 utf8，还不能是 utf8mb4</strong></li><li><strong>并且排序规则还必须是：utf8_bin</strong></li><li><strong>数据库必须使用&#39;READ-COMMITTED&#39;作为默认隔离级别</strong></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SET NAMES &#39;utf8&#39;;
alter database confluence_db character set utf8 collate utf8_bin;
SET GLOBAL tx_isolation=&#39;READ-COMMITTED&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>`,8),u={href:"https://www.atlassian.com/software/confluence/download",target:"_blank",rel:"noopener noreferrer"},v=e("ul",null,[e("li",null,"选择：linux64 类型下载")],-1),m=e("li",null,[n("授权："),e("code",null,"chmod +x atlassian-confluence-6.15.4-x64.bin")],-1),h=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./atlassian-confluence-6.15.4-x64.bin

开始提示：

Unpacking JRE ...
Starting Installer ...

This will install Confluence 6.9.0 on your computer.
OK [o, Enter], Cancel [c]

&gt;&gt; 输入o或直接回车

Click Next to continue, or Cancel to exit Setup.

Choose the appropriate installation or upgrade option.
Please choose one of the following:
Express Install (uses default settings) [1], 
Custom Install (recommended for advanced users) [2, Enter], 
Upgrade an existing Confluence installation [3]
1
&gt;&gt; 这里输入数字1

See where Confluence will be installed and the settings that will be used.
Installation Directory: /opt/atlassian/confluence 
Home Directory: /var/atlassian/application-data/confluence 
HTTP Port: 8090 
RMI Port: 8000 
Install as service: Yes 
Install [i, Enter], Exit [e]
i

&gt;&gt; 输入i或者直接回车

Extracting files ...

Please wait a few moments while we configure Confluence.

Installation of Confluence 6.9.0 is complete
Start Confluence now?
Yes [y, Enter], No [n]

&gt;&gt; 输入y或者直接回车

Please wait a few moments while Confluence starts up.
Launching Confluence ...

Installation of Confluence 6.9.0 is complete
Your installation of Confluence 6.9.0 is now ready and can be accessed via
your browser.
Confluence 6.9.0 can be accessed at http://localhost:8090
Finishing installation ...

# 安装完成，访问本机的8090端口进行web端安装
# 开放防火墙端口
firewall-cmd --add-port=8090/tcp --permanent
firewall-cmd --add-port=8000/tcp --permanent
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>默认是安装在 /opt 目录下：<code>/opt/atlassian/confluence/confluence/WEB-INF/lib</code></li><li>启动：<code>sh /opt/atlassian/confluence/bin/start-confluence.sh</code></li><li>停止：<code>sh /opt/atlassian/confluence/bin/stop-confluence.sh</code></li><li>查看 log：<code>tail -300f /opt/atlassian/confluence/logs/catalina.out</code></li><li>卸载：<code>sh /opt/atlassian/confluence/uninstall</code></li><li>设置 MySQL 连接驱动，把 mysql-connector-java-5.1.47.jar 放在目录 <code>/opt/atlassian/confluence/confluence/WEB-INF/lib</code></li></ul><h4 id="首次配置" tabindex="-1"><a class="header-anchor" href="#首次配置" aria-hidden="true">#</a> 首次配置</h4>`,3),b={href:"http://localhost:8090",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.51cto.com/m51cto/2131964",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.qinjj.tech/2019/01/04/confluence%20install/",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"因为步骤一样，所以我就不再截图了。",-1),g=e("h4",{id:"license-过程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#license-过程","aria-hidden":"true"},"#"),n(" License 过程")],-1),w=e("ul",null,[e("li",null,"参考自己的为知笔记")],-1),x=e("h2",{id:"反向代理的配置可以参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#反向代理的配置可以参考","aria-hidden":"true"},"#"),n(" 反向代理的配置可以参考")],-1),C={href:"https://blog.51cto.com/m51cto/2131964",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"使用-markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-markdown","aria-hidden":"true"},"#"),n(" 使用 markdown")],-1),S=e("ul",null,[e("li",null,"点击右上角小齿轮 > 管理应用 > 搜索市场应用 > 输入 markdown > 安装")],-1),k=e("h2",{id:"其他资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他资料","aria-hidden":"true"},"#"),n(" 其他资料")],-1),I={href:"https://www.qinjj.tech/2019/02/26/confluence%20maintain/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.qinjj.tech/2019/02/26/confluence_maintain2/",target:"_blank",rel:"noopener noreferrer"};function j(L,M){const l=t("ExternalLinkIcon");return c(),d("div",null,[r,e("ul",null,[e("li",null,[n("下载："),e("a",u,[n("https://www.atlassian.com/software/confluence/download"),i(l)]),v]),m]),h,e("ul",null,[e("li",null,[n("访问："),e("a",b,[n("http://localhost:8090"),i(l)])]),e("li",null,[n("参考文章："),e("a",f,[n("https://blog.51cto.com/m51cto/2131964"),i(l)])]),e("li",null,[n("参考文章："),e("a",_,[n("https://www.qinjj.tech/2019/01/04/confluence install/"),i(l)])]),p]),g,w,x,e("ul",null,[e("li",null,[e("a",C,[n("https://blog.51cto.com/m51cto/2131964"),i(l)])])]),E,S,k,e("ul",null,[e("li",null,[e("a",I,[n("https://www.qinjj.tech/2019/02/26/confluence maintain/"),i(l)])]),e("li",null,[e("a",y,[n("https://www.qinjj.tech/2019/02/26/confluence_maintain2/"),i(l)])])])])}const q=s(o,[["render",j],["__file","Confluence-Install-And-Settings.html.vue"]]);export{q as default};
