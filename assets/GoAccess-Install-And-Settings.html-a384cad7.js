import{_ as s,r,o as d,c,d as e,e as n,b as l,a}from"./app-3d979d38.js";const o={},t=e("h2",{id:"安装-centos-7-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-centos-7-4","aria-hidden":"true"},"#"),n(" 安装（CentOS 7.4）")],-1),v={href:"https://www.jianshu.com/p/7cacc1d20588",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,[e("ol",null,[e("li",null,"安装依赖包")])],-1),g=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y ncurses-devel
wget http://geolite.maxmind.com/download/geoip/api/c/GeoIP.tar.gz
tar -zxvf GeoIP.tar.gz
cd GeoIP-1.4.8/
./configure
make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="2"><li>安装 GoAccess</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://tar.goaccess.io/goaccess-1.2.tar.gz
tar -xzvf goaccess-1.2.tar.gz
cd goaccess-1.2/ 
./configure --enable-utf8 --enable-geoip=legacy
make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ul><li>假设你 nginx 安装在：<code>/usr/local/nginx</code></li><li>假设你 nginx 的 log 输出到：<code>/var/log/nginx</code></li><li>修改 <code>vim /usr/local/nginx/conf/nginx.conf</code> 指定 nginx 的日志格式</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
http {
	charset  utf8;

	log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
	                &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
	                &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot; &quot;$request_time&quot;&#39;;

	access_log /var/log/nginx/access.log main;
	error_log /var/log/nginx/error.log;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>停止 nginx：<code>/usr/local/nginx/sbin/nginx -s stop</code></li><li>备份旧的 nginx log 文件：<code>mv /var/log/nginx/access.log /var/log/nginx/access.log.20180702back</code></li><li>启动 nginx：<code>/usr/local/nginx/sbin/nginx</code></li><li>创建 GoAccess 配置文件：<code>vim /etc/goaccess_log_conf_nginx.conf</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>time-format %T
date-format %d/%b/%Y
log_format %h - %^ [%d:%t %^] &quot;%r&quot; %s %b &quot;%R&quot; &quot;%u&quot; &quot;%^&quot; %^ %^ %^ %T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h4 id="在终端上展示数据" tabindex="-1"><a class="header-anchor" href="#在终端上展示数据" aria-hidden="true">#</a> 在终端上展示数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>goaccess -a -d -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="手动生成当前统计页面" tabindex="-1"><a class="header-anchor" href="#手动生成当前统计页面" aria-hidden="true">#</a> 手动生成当前统计页面</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更多参数用法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>时间分布图上：按小时展示数据：
goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html --ignore-crawlers --hour-spec=min


时间分布图上：按分钟展示数据：
goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html --ignore-crawlers --hour-spec=hour


不显示指定的面板
goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html --ignore-crawlers --hour-spec=min \\
	--ignore-panel=VISITORS \\
	--ignore-panel=REQUESTS \\
	--ignore-panel=REQUESTS_STATIC \\
	--ignore-panel=NOT_FOUND \\
	--ignore-panel=HOSTS \\
	--ignore-panel=OS \\
	--ignore-panel=BROWSERS \\
	--ignore-panel=VIRTUAL_HOSTS \\
	--ignore-panel=REFERRERS \\
	--ignore-panel=REFERRING_SITES \\
	--ignore-panel=KEYPHRASES \\
	--ignore-panel=STATUS_CODES \\
	--ignore-panel=REMOTE_USER \\
	--ignore-panel=GEO_LOCATION

我一般只留下几个面板（排除掉不想看的面板，因为使用 --enable-panel 参数无法达到这个目的）
goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html --ignore-crawlers --hour-spec=min \\
	--ignore-panel=VISITORS \\
	--ignore-panel=REQUESTS_STATIC \\
	--ignore-panel=NOT_FOUND \\
	--ignore-panel=OS \\
	--ignore-panel=VIRTUAL_HOSTS \\
	--ignore-panel=REFERRERS \\
	--ignore-panel=KEYPHRASES \\
	--ignore-panel=REMOTE_USER \\
	--ignore-panel=GEO_LOCATION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方便执行命令创建脚本" tabindex="-1"><a class="header-anchor" href="#方便执行命令创建脚本" aria-hidden="true">#</a> 方便执行命令创建脚本</h4><ul><li><code>vim goaccess_report_by_min.sh</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html --ignore-crawlers --hour-spec=min \\
	--ignore-panel=VISITORS \\
	--ignore-panel=REQUESTS_STATIC \\
	--ignore-panel=NOT_FOUND \\
	--ignore-panel=OS \\
	--ignore-panel=VIRTUAL_HOSTS \\
	--ignore-panel=REFERRERS \\
	--ignore-panel=KEYPHRASES \\
	--ignore-panel=REMOTE_USER \\
	--ignore-panel=GEO_LOCATION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>vim goaccess_report_by_hour.sh</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html --ignore-crawlers --hour-spec=hour \\
	--ignore-panel=VISITORS \\
	--ignore-panel=REQUESTS_STATIC \\
	--ignore-panel=NOT_FOUND \\
	--ignore-panel=OS \\
	--ignore-panel=VIRTUAL_HOSTS \\
	--ignore-panel=REFERRERS \\
	--ignore-panel=KEYPHRASES \\
	--ignore-panel=REMOTE_USER \\
	--ignore-panel=GEO_LOCATION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实时生成统计页面" tabindex="-1"><a class="header-anchor" href="#实时生成统计页面" aria-hidden="true">#</a> 实时生成统计页面</h4>`,21),m=e("li",null,"我个人看法是：一般没必要浪费这个性能，需要的时候执行下脚本就行了。",-1),b={href:"https://goaccess.io/man#examples",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"REAL TIME HTML OUTPUT",-1),h=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>goaccess -f /var/log/nginx/access.log -p /etc/goaccess_log_conf_nginx.conf -o /usr/local/nginx/report/index.html --real-time-html --daemonize 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,2),x={href:"https://www.fanhaobai.com/2017/06/go-access.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.imydl.tech/lnmp/32.html",target:"_blank",rel:"noopener noreferrer"};function f(S,E){const i=r("ExternalLinkIcon");return d(),c("div",null,[t,e("ul",null,[e("li",null,[e("p",null,[n("注意，如果是在 CentOS 6 下安装会碰到一些问题，可以参考："),e("a",v,[n("https://www.jianshu.com/p/7cacc1d20588"),l(i)])])]),u]),g,e("ul",null,[m,e("li",null,[n("官网文档："),e("a",b,[n("https://goaccess.io/man#examples"),l(i)]),n("，查询关键字："),p])]),h,e("ul",null,[e("li",null,[e("a",x,[n("https://www.fanhaobai.com/2017/06/go-access.html"),l(i)])]),e("li",null,[e("a",_,[n("https://www.imydl.tech/lnmp/32.html"),l(i)])])])])}const T=s(o,[["render",f],["__file","GoAccess-Install-And-Settings.html.vue"]]);export{T as default};
