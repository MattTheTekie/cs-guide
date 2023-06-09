import{_ as a,r,o as n,c as d,d as e,e as s,b as i,w as u,a as t}from"./app-3d979d38.js";const h={},c=t('<h1 id="ssh-secure-shell-介绍" tabindex="-1"><a class="header-anchor" href="#ssh-secure-shell-介绍" aria-hidden="true">#</a> SSH（Secure Shell）介绍</h1><h2 id="ssh-安装" tabindex="-1"><a class="header-anchor" href="#ssh-安装" aria-hidden="true">#</a> SSH 安装</h2><ul><li><p>查看是否已安装：</p></li><li><p>CentOS：<code>rpm -qa | grep openssh</code></p></li><li><p>Ubuntu：<code>dpkg -l | grep openssh</code></p></li><li><p>安装：</p></li><li><p>CentOS 6：<code>sudo yum install -y openssh-server openssh-clients</code></p></li><li><p>Ubuntu：<code>sudo apt-get install -y openssh-server openssh-client</code></p></li></ul><h2 id="特别注意-本文内容-修改完配置都要记得重启服务" tabindex="-1"><a class="header-anchor" href="#特别注意-本文内容-修改完配置都要记得重启服务" aria-hidden="true">#</a> 特别注意：本文内容，修改完配置都要记得重启服务</h2><ul><li>CentOS 6 命令：<code>service sshd restart</code></li><li>CentOS 7 命令：<code>systemctl restart sshd.service</code></li></ul><h2 id="ssh-修改连接端口" tabindex="-1"><a class="header-anchor" href="#ssh-修改连接端口" aria-hidden="true">#</a> SSH 修改连接端口</h2><ul><li>配置文件介绍（记得先备份）：<code>sudo vim /etc/ssh/sshd_config</code></li><li>打开这一行注释：Port 22 <ul><li>自定义端口选择建议在万位的端口，如：10000-65535之间，假设这里我改为 60001</li></ul></li><li>CentOS 6 给新端口加到防火墙中： <ul><li>添加规则：<code>iptables -I INPUT -p tcp -m tcp --dport 60001 -j ACCEPT</code></li><li>保存规则：<code>service iptables save</code></li><li>重启 iptables：<code>service iptables restart</code></li></ul></li><li>CentOS 7：添加端口：<code>firewall-cmd --zone=public --add-port=60001/tcp --permanent</code><ul><li>重启防火墙：<code>firewall-cmd --reload</code></li></ul></li></ul><h2 id="设置超时" tabindex="-1"><a class="header-anchor" href="#设置超时" aria-hidden="true">#</a> 设置超时</h2><ul><li>ClientAliveInterval指定了服务器端向客户端请求消息的时间间隔, 默认是0，不发送。而ClientAliveInterval 300表示5分钟发送一次，然后客户端响应，这样就保持长连接了。</li><li>ClientAliveCountMax，默认值3。ClientAliveCountMax表示服务器发出请求后客户端没有响应的次数达到一定值，就自动断开，正常情况下，客户端不会不响应。</li><li>正常我们可以设置为： <ul><li>ClientAliveInterval 300</li><li>ClientAliveCountMax 3</li><li>按上面的配置的话，300*3＝900秒＝15分钟，即15分钟客户端不响应时，ssh连接会自动退出。</li></ul></li></ul><h2 id="ssh-允许-root-账户登录" tabindex="-1"><a class="header-anchor" href="#ssh-允许-root-账户登录" aria-hidden="true">#</a> SSH 允许 root 账户登录</h2><ul><li>编辑配置文件（记得先备份）：<code>sudo vim /etc/ssh/sshd_config</code></li><li>允许 root 账号登录 <ul><li>注释掉：<code>PermitRootLogin without-password</code></li><li>新增一行：<code>PermitRootLogin yes</code></li></ul></li></ul><h2 id="ssh-不允许-root-账户登录" tabindex="-1"><a class="header-anchor" href="#ssh-不允许-root-账户登录" aria-hidden="true">#</a> SSH 不允许 root 账户登录</h2><ul><li>新增用户和把新增的用户改为跟 root 同等权限方法：[Bash.md]</li><li>编辑配置文件（记得先备份）：<code>sudo vim /etc/ssh/sshd_config</code><ul><li>注释掉这一句（如果没有这一句则不管它）：<code>PermitRootLogin yes</code></li></ul></li></ul><h2 id="ssh-密钥登录" tabindex="-1"><a class="header-anchor" href="#ssh-密钥登录" aria-hidden="true">#</a> SSH 密钥登录</h2>',14),m=t("<li>生成秘钥和公钥文件，命令：<code>sudo ssh-keygen</code>，在交互提示中连续按三次回车，如果看得懂交互的表达，那就根据你自己需求来。默认生成密钥和公钥文件是在：/root/.ssh。</li><li>进入生成目录：<code>cd /root/.ssh</code>，可以看到有两个文件：id_rsa (私钥) 和 id_rsa.pub (公钥)</li><li>在 .ssh 目录下创建 SSH 认证文件，命令：<code>touch /root/.ssh/authorized_keys</code></li><li>将公钥内容写到SSH认证文件里面，命令：<code>cat /root/.ssh/id_rsa.pub &gt;&gt; /root/.ssh/authorized_keys</code></li><li>修改SSH认证文件权限，命令： <ul><li><code>sudo chmod 700 /root/.ssh</code></li><li><code>sudo chmod 600 /root/.ssh/authorized_keys</code></li></ul></li><li>重启服务：<code>sudo service sshd restart</code></li><li>设置 SSH 服务默认启动：<code>sudo sysv-rc-conf ssh on</code></li><li>现在 SSH 客户端可以去拿着 SSH 服务器端上的 id_rsa，在客户端指定秘钥文件地址即可，这个一般由于你使用的客户端决定的，我这里推荐的是 Xshell 软件。</li>",8),H=t('<h2 id="限制只有某一个ip才能远程登录服务器" tabindex="-1"><a class="header-anchor" href="#限制只有某一个ip才能远程登录服务器" aria-hidden="true">#</a> 限制只有某一个IP才能远程登录服务器</h2><ul><li>在该配置文件：<code>vim /etc/hosts.deny</code><ul><li>添加该内容：<code>sshd:ALL</code></li></ul></li><li>在该配置文件：<code>vim /etc/hosts.allow</code><ul><li>添加该内容：<code>sshd:123.23.1.23</code></li></ul></li></ul><h2 id="限制某些用户可以-ssh-访问" tabindex="-1"><a class="header-anchor" href="#限制某些用户可以-ssh-访问" aria-hidden="true">#</a> 限制某些用户可以 SSH 访问</h2><ul><li>在该配置文件：<code>vim /etc/ssh/sshd_config</code><ul><li>添加该内容：<code>AllowUsers root userName1 userName2</code></li></ul></li></ul><h2 id="常用-ssh-连接终端" tabindex="-1"><a class="header-anchor" href="#常用-ssh-连接终端" aria-hidden="true">#</a> 常用 SSH 连接终端</h2>',5),p={href:"http://www.youmeek.com/ssh-terminal-emulator-recommend-xshell-and-xftp/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://xclient.info/s/zoc-terminal.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="查看-ssh-登录日志" tabindex="-1"><a class="header-anchor" href="#查看-ssh-登录日志" aria-hidden="true">#</a> 查看 SSH 登录日志</h2><h4 id="centos-6" tabindex="-1"><a class="header-anchor" href="#centos-6" aria-hidden="true">#</a> CentOS 6</h4><ul><li>查看登录失败记录：<code>cat /var/log/auth.log | grep &quot;Failed password&quot;</code><ul><li>如果数据太多可以用命令：<code>tail -500f /var/log/auth.log | grep &quot;Failed password&quot;</code></li></ul></li><li>统计哪些 IP 尝试多少次失败登录记录：<code>grep &quot;Failed password&quot; /var/log/auth.log | awk ‘{print $11}’ | uniq -c | sort -nr</code></li><li>统计哪些 IP 尝试多少次失败登录记录，并排序：<code>grep &quot;Failed password&quot; /var/log/auth.log | awk &#39;{print $11}&#39; | sort | uniq -c | sort -nr | more</code></li></ul><h4 id="centos-7" tabindex="-1"><a class="header-anchor" href="#centos-7" aria-hidden="true">#</a> CentOS 7</h4><ul><li>查看登录失败：<code>egrep &quot;Failed|Failure&quot; /var/log/secure</code>，可以得到类似信息： <ul><li>如果数据太多，可以用命令：<code>tail -500f /var/log/secure | egrep &quot;Failed|Failure&quot;</code></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Feb 21 16:10:15 U5NHTIHOW67HKAH sshd[32753]: Failed password for invalid user oracle from 1.175.83.6 port 46560 ssh2
Feb 21 16:10:16 U5NHTIHOW67HKAH sshd[32750]: Failed password for root from 42.7.26.88 port 62468 ssh2
Feb 21 16:10:17 U5NHTIHOW67HKAH sshd[32744]: Failed password for root from 42.7.26.85 port 36086 ssh2
Feb 21 16:10:18 U5NHTIHOW67HKAH sshd[32756]: Failed password for invalid user oracle from 1.175.83.6 port 46671 ssh2
Feb 21 16:10:20 U5NHTIHOW67HKAH sshd[32744]: Failed password for root from 42.7.26.85 port 36086 ssh2
Feb 21 16:10:21 U5NHTIHOW67HKAH sshd[32750]: Failed password for root from 42.7.26.88 port 62468 ssh2
Feb 21 16:10:21 U5NHTIHOW67HKAH sshd[32758]: Failed password for invalid user oracle from 1.175.83.6 port 46811 ssh2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看登录失败统计：<code>grep &quot;authentication failure&quot; /var/log/secure</code>，可以得到类似信息： <ul><li>如果数据太多，可以用命令：<code>tail -500f /var/log/secure | grep &quot;authentication failure&quot;</code></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Feb 21 02:01:46 U5NHTIHOW67HKAH sshd[16854]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:01:46 U5NHTIHOW67HKAH sshd[16854]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:01:47 U5NHTIHOW67HKAH sshd[16858]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:02:02 U5NHTIHOW67HKAH sshd[16858]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:02:02 U5NHTIHOW67HKAH sshd[16858]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:03:11 U5NHTIHOW67HKAH sshd[16870]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:03:25 U5NHTIHOW67HKAH sshd[16870]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:03:25 U5NHTIHOW67HKAH sshd[16870]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:03:29 U5NHTIHOW67HKAH sshd[16872]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:03:44 U5NHTIHOW67HKAH sshd[16872]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:03:44 U5NHTIHOW67HKAH sshd[16872]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:03:45 U5NHTIHOW67HKAH sshd[16875]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:04:01 U5NHTIHOW67HKAH sshd[16875]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:04:01 U5NHTIHOW67HKAH sshd[16875]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:04:05 U5NHTIHOW67HKAH sshd[16878]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:04:20 U5NHTIHOW67HKAH sshd[16878]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:04:20 U5NHTIHOW67HKAH sshd[16878]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:04:24 U5NHTIHOW67HKAH sshd[16883]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:04:40 U5NHTIHOW67HKAH sshd[16883]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:04:40 U5NHTIHOW67HKAH sshd[16883]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:04:43 U5NHTIHOW67HKAH sshd[16886]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:04:59 U5NHTIHOW67HKAH sshd[16886]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:04:59 U5NHTIHOW67HKAH sshd[16886]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:05:02 U5NHTIHOW67HKAH sshd[16888]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:05:08 U5NHTIHOW67HKAH sshd[16891]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=146.0.228.146
Feb 21 02:05:18 U5NHTIHOW67HKAH sshd[16888]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:05:18 U5NHTIHOW67HKAH sshd[16888]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:05:20 U5NHTIHOW67HKAH sshd[16899]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:05:34 U5NHTIHOW67HKAH sshd[16899]: Disconnecting: Too many authentication failures for root [preauth]
Feb 21 02:05:34 U5NHTIHOW67HKAH sshd[16899]: PAM 5 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:05:37 U5NHTIHOW67HKAH sshd[16901]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=42.7.26.85  user=root
Feb 21 02:05:53 U5NHTIHOW67HKAH sshd[16901]: Disconnecting: Too many authentication failures for root [preauth]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防止-ssh-暴力破解-denyhosts" tabindex="-1"><a class="header-anchor" href="#防止-ssh-暴力破解-denyhosts" aria-hidden="true">#</a> 防止 SSH 暴力破解：DenyHosts</h2>`,9),f={href:"https://github.com/denyhosts/denyhosts",target:"_blank",rel:"noopener noreferrer"},g={href:"http://blog.51cto.com/linuxroad/673425",target:"_blank",rel:"noopener noreferrer"},_={href:"http://blog.csdn.net/wanglei_storage/article/details/50849070",target:"_blank",rel:"noopener noreferrer"},w={href:"https://chegva.com/2338.html",target:"_blank",rel:"noopener noreferrer"},y={href:"http://blog.csdn.net/miner_k/article/details/78948100",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"ssh-资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssh-资料","aria-hidden":"true"},"#"),s(" SSH 资料")],-1),A={href:"http://www.jikexueyuan.com/course/861_1.html?ss=1",target:"_blank",rel:"noopener noreferrer"},F={href:"http://www.361way.com/ssh-autologout/4679.html",target:"_blank",rel:"noopener noreferrer"},S={href:"http://www.osyunwei.com/archives/672.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.tecmint.com/find-failed-ssh-login-attempts-in-linux/",target:"_blank",rel:"noopener noreferrer"};function I(O,N){const l=r("RouterLink"),o=r("ExternalLinkIcon");return n(),d("div",null,[c,e("ul",null,[m,e("li",null,[s("另外一种方法可以查看："),i(l,{to:"/linux-tutor/server/SSH-login-without-password.html"},{default:u(()=>[s("SSH 免密登录（推荐）")]),_:1})])]),H,e("ul",null,[e("li",null,[s("Windows -- Xshell："),e("a",p,[s("http://www.youmeek.com/ssh-terminal-emulator-recommend-xshell-and-xftp/"),i(o)])]),e("li",null,[s("Mac -- ZOC："),e("a",v,[s("http://xclient.info/s/zoc-terminal.html"),i(o)])])]),b,e("ul",null,[e("li",null,[s("官网地址："),e("a",f,[s("https://github.com/denyhosts/denyhosts"),i(o)])]),e("li",null,[s("参考文章： "),e("ul",null,[e("li",null,[e("a",g,[s("http://blog.51cto.com/linuxroad/673425"),i(o)])]),e("li",null,[e("a",_,[s("http://blog.csdn.net/wanglei_storage/article/details/50849070"),i(o)])]),e("li",null,[e("a",w,[s("https://chegva.com/2338.html"),i(o)])]),e("li",null,[e("a",y,[s("http://blog.csdn.net/miner_k/article/details/78948100"),i(o)])])])])]),x,e("ul",null,[e("li",null,[e("a",A,[s("http://www.jikexueyuan.com/course/861_1.html?ss=1"),i(o)])]),e("li",null,[e("a",F,[s("http://www.361way.com/ssh-autologout/4679.html"),i(o)])]),e("li",null,[e("a",S,[s("http://www.osyunwei.com/archives/672.html"),i(o)])]),e("li",null,[e("a",T,[s("https://www.tecmint.com/find-failed-ssh-login-attempts-in-linux/"),i(o)])])])])}const W=a(h,[["render",I],["__file","SSH.html.vue"]]);export{W as default};
