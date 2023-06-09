import{_ as l,r as i,o as s,c as o,d as a,e,b as r,a as t}from"./app-3d979d38.js";const d={},c=a("h1",{id:"grafana-安装和配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#grafana-安装和配置","aria-hidden":"true"},"#"),e(" Grafana 安装和配置")],-1),h=a("h2",{id:"对于版本",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#对于版本","aria-hidden":"true"},"#"),e(" 对于版本")],-1),u={href:"http://docs.grafana.org/features/datasources/elasticsearch/#elasticsearch-version",target:"_blank",rel:"noopener noreferrer"},f=a("h2",{id:"grafana-docker-安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#grafana-docker-安装","aria-hidden":"true"},"#"),e(" Grafana Docker 安装")],-1),g={href:"https://hub.docker.com/r/grafana/grafana/",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /data/docker/grafana/data
chmod 777 -R /data/docker/grafana/data

docker run -d --name grafana -p 3000:3000 -v /data/docker/grafana/data:/var/lib/grafana grafana/grafana

docker exec -it grafana /bin/bash

容器中默认的配置文件位置：/etc/grafana/grafana.ini
复制出配置文件到宿主机：docker cp grafana:/etc/grafana/grafana.ini /Users/gitnavi/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p={href:"http://127.0.0.1:3000",target:"_blank",rel:"noopener noreferrer"},m=a("li",null,"默认管理账号；admin，密码：admin，第一次登录后需要修改密码，也可以通过配置文件修改",-1),b=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[security]
admin_user = admin
admin_password = admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="grafana-安装" tabindex="-1"><a class="header-anchor" href="#grafana-安装" aria-hidden="true">#</a> Grafana 安装</h2>`,3),v=a("li",null,"CentOS 7.4",-1),x=a("li",null,"rpm 文件包大小 53M",-1),k=a("li",null,"所需内存：300M 左右",-1),w={href:"https://grafana.com/grafana/download?platform=linux",target:"_blank",rel:"noopener noreferrer"},y={href:"http://docs.grafana.org/installation/rpm/",target:"_blank",rel:"noopener noreferrer"},G=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install -y initscripts fontconfig urw-fonts
wget https://dl.grafana.com/oss/release/grafana-5.4.0-1.x86_64.rpm 
sudo yum localinstall -y grafana-5.4.0-1.x86_64.rpm 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Grafana 服务（默认是不启动的）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl start grafana-server
sudo systemctl status grafana-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N=a("li",null,[e("将 Grafana 服务设置为开机启动："),a("code",null,"sudo systemctl enable grafana-server")],-1),B=a("li",null,[e("开放端口："),a("code",null,"firewall-cmd --add-port=3000/tcp --permanent")],-1),E=a("li",null,[e("重新加载防火墙配置："),a("code",null,"firewall-cmd --reload")],-1),S={href:"http://192.168.0.105:3000",target:"_blank",rel:"noopener noreferrer"},C=a("li",null,"默认管理账号；admin，密码：admin，登录后需要修改密码",-1),I=a("hr",null,null,-1),V=a("h2",{id:"配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),L={href:"http://docs.grafana.org/installation/configuration/",target:"_blank",rel:"noopener noreferrer"},A=t("<li>安装包默认安装后的一些路径 <ul><li>二进制文件：<code>/usr/sbin/grafana-server</code></li><li>init.d 脚本：<code>/etc/init.d/grafana-server</code></li><li>配置文件：<code>/etc/grafana/grafana.ini</code></li><li>日志文件：<code>/var/log/grafana/grafana.log</code></li><li>插件目录是：<code>/var/lib/grafana/plugins</code></li><li>默认配置的 sqlite3 数据库：<code>/var/lib/grafana/grafana.db</code></li></ul></li><li>最重要的配置文件：<code>vim /etc/grafana/grafana.ini</code><ul><li>可以修改用户名和密码</li><li>端口</li><li>数据路径</li><li>数据库配置</li><li>第三方认证</li><li>Session 有效期</li></ul></li>",2),H={href:"http://192.168.0.105:3000/datasources/new",target:"_blank",rel:"noopener noreferrer"},M={href:"http://192.168.0.105:3000/admin/orgs",target:"_blank",rel:"noopener noreferrer"},q={href:"http://192.168.0.105:3000/org/users",target:"_blank",rel:"noopener noreferrer"},D={href:"http://192.168.0.105:3000/plugins",target:"_blank",rel:"noopener noreferrer"},O={href:"http://192.168.0.105:3000/org",target:"_blank",rel:"noopener noreferrer"},R={href:"http://192.168.0.105:3000/admin/settings",target:"_blank",rel:"noopener noreferrer"},T=a("h2",{id:"官网-dashboard",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#官网-dashboard","aria-hidden":"true"},"#"),e(" 官网 dashboard")],-1),U={href:"https://grafana.com/dashboards",target:"_blank",rel:"noopener noreferrer"},j=a("li",null,"本地可以通过输入 dashboard id 导入别人模板",-1),z={href:"http://192.168.0.105:3000/dashboard/import",target:"_blank",rel:"noopener noreferrer"},F=a("ul",null,[a("li",null,"输入对应的 id，点击 Load 即可")],-1),J=a("h2",{id:"数据源",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#数据源","aria-hidden":"true"},"#"),e(" 数据源")],-1),K=a("h4",{id:"elasticsearch",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#elasticsearch","aria-hidden":"true"},"#"),e(" Elasticsearch")],-1),P=a("p",null,"使用：",-1),Q={href:"https://cloud.tencent.com/info/68052367407c3bf21cc10c0263027f3f.html",target:"_blank",rel:"noopener noreferrer"},W={href:"http://docs.grafana.org/features/datasources/elasticsearch/#using-elasticsearch-in-grafana",target:"_blank",rel:"noopener noreferrer"},X=a("h2",{id:"其他资料",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#其他资料","aria-hidden":"true"},"#"),e(" 其他资料")],-1),Y={href:"https://blog.csdn.net/BianChengNinHao/article/details/80985302",target:"_blank",rel:"noopener noreferrer"};function Z($,aa){const n=i("ExternalLinkIcon");return s(),o("div",null,[c,h,a("ul",null,[a("li",null,[a("a",u,[e("支持的 Elasticsearch 版本"),r(n)])])]),f,a("ul",null,[a("li",null,[e("官网："),a("a",g,[e("https://hub.docker.com/r/grafana/grafana/"),r(n)])])]),_,a("ul",null,[a("li",null,[a("a",p,[e("http://127.0.0.1:3000"),r(n)])]),m]),b,a("ul",null,[v,x,k,a("li",null,[e("官网下载："),a("a",w,[e("https://grafana.com/grafana/download?platform=linux"),r(n)])]),a("li",null,[e("官网指导："),a("a",y,[e("http://docs.grafana.org/installation/rpm/"),r(n)])])]),G,a("ul",null,[N,B,E,a("li",null,[e("访问："),a("a",S,[e("http://192.168.0.105:3000"),r(n)])]),C]),I,V,a("ul",null,[a("li",null,[e("官网指导："),a("a",L,[e("http://docs.grafana.org/installation/configuration/"),r(n)])]),A,a("li",null,[e("添加数据源："),a("a",H,[e("http://192.168.0.105:3000/datasources/new"),r(n)])]),a("li",null,[e("添加组织："),a("a",M,[e("http://192.168.0.105:3000/admin/orgs"),r(n)])]),a("li",null,[e("添加用户："),a("a",q,[e("http://192.168.0.105:3000/org/users"),r(n)])]),a("li",null,[e("添加插件："),a("a",D,[e("http://192.168.0.105:3000/plugins"),r(n)])]),a("li",null,[e("个性化设置："),a("a",O,[e("http://192.168.0.105:3000/org"),r(n)])]),a("li",null,[e("软件变量："),a("a",R,[e("http://192.168.0.105:3000/admin/settings"),r(n)])])]),T,a("ul",null,[a("li",null,[e("dashboar仓库地址："),a("a",U,[e("https://grafana.com/dashboards"),r(n)])]),j,a("li",null,[e("打开："),a("a",z,[e("http://192.168.0.105:3000/dashboard/import"),r(n)]),F])]),J,K,P,a("ul",null,[a("li",null,[a("a",Q,[e("https://cloud.tencent.com/info/68052367407c3bf21cc10c0263027f3f.html"),r(n)])]),a("li",null,[a("a",W,[e("http://docs.grafana.org/features/datasources/elasticsearch/#using-elasticsearch-in-grafana"),r(n)])])]),X,a("ul",null,[a("li",null,[a("a",Y,[e("https://blog.csdn.net/BianChengNinHao/article/details/80985302"),r(n)])])])])}const na=l(d,[["render",Z],["__file","Grafana-Install-And-Settings.html.vue"]]);export{na as default};