import{_ as r,r as d,o as s,c as a,d as e,e as i,b as n,a as l}from"./app-3d979d38.js";const t={},c=l('<h1 id="zookeeper-安装" tabindex="-1"><a class="header-anchor" href="#zookeeper-安装" aria-hidden="true">#</a> Zookeeper 安装</h1><h2 id="docker-部署-zookeeper" tabindex="-1"><a class="header-anchor" href="#docker-部署-zookeeper" aria-hidden="true">#</a> Docker 部署 Zookeeper</h2><h4 id="单个实例" tabindex="-1"><a class="header-anchor" href="#单个实例" aria-hidden="true">#</a> 单个实例</h4>',3),u={href:"https://hub.docker.com/r/library/zookeeper/",target:"_blank",rel:"noopener noreferrer"},v=l("<li>单个实例：<code>docker run -d --restart always --name one-zookeeper -p 2181:2181 -v /etc/localtime:/etc/localtime zookeeper:latest</code><ul><li>默认端口暴露是：<code>This image includes EXPOSE 2181 2888 3888 (the zookeeper client port, follower port, election port respectively)</code></li></ul></li><li>容器中的几个重要目录（有需要挂载的可以指定）： <ul><li><code>/data</code></li><li><code>/datalog</code></li><li><code>/conf</code></li></ul></li>",2),m=e("h4",{id:"单机多个实例-集群",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#单机多个实例-集群","aria-hidden":"true"},"#"),i(" 单机多个实例（集群）")],-1),h=e("li",null,[i("创建 docker compose 文件："),e("code",null,"vim zookeeper.yml")],-1),p={href:"https://hub.docker.com/r/library/zookeeper/",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.1&#39;

services:
  zoo1:
    image: zookeeper
    restart: always
    hostname: zoo1
    ports:
      - 2181:2181
    environment:
      ZOO_MY_ID: 1
      ZOO_SERVERS: server.1=0.0.0.0:2888:3888 server.2=zoo2:2888:3888 server.3=zoo3:2888:3888

  zoo2:
    image: zookeeper
    restart: always
    hostname: zoo2
    ports:
      - 2182:2181
    environment:
      ZOO_MY_ID: 2
      ZOO_SERVERS: server.1=zoo1:2888:3888 server.2=0.0.0.0:2888:3888 server.3=zoo3:2888:3888

  zoo3:
    image: zookeeper
    restart: always
    hostname: zoo3
    ports:
      - 2183:2181
    environment:
      ZOO_MY_ID: 3
      ZOO_SERVERS: server.1=zoo1:2888:3888 server.2=zoo2:2888:3888 server.3=0.0.0.0:2888:3888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动：<code>docker-compose -f zookeeper.yml -p zk_test up -d</code><ul><li>参数 -p zk_test 表示这个 compose project 的名字，等价于：<code>COMPOSE_PROJECT_NAME=zk_test docker-compose -f zookeeper.yml up -d</code></li><li>不指定项目名称，Docker-Compose 默认以当前文件目录名作为应用的项目名</li><li>报错是正常情况的。</li></ul></li><li>停止：<code>docker-compose -f zookeeper.yml -p zk_test stop</code></li></ul><h4 id="先安装-nc-再来校验-zookeeper-集群情况" tabindex="-1"><a class="header-anchor" href="#先安装-nc-再来校验-zookeeper-集群情况" aria-hidden="true">#</a> 先安装 nc 再来校验 zookeeper 集群情况</h4>`,3),k=e("li",null,"环境：CentOS 7.4",-1),z={href:"https://nmap.org/download.html",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[i("当前时间（201803）最新版本下载："),e("code",null,"wget https://nmap.org/dist/ncat-7.60-1.x86_64.rpm")],-1),_=e("li",null,[i("安装："),e("code",null,"sudo rpm -i ncat-7.60-1.x86_64.rpm")],-1),x=e("li",null,[i("ln 下："),e("code",null,"sudo ln -s /usr/bin/ncat /usr/bin/nc")],-1),f=e("li",null,[i("检验："),e("code",null,"nc --version")],-1),y=l(`<h4 id="校验" tabindex="-1"><a class="header-anchor" href="#校验" aria-hidden="true">#</a> 校验</h4><ul><li>命令：<code>echo stat | nc 127.0.0.1 2181</code>，得到如下信息：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zookeeper version: 3.4.11-37e277162d567b55a07d1755f0b31c32e93c01a0, built on 11/01/2017 18:06 GMT
Clients:
 /172.21.0.1:58872[0](queued=0,recved=1,sent=0)

Latency min/avg/max: 0/0/0
Received: 1
Sent: 0
Connections: 1
Outstanding: 0
Zxid: 0x100000000
Mode: follower
Node count: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命令：<code>echo stat | nc 127.0.0.1 2182</code>，得到如下信息：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zookeeper version: 3.4.11-37e277162d567b55a07d1755f0b31c32e93c01a0, built on 11/01/2017 18:06 GMT
Clients:
 /172.21.0.1:36190[0](queued=0,recved=1,sent=0)

Latency min/avg/max: 0/0/0
Received: 1
Sent: 0
Connections: 1
Outstanding: 0
Zxid: 0x500000000
Mode: follower
Node count: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命令：<code>echo stat | nc 127.0.0.1 2183</code>，得到如下信息：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zookeeper version: 3.4.11-37e277162d567b55a07d1755f0b31c32e93c01a0, built on 11/01/2017 18:06 GMT
Clients:
 /172.21.0.1:33344[0](queued=0,recved=1,sent=0)

Latency min/avg/max: 0/0/0
Received: 1
Sent: 0
Connections: 1
Outstanding: 0
Zxid: 0x500000000
Mode: leader
Node count: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多机多个实例-集群" tabindex="-1"><a class="header-anchor" href="#多机多个实例-集群" aria-hidden="true">#</a> 多机多个实例（集群）</h4><ul><li>三台机子： <ul><li>内网 ip：<code>172.24.165.129</code>，外网 ip：<code>47.91.22.116</code></li><li>内网 ip：<code>172.24.165.130</code>，外网 ip：<code>47.91.22.124</code></li><li>内网 ip：<code>172.24.165.131</code>，外网 ip：<code>47.74.6.138</code></li></ul></li><li>修改三台机子 hostname： <ul><li>节点 1：<code>hostnamectl --static set-hostname youmeekhost1</code></li><li>节点 2：<code>hostnamectl --static set-hostname youmeekhost2</code></li><li>节点 3：<code>hostnamectl --static set-hostname youmeekhost3</code></li></ul></li><li>三台机子的 hosts 都修改为如下内容：<code>vim /etc/hosts</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>172.24.165.129 youmeekhost1
172.24.165.130 youmeekhost2
172.24.165.131 youmeekhost3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>节点 1：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
-v /data/docker/zookeeper/data:/data \\
-v /data/docker/zookeeper/log:/datalog \\
-e ZOO_MY_ID=1 \\
-e &quot;ZOO_SERVERS=server.1=youmeekhost1:2888:3888 server.2=youmeekhost2:2888:3888 server.3=youmeekhost3:2888:3888&quot; \\
--name=zookeeper1 --net=host --restart=always zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>节点 2：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
-v /data/docker/zookeeper/data:/data \\
-v /data/docker/zookeeper/log:/datalog \\
-e ZOO_MY_ID=2 \\
-e &quot;ZOO_SERVERS=server.1=youmeekhost1:2888:3888 server.2=youmeekhost2:2888:3888 server.3=youmeekhost3:2888:3888&quot; \\
--name=zookeeper2 --net=host --restart=always zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>节点 3：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
-v /data/docker/zookeeper/data:/data \\
-v /data/docker/zookeeper/log:/datalog \\
-e ZOO_MY_ID=3 \\
-e &quot;ZOO_SERVERS=server.1=youmeekhost1:2888:3888 server.2=youmeekhost2:2888:3888 server.3=youmeekhost3:2888:3888&quot; \\
--name=zookeeper3 --net=host --restart=always zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="需要环境" tabindex="-1"><a class="header-anchor" href="#需要环境" aria-hidden="true">#</a> 需要环境</h2><ul><li>JDK 安装</li></ul><h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装" aria-hidden="true">#</a> 下载安装</h2>`,19),O={href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,[i("此时（201702）最新稳定版本：Release "),e("code",null,"3.4.9")],-1),S={href:"http://www.apache.org/dyn/closer.cgi/zookeeper/",target:"_blank",rel:"noopener noreferrer"},Z=l("<li>我这里以：<code>zookeeper-3.4.8.tar.gz</code> 为例</li><li>安装过程： <ul><li><code>mkdir -p /usr/program/zookeeper/data</code></li><li><code>cd /opt/setups</code></li><li><code>tar zxvf zookeeper-3.4.8.tar.gz</code></li><li><code>mv /opt/setups/zookeeper-3.4.8 /usr/program/zookeeper</code></li><li><code>cd /usr/program/zookeeper/zookeeper-3.4.8/conf</code></li><li><code>mv zoo_sample.cfg zoo.cfg</code></li><li><code>vim zoo.cfg</code></li></ul></li><li>将配置文件中的这个值： <ul><li>原值：<code>dataDir=/tmp/zookeeper</code></li><li>改为：<code>dataDir=/usr/program/zookeeper/data</code></li></ul></li><li>防火墙开放2181端口 <ul><li><code>iptables -A INPUT -p tcp -m tcp --dport 2181 -j ACCEPT</code></li><li><code>service iptables save</code></li><li><code>service iptables restart</code></li></ul></li><li>启动 zookeeper：<code>sh /usr/program/zookeeper/zookeeper-3.4.8/bin/zkServer.sh start</code></li><li>停止 zookeeper：<code>sh /usr/program/zookeeper/zookeeper-3.4.8/bin/zkServer.sh stop</code></li><li>查看 zookeeper 状态：<code>sh /usr/program/zookeeper/zookeeper-3.4.8/bin/zkServer.sh status</code><ul><li>如果是集群环境，下面几种角色 <ul><li>leader</li><li>follower</li></ul></li></ul></li>",7),E=l(`<h2 id="集群环境搭建" tabindex="-1"><a class="header-anchor" href="#集群环境搭建" aria-hidden="true">#</a> 集群环境搭建</h2><h3 id="确定机子环境" tabindex="-1"><a class="header-anchor" href="#确定机子环境" aria-hidden="true">#</a> 确定机子环境</h3><ul><li>集群环境最少节点是：3，且节点数必须是奇数，生产环境推荐是：5 个机子节点。</li><li>系统都是 CentOS 6</li><li>机子 1：192.168.1.121</li><li>机子 2：192.168.1.111</li><li>机子 3：192.168.1.112</li></ul><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><ul><li>在三台机子上都做如上文的流程安装，再补充修改配置文件：<code>vim /usr/program/zookeeper/zookeeper-3.4.8/conf/zoo.cfg</code></li><li>三台机子都增加下面内容：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>server.1=192.168.1.121:2888:3888
server.2=192.168.1.111:2888:3888
server.3=192.168.1.112:2888:3888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 机子 1 增加一个该文件：<code>vim /usr/program/zookeeper/data/myid</code>，文件内容填写：<code>1</code></li><li>在 机子 2 增加一个该文件：<code>vim /usr/program/zookeeper/data/myid</code>，文件内容填写：<code>2</code></li><li>在 机子 3 增加一个该文件：<code>vim /usr/program/zookeeper/data/myid</code>，文件内容填写：<code>3</code></li><li>然后在三台机子上都启动 zookeeper：<code>sh /usr/program/zookeeper/zookeeper-3.4.8/bin/zkServer.sh start</code></li><li>分别查看三台机子的状态：<code>sh /usr/program/zookeeper/zookeeper-3.4.8/bin/zkServer.sh status</code>，应该会得到类似这样的结果：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Using config: /usr/program/zookeeper/zookeeper-3.4.8/bin/../conf/zoo.cfg
Mode: follower 或者 Mode: leader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zookeeper-客户端工具" tabindex="-1"><a class="header-anchor" href="#zookeeper-客户端工具" aria-hidden="true">#</a> Zookeeper 客户端工具</h2><h4 id="zooinspector" tabindex="-1"><a class="header-anchor" href="#zooinspector" aria-hidden="true">#</a> ZooInspector</h4>`,10),R={href:"https://issues.apache.org/jira/secure/attachment/12436620/ZooInspector.zip",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,"解压，双击 jar 文件，效果如下：",-1),C=e("h4",{id:"zooweb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zooweb","aria-hidden":"true"},"#"),i(" zooweb")],-1),I={href:"https://github.com/zhuhongyu345/zooweb",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"java -jar zooweb-1.0.jar",-1),V={href:"http://127.0.0.1:9345",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),i(" 资料")],-1),N={href:"https://liwei.io/2017/07/19/zookeeper-cluster-in-docker/",target:"_blank",rel:"noopener noreferrer"};function j(T,Y){const o=d("ExternalLinkIcon");return s(),a("div",null,[c,e("ul",null,[e("li",null,[i("官网仓库："),e("a",u,[i("https://hub.docker.com/r/library/zookeeper/"),n(o)])]),v]),m,e("ul",null,[h,e("li",null,[i("下面内容来自官网仓库："),e("a",p,[i("https://hub.docker.com/r/library/zookeeper/"),n(o)])])]),b,e("ul",null,[k,e("li",null,[i("官网下载："),e("a",z,[i("https://nmap.org/download.html"),n(o)]),i("，找到 rpm 包")]),g,_,x,f]),y,e("ul",null,[e("li",null,[i("官网："),e("a",O,[i("https://zookeeper.apache.org/"),n(o)])]),w,e("li",null,[i("官网下载："),e("a",S,[i("http://www.apache.org/dyn/closer.cgi/zookeeper/"),n(o)])]),Z]),E,e("ul",null,[e("li",null,[i("下载地址："),e("a",R,[i("https://issues.apache.org/jira/secure/attachment/12436620/ZooInspector.zip"),n(o)])]),M]),C,e("ul",null,[e("li",null,[i("下载地址："),e("a",I,[i("https://github.com/zhuhongyu345/zooweb"),n(o)])]),e("li",null,[i("Spring Boot 的 Web 项目，直接："),D,i(" 启动 web 服务，然后访问："),e("a",V,[i("http://127.0.0.1:9345"),n(o)])])]),q,e("ul",null,[e("li",null,[e("a",N,[i("https://liwei.io/2017/07/19/zookeeper-cluster-in-docker/"),n(o)])])])])}const P=r(t,[["render",j],["__file","Zookeeper-Install.html.vue"]]);export{P as default};
