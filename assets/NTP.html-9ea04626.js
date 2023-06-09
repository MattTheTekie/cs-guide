import{_ as r,r as s,o as t,c as d,d as n,e,b as i,a as o}from"./app-3d979d38.js";const c={},a=o('<h1 id="ntp-network-time-protocol-介绍" tabindex="-1"><a class="header-anchor" href="#ntp-network-time-protocol-介绍" aria-hidden="true">#</a> NTP（Network Time Protocol）介绍</h1><h2 id="ntp-安装" tabindex="-1"><a class="header-anchor" href="#ntp-安装" aria-hidden="true">#</a> NTP 安装</h2><ul><li><p>查看是否已安装：</p></li><li><p>CentOS：<code>rpm -qa | grep ntp-*</code></p></li><li><p>Ubuntu：<code>dpkg -l | grep ntp-*</code></p></li><li><p>安装：</p></li><li><p>CentOS 6/7：<code>sudo yum install -y ntp</code></p></li><li><p>Ubuntu：<code>sudo apt-get install -y ntp</code></p></li></ul><h2 id="配置阿里云-ntp-推荐" tabindex="-1"><a class="header-anchor" href="#配置阿里云-ntp-推荐" aria-hidden="true">#</a> 配置阿里云 NTP（推荐）</h2>',4),u={href:"https://help.aliyun.com/knowledge_detail/40583.html",target:"_blank",rel:"noopener noreferrer"},p=n("li",null,[e("配置文件介绍（记得先备份）："),n("code",null,"sudo vim /etc/ntp.conf")],-1),m=n("li",null,"注释掉以下默认的配置内容：",-1),v=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server 0.centos.pool.ntp.org iburst
server 1.centos.pool.ntp.org iburst
server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新增配置：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>ntp1.aliyun.com
ntp2.aliyun.com
ntp3.aliyun.com
ntp4.aliyun.com
ntp5.aliyun.com
ntp6.aliyun.com
ntp7.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CentOS 6 <ul><li>重启 NTP 服务：<code>sudo service ntpd start</code></li><li>添加 NTP 自启动：<code>sudo chkconfig ntpd on</code></li></ul></li><li>CentOS 7 <ul><li>重启 NTP 服务：<code>sudo systemctl start ntpd.service</code></li><li>添加 NTP 自启动：<code>sudo systemctl enable ntpd.service</code></li></ul></li></ul><h2 id="ntp-服务器配置文件常用参数" tabindex="-1"><a class="header-anchor" href="#ntp-服务器配置文件常用参数" aria-hidden="true">#</a> NTP 服务器配置文件常用参数</h2>`,5),b={href:"http://www.pool.ntp.org/zh",target:"_blank",rel:"noopener noreferrer"},y={href:"http://www.pool.ntp.org/zone/cn",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,[n("p",null,[e("配置文件介绍（记得先备份）："),n("code",null,"sudo vim /etc/ntp.conf")])],-1),f=n("li",null,[n("p",null,"该配置解释：")],-1),g=n("li",null,[n("p",null,"标注 1 是默认内容，我们这里进行了注释。")],-1),_=n("li",null,[n("p",null,"标注 2 是新增内容，表示使用中国时间校对服务器节点地址。")],-1),x=o(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>server 0.cn.pool.ntp.org
server 1.cn.pool.ntp.org
server 2.cn.pool.ntp.org
server 3.cn.pool.ntp.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>我的配置如下</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>driftfile  /var/lib/ntp/drift
pidfile    /var/run/ntpd.pid
logfile    /var/log/ntp.log


# Access Control Support
restrict    default kod nomodify notrap nopeer noquery
restrict -6 default kod nomodify notrap nopeer noquery
restrict 127.0.0.1
restrict 192.168.0.0 mask 255.255.0.0 nomodify notrap nopeer noquery
restrict 172.16.0.0 mask 255.240.0.0 nomodify notrap nopeer noquery
restrict 100.64.0.0 mask 255.192.0.0 nomodify notrap nopeer noquery
restrict 10.0.0.0 mask 255.0.0.0 nomodify notrap nopeer noquery


# local clock
server 127.127.1.0
fudge  127.127.1.0 stratum 10


restrict ntp1.aliyun.com nomodify notrap nopeer noquery
restrict ntp1.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp10.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp11.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp12.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp2.aliyun.com nomodify notrap nopeer noquery
restrict ntp2.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp3.aliyun.com nomodify notrap nopeer noquery
restrict ntp3.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp4.aliyun.com nomodify notrap nopeer noquery
restrict ntp4.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp5.aliyun.com nomodify notrap nopeer noquery
restrict ntp5.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp6.aliyun.com nomodify notrap nopeer noquery
restrict ntp6.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp7.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp8.cloud.aliyuncs.com nomodify notrap nopeer noquery
restrict ntp9.cloud.aliyuncs.com nomodify notrap nopeer noquery


server ntp1.aliyun.com iburst minpoll 4 maxpoll 10
server ntp1.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp10.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp11.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp12.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp2.aliyun.com iburst minpoll 4 maxpoll 10
server ntp2.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp3.aliyun.com iburst minpoll 4 maxpoll 10
server ntp3.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp4.aliyun.com iburst minpoll 4 maxpoll 10
server ntp4.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp5.aliyun.com iburst minpoll 4 maxpoll 10
server ntp5.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp6.aliyun.com iburst minpoll 4 maxpoll 10
server ntp6.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp7.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp8.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
server ntp9.cloud.aliyuncs.com iburst minpoll 4 maxpoll 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>启动服务：</p></li><li><p><code>sudo service ntpd stop</code>（改配置后，先停再启动）</p></li><li><p><code>sudo service ntpd start</code></p></li><li><p>手动更新时间：</p></li><li><p><code>sudo ntpdate ntp1.aliyun.com</code></p></li><li><p>服务加到启动项</p><ul><li>CentOS 系统：<code>sudo chkconfig ntpd on</code></li><li>Ubuntu 系统 <ul><li><code>sudo apt-get install -y sysv-rc-conf</code></li><li><code>sudo sysv-rc-conf ntpd on</code></li></ul></li></ul></li></ul><h2 id="ntp-资料" tabindex="-1"><a class="header-anchor" href="#ntp-资料" aria-hidden="true">#</a> NTP 资料</h2>`,5),k={href:"http://www.jikexueyuan.com/course/1710.html",target:"_blank",rel:"noopener noreferrer"},w={href:"http://www.pool.ntp.org/zh",target:"_blank",rel:"noopener noreferrer"},q={href:"http://blog.kissdata.com/2014/10/28/ubuntu-ntp.html",target:"_blank",rel:"noopener noreferrer"};function N(T,P){const l=s("ExternalLinkIcon");return t(),d("div",null,[a,n("ul",null,[n("li",null,[e("官网介绍："),n("a",u,[e("https://help.aliyun.com/knowledge_detail/40583.html"),i(l)])]),p,m]),v,n("ul",null,[n("li",null,[n("p",null,[e("世界上可以校对时间节点："),n("a",b,[e("http://www.pool.ntp.org/zh"),i(l)])])]),n("li",null,[n("p",null,[e("中国时间校对服务器节点："),n("a",y,[e("http://www.pool.ntp.org/zone/cn"),i(l)])])]),h,f,g,_]),x,n("ul",null,[n("li",null,[n("a",k,[e("http://www.jikexueyuan.com/course/1710.html"),i(l)])]),n("li",null,[n("a",w,[e("http://www.pool.ntp.org/zh"),i(l)])]),n("li",null,[n("a",q,[e("http://blog.kissdata.com/2014/10/28/ubuntu-ntp.html"),i(l)])])])])}const S=r(c,[["render",N],["__file","NTP.html.vue"]]);export{S as default};
