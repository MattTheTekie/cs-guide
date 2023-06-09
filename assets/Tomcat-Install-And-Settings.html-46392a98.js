import{_ as i,r as o,o as c,c as u,d as a,e as t,b as n,w as r,a as s}from"./app-3d979d38.js";const p={},d=a("h1",{id:"tomcat-8-安装和配置、优化",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#tomcat-8-安装和配置、优化","aria-hidden":"true"},"#"),t(" Tomcat 8 安装和配置、优化")],-1),m=a("h2",{id:"tomcat-8-安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#tomcat-8-安装","aria-hidden":"true"},"#"),t(" Tomcat 8 安装")],-1),v={href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://tomcat.apache.org/download-80.cgi",target:"_blank",rel:"noopener noreferrer"},g=s("<li>此时（20160207） Tomcat 8 最新版本为：<code>apache-tomcat-8.0.32.tar.gz</code></li><li>我个人习惯 <code>/opt</code> 目录下创建一个目录 <code>setups</code> 用来存放各种软件安装包；在 <code>/usr</code> 目录下创建一个 <code>program</code> 用来存放各种解压后的软件包，下面的讲解也都是基于此习惯</li><li>我个人已经使用了第三方源：<code>EPEL、RepoForge</code>，如果你出现 <code>yum install XXXXX</code> 安装不成功的话，很有可能就是你没有相关源，请查看我对源设置的文章    - Tomcat 8 下载（201706 更新：旧版本失效）：<code>wget http://apache.fayea.com/tomcat/tomcat-8/v8.0.44/bin/apache-tomcat-8.0.44.tar.gz</code></li><li>压缩包解压：<code>tar -zxvf apache-tomcat-8.0.32.tar.gz</code></li><li>移到解压出来文件夹到 /usr 下：<code>mv apache-tomcat-8.0.32/ /usr/program/</code></li><li>为了方便，修改解压目录的名字：<code>mv /usr/program/apache-tomcat-8.0.32/ /usr/program/tomcat8/</code></li>",6),q=s("<li>设置 Iptables 规则（这一步是必须设置的）： <ul><li>一种方式：先关闭 iptables，防止出现拦截问题而测试不了：<code>service iptables stop</code></li><li>一种方式：在 iptables 中添加允许规则（Tomcat 默认端口是 8080）： <ul><li>添加规则：<code>iptables -I INPUT -p tcp -m tcp --dport 8080 -j ACCEPT</code></li><li>保存规则：<code>service iptables save</code></li><li>重启 iptables：<code>service iptables restart</code></li></ul></li></ul></li><li>测试安装好后的 Tomcat： <ul><li>启动 Tomcat：<code>sh /usr/program/tomcat8/bin/startup.sh ; tail -200f /usr/program/tomcat8/logs/catalina.out</code></li><li>访问：<code>http://服务器 IP 地址:8080/</code></li><li>停止 Tomcat：<code>sh /usr/program/tomcat8/bin/shutdown.sh</code></li></ul></li><li>如果启动报：<code>java.net.UnknownHostException 或 localhost. This prevents creation of a GUID</code><ul><li>解决办法： <ul><li>修改配置文件：<code>vim /etc/sysconfig/network</code>，把里面的 HOSTNAME 改为你自己设置的一个名字，比如我这边改为：youmeek</li><li>修改配置文件：<code>vim /etc/hosts</code>，把第一行的 127.0.0.1 这一行删掉，然后再最后一行增加这句：<code>127.0.0.1 localhost youmeek</code>，这里最后的 youmeek 就是主机名</li><li>然后重启计算机：<code>reboot</code></li></ul></li></ul></li><li>如果启动报：<code>java.net.BindException: 地址已在使用 / java.net.BindException: Address already in use</code><ul><li>解决办法：这表示端口被占用，修改 Tomcat 的 server.xml 配置文件，把端口改了即可。</li></ul></li>",4),k=s(`<h2 id="tomcat-8-配置" tabindex="-1"><a class="header-anchor" href="#tomcat-8-配置" aria-hidden="true">#</a> Tomcat 8 配置</h2><ul><li>设置 Tomcat 相关变量： <ul><li><code>vim /usr/program/tomcat8/bin/catalina.sh</code></li><li>在配置文件的可编辑内容最上面（98 行开始），加上如下内容（具体参数根据你服务器情况自行修改）：</li></ul><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">JAVA_HOME</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/program/jdk1.8.0_72</span>
<span class="token key attr-name">CATALINA_HOME</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/program/tomcat8</span>
<span class="token key attr-name">CATALINA_OPTS</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">-Dfile.encoding=UTF-8 -server -Xms2048m -Xmx2048m -Xmn1024m -XX:PermSize=256m -XX:MaxPermSize=512m -XX:SurvivorRatio=10 -XX:MaxTenuringThreshold=15 -XX:NewRatio=2 -XX:+DisableExplicitGC</span>&quot;</span>
<span class="token key attr-name">CATALINA_PID</span><span class="token punctuation">=</span><span class="token value attr-value">$CATALINA_HOME/catalina.pid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>如果使用 <code>shutdown.sh</code> 还无法停止 tomcat，可以修改其配置：<code>vim /usr/program/tomcat8/bin/shutdown.sh</code><ul><li>把最尾巴这一行：<code>exec &quot;$PRGDIR&quot;/&quot;$EXECUTABLE&quot; stop &quot;$@&quot;</code></li><li>改为：<code>exec &quot;$PRGDIR&quot;/&quot;$EXECUTABLE&quot; stop 10 -force</code></li></ul></li></ul><h2 id="tomcat-8-优化" tabindex="-1"><a class="header-anchor" href="#tomcat-8-优化" aria-hidden="true">#</a> Tomcat 8 优化</h2>`,3),b=a("li",null,"Tomcat 6/7/8 的优化参数有点不一样，最好按下面的方式看一下官网这个文档是否还保留着这个参数",-1),_={href:"http://127.0.0.1:8080/docs/config",target:"_blank",rel:"noopener noreferrer"},A={href:"https://tomcat.apache.org/tomcat-6.0-doc/config",target:"_blank",rel:"noopener noreferrer"},T={href:"https://tomcat.apache.org/tomcat-7.0-doc/config/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://tomcat.apache.org/tomcat-8.0-doc/config/",target:"_blank",rel:"noopener noreferrer"},x=a("li",null,"如果你需要查看 Tomcat 的运行状态可以配置tomcat管理员账户，然后登陆 Tomcat 后台进行查看",-1),N=a("li",null,"编辑 /opt/tomcat8/bin/conf/tomcat-users.xml 文件，在里面添加下面信息：",-1),C=s(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcat<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>manager-gui<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>manager-status<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user</span> <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcat<span class="token punctuation">&quot;</span></span> <span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123456<span class="token punctuation">&quot;</span></span> <span class="token attr-name">roles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcat,manager-gui,manager-status<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编辑配置文件：<code>vim /usr/program/tomcat8/conf/server.xml</code></li></ul><h4 id="打开默认被注释的连接池配置" tabindex="-1"><a class="header-anchor" href="#打开默认被注释的连接池配置" aria-hidden="true">#</a> 打开默认被注释的连接池配置</h4><ul><li>默认值：</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--
&lt;Executor name=&quot;tomcatThreadPool&quot; namePrefix=&quot;catalina-exec-&quot;
    maxThreads=&quot;150&quot; minSpareThreads=&quot;4&quot;/&gt;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改为：</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Executor</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcatThreadPool<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">namePrefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>catalina-exec-<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">maxThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">minSpareThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">maxIdleTime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60000<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">prestartminSpareThreads</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">maxQueueSize</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重点参数解释： <ul><li>maxThreads，最大并发数，默认设置 200，一般建议在 500 ~ 800，根据硬件设施和业务来判断</li><li>minSpareThreads，Tomcat 初始化时创建的线程数，默认设置 25</li><li>prestartminSpareThreads，在 Tomcat 初始化的时候就初始化 minSpareThreads 的参数值，如果不等于 true，minSpareThreads 的值就没啥效果了</li><li>maxQueueSize，最大的等待队列数，超过则拒绝请求</li><li>maxIdleTime，如果当前线程大于初始化线程，那空闲线程存活的时间，单位毫秒，默认60000=60秒=1分钟。</li></ul></li></ul><h4 id="修改默认的链接参数配置" tabindex="-1"><a class="header-anchor" href="#修改默认的链接参数配置" aria-hidden="true">#</a> 修改默认的链接参数配置</h4><ul><li>默认值：</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> 
    <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> 
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改为：</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> 
   <span class="token attr-name">executor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcatThreadPool<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.coyote.http11.Http11Nio2Protocol<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">maxConnections</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10000<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">enableLookups</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">acceptCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">maxPostSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10485760<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">maxHttpHeaderSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8192<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">disableUploadTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">URIEncoding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重点参数解释： <ul><li>protocol，Tomcat 8 设置 nio2 更好：org.apache.coyote.http11.Http11Nio2Protocol（如果这个用不了，就用下面那个）</li><li>protocol，Tomcat 6、7 设置 nio 更好：org.apache.coyote.http11.Http11NioProtocol</li><li>enableLookups，禁用DNS查询，tomcat 8 默认已经是禁用了。</li><li>maxConnections，最大连接数，tomcat 8 默认设置 10000</li><li>acceptCount，指定当所有可以使用的处理请求的线程数都被使用时，可以放到处理队列中的请求数，超过这个数的请求将不予处理，默认设置 100</li><li>maxPostSize，以 FORM URL 参数方式的 POST 提交方式，限制提交最大的大小，默认是 2097152(2兆)，它使用的单位是字节。10485760 为 10M。如果要禁用限制，则可以设置为 -1。</li><li>maxHttpHeaderSize，http请求头信息的最大程度，超过此长度的部分不予处理。一般8K。</li></ul></li><li>禁用 AJP（如果你服务器没有使用 Apache） <ul><li>把下面这一行注释掉，默认 Tomcat 是开启的。</li></ul></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- &lt;Connector port=&quot;8009&quot; protocol=&quot;AJP/1.3&quot; redirectPort=&quot;8443&quot; /&gt; --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭自动部署功能：</li><li>旧值：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Host name=&quot;localhost&quot;  appBase=&quot;webapps&quot; unpackWARs=&quot;true&quot; autoDeploy=&quot;true&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>新值：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Host name=&quot;localhost&quot;  appBase=&quot;webapps&quot; unpackWARs=&quot;true&quot; autoDeploy=&quot;false&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="jvm-优化-jdk-8" tabindex="-1"><a class="header-anchor" href="#jvm-优化-jdk-8" aria-hidden="true">#</a> JVM 优化（JDK 8）</h2>`,20),w={href:"http://xmuzyq.iteye.com/blog/599750",target:"_blank",rel:"noopener noreferrer"},I={href:"http://www.jianshu.com/p/d45e12241af4",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mp.weixin.qq.com/s/FHY0MelBfmgdRpT4zWF9dQ",target:"_blank",rel:"noopener noreferrer"},P=a("li",null,[t("JDK8 常用配比总结 8G 内存："),a("code",null,'CATALINA_OPTS="-Dfile.encoding=UTF-8 -Xms4g -Xmx4g"')],-1),L=s("<li>Linux 修改 /usr/program/tomcat8/bin/catalina.sh 文件，把下面信息添加到文件第一行。 <ul><li>如果服务器只运行一个 Tomcat，堆栈信息可以这样配置： <ul><li>机子内存如果是 4G： <ul><li><code>CATALINA_OPTS=&quot;-Dfile.encoding=UTF-8 -server -Xms2g -Xmx2g&quot;</code></li></ul></li><li>机子内存如果是 8G： <ul><li><code>CATALINA_OPTS=&quot;-Dfile.encoding=UTF-8 -server -Xms4g -Xmx4g&quot;</code></li></ul></li><li>机子内存如果是 16G： <ul><li><code>CATALINA_OPTS=&quot;-Dfile.encoding=UTF-8 -server -Xms8g -Xmx8g&quot;</code></li></ul></li><li>机子内存如果是 32G： <ul><li><code>CATALINA_OPTS=&quot;-Dfile.encoding=UTF-8 -server -Xms16g -Xmx16g&quot;</code></li></ul></li></ul></li><li>如果是 8G 开发机 <ul><li><code>-Xms2g -Xmx2g</code></li></ul></li><li>如果是 16G 开发机 <ul><li><code>-Xms4g -Xmx4g</code></li></ul></li><li>还有一个参数：<code>-XX:MetaspaceSize=128M -XX:MaxMetaspaceSize=512M</code><ul><li>这个可以通过调试来确认什么值合适，一般通过使用 <code>jstat -gc PID 250 20</code>，查看 gc 情况下的 MC、MU 情况。</li><li>默认 MaxMetaspaceSize 是 -1，无上限，所以如果硬件还行，不配置也没啥问题。</li><li>自己也了解 JVM 实际情况，那就根据实际情况调整。一般项目可以推荐：<code>-XX:MetaspaceSize=128M -XX:MaxMetaspaceSize=512M</code></li></ul></li></ul></li><li>Windows 修改 /tomcat7/bin/catalina.bat 文件，找到这一行：<code>echo Using CATALINA_BASE: &quot;%CATALINA_BASE%&quot;</code>，然后在其上面添加如下内容，此方法只对解压版的 Tomcat 有效果，对于安装版本的需要点击安装后任务栏上的那个 Tomcat 图标，打开配置中有一个 <code>Java</code> Tab 的进行编辑。</li>",2),$=s(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>set JAVA_OPTS=%JAVA_OPTS% -Dfile.encoding=&quot;UTF-8&quot; -Dsun.jnu.encoding=&quot;UTF8&quot; -Ddefault.client.encoding=&quot;UTF-8&quot; -Duser.language=Zh
set JAVA_OPTS=%JAVA_OPTS% -server -Xms4g -Xmx4g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tomcat-manager-监控配置-tomcat-8-0-53" tabindex="-1"><a class="header-anchor" href="#tomcat-manager-监控配置-tomcat-8-0-53" aria-hidden="true">#</a> tomcat-manager 监控配置（tomcat 8.0.53）</h2><h4 id="开启步骤" tabindex="-1"><a class="header-anchor" href="#开启步骤" aria-hidden="true">#</a> 开启步骤</h4>`,3),y=a("li",null,"不同的 Tomcat 版本会有差异。",-1),O={href:"https://tomcat.apache.org/tomcat-8.0-doc/manager-howto.html",target:"_blank",rel:"noopener noreferrer"},M=a("li",null,[a("strong",null,"先确保解压的 tomcat/webapps 下有 manager 项目")],-1),D=a("li",null,[t("在配置文件里面添加可访问用户："),a("code",null,"vim /usr/local/tomcat8/conf/tomcat-users.xml"),t("，比如：")],-1),E=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;role rolename=&quot;tomcat&quot;/&gt;
&lt;role rolename=&quot;manager-gui&quot;/&gt;
&lt;role rolename=&quot;manager-status&quot;/&gt;

&lt;user username=&quot;tomcat&quot; password=&quot;123456&quot; roles=&quot;tomcat,manager-gui,manager-status&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>正常情况下，manager ui 界面只运行内网：127.0.0.1 访问，这里我们要关闭这个限制。</li><li>修改 webapps 下 manager 项目下的配置：<code>vim /usr/local/tomcat8/webapps/manager/META-INF/context.xml</code></li><li>旧值：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Context antiResourceLocking=&quot;false&quot; privileged=&quot;true&quot; &gt;
  &lt;Valve className=&quot;org.apache.catalina.valves.RemoteAddrValve&quot; allow=&quot;127\\.\\d+\\.\\d+\\.\\d+|::1|0:0:0:0:0:0:0:1&quot; /&gt;
  &lt;Manager sessionAttributeValueClassNameFilter=&quot;java\\.lang\\.(?:Boolean|Integer|Long|Number|String)|org\\.apache\\.catalina\\.filters\\.CsrfPreventionFilter\\$LruCache(?:\\$1)?|jav
&lt;/Context&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新值：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Context antiResourceLocking=&quot;false&quot; privileged=&quot;true&quot; &gt;
  &lt;!--
  &lt;Valve className=&quot;org.apache.catalina.valves.RemoteAddrValve&quot; allow=&quot;127\\.\\d+\\.\\d+\\.\\d+|::1|0:0:0:0:0:0:0:1&quot; /&gt;
  --&gt;
  &lt;Manager sessionAttributeValueClassNameFilter=&quot;java\\.lang\\.(?:Boolean|Integer|Long|Number|String)|org\\.apache\\.catalina\\.filters\\.CsrfPreventionFilter\\$LruCache(?:\\$1)?|jav
&lt;/Context&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),X={href:"http://120.78.72.28:8080/manager/status",target:"_blank",rel:"noopener noreferrer"},G=s('<h4 id="可以看到-jvm-堆栈信息" tabindex="-1"><a class="header-anchor" href="#可以看到-jvm-堆栈信息" aria-hidden="true">#</a> 可以看到 JVM 堆栈信息</h4><p><img src="https://upload-images.jianshu.io/upload_images/12159-e86a32e685f91dde.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="image.png"></p><h4 id="可以看到-http-连接数情况" tabindex="-1"><a class="header-anchor" href="#可以看到-http-连接数情况" aria-hidden="true">#</a> 可以看到 HTTP 连接数情况</h4><p><img src="https://upload-images.jianshu.io/upload_images/12159-99d9fffee0c3c17f.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="image.png"></p><ul><li>配置文件里面限制的最大线程数：<code>Max threads: 200</code></li><li>当前线程数：<code>Current thread count: 10</code></li><li>当前繁忙的线程数：<code>Current thread busy: 1</code><ul><li>如果当前繁忙线程已经是接近最大线程数，那基本可以表示负载到了</li></ul></li><li>保持连接数：<code>Keep alive sockets count: 1</code></li></ul><h2 id="tomcat-8-的-log-分割" tabindex="-1"><a class="header-anchor" href="#tomcat-8-的-log-分割" aria-hidden="true">#</a> Tomcat 8 的 Log 分割</h2>',6),j=a("li",null,"修改前提：本人为 Tomcat8.5，安装目录为：/usr/program/tomcat8",-1),U={href:"http://cronolog.org/download/index.html",target:"_blank",rel:"noopener noreferrer"},R=a("li",null,[t("阿里云的 CentOS 有 epel 源所以可以直接下载："),a("code",null,"yum install cronolog"),t("，此时：2017-02，最新版本为：1.6.2-10.el6")],-1),V=a("li",null,[t("安装完后，查看下安装后的目录位置："),a("code",null,"which cronolog"),t("，我这边得到的结果是："),a("code",null,"/usr/sbin/cronolog"),t("，记下这个结果，后面有用到。")],-1),H=a("li",null,[t("修改 catalina.sh 中的内容："),a("code",null,"vim /usr/program/tomcat8/bin/catalina.sh")],-1),z=a("li",null,"找到这段代码（预计在 416 行前后）：",-1),J=s(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>
shift
touch &quot;$CATALINA_OUT&quot;
<span class="token key attr-name">if [ &quot;$1&quot;</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;-security&quot; ] ; then</span>
if [ $have_tty -eq 1 ]; then
  echo &quot;Using Security Manager&quot;
fi
shift
eval $_NOHUP &quot;\\&quot;$_RUNJAVA\\&quot;&quot; &quot;\\&quot;$LOGGING_CONFIG\\&quot;&quot; $LOGGING_MANAGER $JAVA_OPTS $CATALINA_OPTS \\
  -classpath &quot;\\&quot;$CLASSPATH\\&quot;&quot; \\
  -Djava.security.manager \\
  <span class="token key attr-name">-Djava.security.policy</span><span class="token punctuation">=</span><span class="token value attr-value">=&quot;\\&quot;$CATALINA_BASE/conf/catalina.policy\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Dcatalina.base</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_BASE\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Dcatalina.home</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_HOME\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Djava.io.tmpdir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_TMPDIR\\&quot;&quot; \\</span>
  org.apache.catalina.startup.Bootstrap &quot;$@&quot; start \\
  &gt;&gt; &quot;$CATALINA_OUT&quot; 2&gt;&amp;1 &quot;&amp;&quot;

else
eval $_NOHUP &quot;\\&quot;$_RUNJAVA\\&quot;&quot; &quot;\\&quot;$LOGGING_CONFIG\\&quot;&quot; $LOGGING_MANAGER $JAVA_OPTS $CATALINA_OPTS \\
  -classpath &quot;\\&quot;$CLASSPATH\\&quot;&quot; \\
  <span class="token key attr-name">-Dcatalina.base</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_BASE\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Dcatalina.home</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_HOME\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Djava.io.tmpdir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_TMPDIR\\&quot;&quot; \\</span>
  org.apache.catalina.startup.Bootstrap &quot;$@&quot; start \\
  &gt;&gt; &quot;$CATALINA_OUT&quot; 2&gt;&amp;1 &quot;&amp;&quot;

fi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将上面代码改为如下，其中请注意这个关键字：<code>/usr/sbin/cronolog</code>，这个是我上面提到的安装路径，你如果跟我不一样，需要自己修改该相关。</li></ul><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>
shift
<span class="token comment"># touch &quot;$CATALINA_OUT&quot;</span>
<span class="token key attr-name">if [ &quot;$1&quot;</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;-security&quot; ] ; then</span>
if [ $have_tty -eq 1 ]; then
  echo &quot;Using Security Manager&quot;
fi
shift
eval $_NOHUP &quot;\\&quot;$_RUNJAVA\\&quot;&quot; &quot;\\&quot;$LOGGING_CONFIG\\&quot;&quot; $LOGGING_MANAGER $JAVA_OPTS $CATALINA_OPTS \\
  -classpath &quot;\\&quot;$CLASSPATH\\&quot;&quot; \\
  -Djava.security.manager \\
  <span class="token key attr-name">-Djava.security.policy</span><span class="token punctuation">=</span><span class="token value attr-value">=&quot;\\&quot;$CATALINA_BASE/conf/catalina.policy\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Dcatalina.base</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_BASE\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Dcatalina.home</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_HOME\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Djava.io.tmpdir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_TMPDIR\\&quot;&quot; \\</span>
  org.apache.catalina.startup.Bootstrap &quot;$@&quot; start 2&gt;&amp;1 | /usr/sbin/cronolog &quot;$CATALINA_BASE&quot;/logs/catalina.%Y-%m-%d.out &gt;&gt; /dev/null &amp;

else
eval $_NOHUP &quot;\\&quot;$_RUNJAVA\\&quot;&quot; &quot;\\&quot;$LOGGING_CONFIG\\&quot;&quot; $LOGGING_MANAGER $JAVA_OPTS $CATALINA_OPTS \\
  -classpath &quot;\\&quot;$CLASSPATH\\&quot;&quot; \\
  <span class="token key attr-name">-Dcatalina.base</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_BASE\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Dcatalina.home</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_HOME\\&quot;&quot; \\</span>
  <span class="token key attr-name">-Djava.io.tmpdir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\\&quot;$CATALINA_TMPDIR\\&quot;&quot; \\</span>
  org.apache.catalina.startup.Bootstrap &quot;$@&quot; start 2&gt;&amp;1 | /usr/sbin/cronolog &quot;$CATALINA_BASE&quot;/logs/catalina.%Y-%m-%d.out &gt;&gt; /dev/null &amp;

fi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁止外网通过-8080-端口访问-tomcat" tabindex="-1"><a class="header-anchor" href="#禁止外网通过-8080-端口访问-tomcat" aria-hidden="true">#</a> 禁止外网通过 8080 端口访问 Tomcat</h2><ul><li>添加 iptables 规则： <ul><li><code>iptables -t filter -A INPUT -p tcp -m tcp --dport 8080 -s localhost -j ACCEPT</code></li><li><code>iptables -t filter -A INPUT -p tcp -m tcp --dport 8080 -j REJECT</code></li><li><code>service iptables save</code></li><li><code>service iptables restart</code></li></ul></li></ul><h2 id="dockerfile-构建-tomcat-镜像并部署-war-包" tabindex="-1"><a class="header-anchor" href="#dockerfile-构建-tomcat-镜像并部署-war-包" aria-hidden="true">#</a> Dockerfile 构建 Tomcat 镜像并部署 war 包</h2><ul><li>因为我自己改了 Tomcat 的几个配置文件，所以要把那几个文件和 Dockerfile 放一起进行构建。</li><li>在宿主机上创建 dockerfile 存放目录和 logs 目录：<code>mkdir -p /opt/cas-dockerfile/ /data/logs/tomcat/</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM tomcat:8.0.46-jre8
MAINTAINER GitNavi &lt;gitnavi@qq.com&gt;

RUN rm -rf /usr/local/tomcat/webapps/*

ADD server.xml /usr/local/tomcat/conf/
ADD cas.war /usr/local/tomcat/webapps/
CMD [&quot;catalina.sh&quot;, &quot;run&quot;]

EXPOSE 8081
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>须知：容器中的 Tomcat 日志我是输出在容器的目录下：<code>/data/logs/</code>，所以我挂载中会有这个挂载选项</li><li>开始构建： <ul><li><code>cd /opt/cas-dockerfile</code></li><li><code>docker build . --tag=&quot;sso/cas-tomcat8:v1.0.9&quot;</code></li><li><code>docker run -d -p 8111:8081 -v /data/logs/tomcat/:/data/logs/ --name=&quot;cas-tomcat-1.0.9&quot; sso/cas-tomcat8:v1.0.9</code></li><li>查看启动后容器列表：<code>docker ps</code></li><li>进入 tomcat 容器终端查看一些情况：<code>docker exec -it 57a682478233 /bin/bash</code></li><li>jar 应用的日志是输出在容器的 /opt 目录下，因为我们上面用了挂载，所在在我们宿主机的 /usr/local/logs 目录下可以看到输出的日志</li></ul></li><li>CentOS 7 防火墙开放端口： <ul><li><code>firewall-cmd --zone=public --add-port=8111/tcp --permanent</code></li><li><code>firewall-cmd --reload</code></li></ul></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ul><li>Tomcat 历史版本下载地址整理（不间断更新）： <ul><li><strong>Tomcat 9.0.0.M4</strong>：<code>wget http://mirror.bit.edu.cn/apache/tomcat/tomcat-9/v9.0.0.M4/bin/apache-tomcat-9.0.0.M4.tar.gz</code></li><li><strong>Tomcat 8.0.32</strong>：<code>wget http://mirror.bit.edu.cn/apache/tomcat/tomcat-8/v8.0.32/bin/apache-tomcat-8.0.32.tar.gz</code></li><li><strong>Tomcat 7.0.68</strong>：<code>wget http://apache.fayea.com/tomcat/tomcat-7/v7.0.68/bin/apache-tomcat-7.0.68.tar.gz</code></li><li><strong>Tomcat 6.0.45</strong>：<code>wget http://mirrors.cnnic.cn/apache/tomcat/tomcat-6/v6.0.45/bin/apache-tomcat-6.0.45.tar.gz</code></li></ul></li></ul><h2 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h2><h4 id="log4j2-输出的时间与北京时间相差-8-小时" tabindex="-1"><a class="header-anchor" href="#log4j2-输出的时间与北京时间相差-8-小时" aria-hidden="true">#</a> log4j2 输出的时间与北京时间相差 8 小时</h4><ul><li>原因是系统时区不对。</li><li>设置时区：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>timedatectl set-timezone Asia/Shanghai
timedatectl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,16),B={href:"http://www.jikexueyuan.com/course/2064_3.html?ss=1",target:"_blank",rel:"noopener noreferrer"},F={href:"http://www.wellho.net/mouth/2163_CATALINA-OPTS-v-JAVA-OPTS-What-is-the-difference-.html",target:"_blank",rel:"noopener noreferrer"},W={href:"http://blog.csdn.net/sunlovefly2012/article/details/47395165",target:"_blank",rel:"noopener noreferrer"},K={href:"http://blog.csdn.net/lifetragedy/article/details/7708724",target:"_blank",rel:"noopener noreferrer"},Q={href:"http://ihuangweiwei.iteye.com/blog/1233941",target:"_blank",rel:"noopener noreferrer"},Y={href:"http://www.cnblogs.com/ggjucheng/archive/2013/04/16/3024731.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://tomcat.apache.org/tomcat-8.0-doc/config/http.html#Connector_Comparison",target:"_blank",rel:"noopener noreferrer"},aa={href:"http://www.apelearn.com/study_v2/chapter23.html",target:"_blank",rel:"noopener noreferrer"},ta={href:"http://blog.csdn.net/hanzheng260561728/article/details/51236131",target:"_blank",rel:"noopener noreferrer"},na={href:"http://blog.csdn.net/attagain/article/details/38639007",target:"_blank",rel:"noopener noreferrer"};function ea(sa,oa){const e=o("ExternalLinkIcon"),l=o("RouterLink");return c(),u("div",null,[d,m,a("ul",null,[a("li",null,[t("Tomcat 8 安装 "),a("ul",null,[a("li",null,[t("官网："),a("a",v,[t("http://tomcat.apache.org/"),n(e)])]),a("li",null,[t("Tomcat 8 官网下载："),a("a",h,[t("http://tomcat.apache.org/download-80.cgi"),n(e)])]),g])]),q]),k,a("ul",null,[b,a("li",null,[t("启动tomcat，访问该地址，下面要讲解的一些配置信息，在该文档下都有说明的： "),a("ul",null,[a("li",null,[t("文档："),a("a",_,[t("http://127.0.0.1:8080/docs/config"),n(e)])]),a("li",null,[t("你也可以直接看网络版本： "),a("ul",null,[a("li",null,[t("Tomcat 6 文档："),a("a",A,[t("https://tomcat.apache.org/tomcat-6.0-doc/config"),n(e)])]),a("li",null,[t("Tomcat 7 文档："),a("a",T,[t("https://tomcat.apache.org/tomcat-7.0-doc/config/"),n(e)])]),a("li",null,[t("Tomcat 8 文档："),a("a",f,[t("https://tomcat.apache.org/tomcat-8.0-doc/config/"),n(e)])])])])])]),x,N]),C,a("ul",null,[a("li",null,[t("模型资料来源："),a("a",w,[t("http://xmuzyq.iteye.com/blog/599750"),n(e)])]),a("li",null,[t("配比资料："),a("a",I,[t("http://www.jianshu.com/p/d45e12241af4"),n(e)])]),a("li",null,[t("JDK8 配比："),a("a",S,[t("关键系统的JVM参数推荐(2018仲夏版)"),n(e)])]),P,a("li",null,[t("Java 的内存模型看："),n(l,{to:"/linux-tutor/server/Java-bin.html"},{default:r(()=>[t("这篇文章")]),_:1})]),L]),$,a("ul",null,[y,a("li",null,[t("官网文档："),a("a",O,[t("https://tomcat.apache.org/tomcat-8.0-doc/manager-howto.html"),n(e)])]),M,D]),E,a("ul",null,[a("li",null,[t("浏览器访问："),a("a",X,[t("http://120.78.72.28:8080/manager/status"),n(e)])])]),G,a("ul",null,[j,a("li",null,[t("网络上的官网地址现在打不开："),a("a",U,[t("http://cronolog.org/download/index.html"),n(e)])]),R,V,H,z]),J,a("ul",null,[a("li",null,[a("a",B,[t("http://www.jikexueyuan.com/course/2064_3.html?ss=1"),n(e)])]),a("li",null,[a("a",F,[t("http://www.wellho.net/mouth/2163_CATALINA-OPTS-v-JAVA-OPTS-What-is-the-difference-.html"),n(e)])]),a("li",null,[a("a",W,[t("http://blog.csdn.net/sunlovefly2012/article/details/47395165"),n(e)])]),a("li",null,[a("a",K,[t("http://blog.csdn.net/lifetragedy/article/details/7708724"),n(e)])]),a("li",null,[a("a",Q,[t("http://ihuangweiwei.iteye.com/blog/1233941"),n(e)])]),a("li",null,[a("a",Y,[t("http://www.cnblogs.com/ggjucheng/archive/2013/04/16/3024731.html"),n(e)])]),a("li",null,[a("a",Z,[t("https://tomcat.apache.org/tomcat-8.0-doc/config/http.html#Connector_Comparison"),n(e)])]),a("li",null,[a("a",aa,[t("http://www.apelearn.com/study_v2/chapter23.html"),n(e)])]),a("li",null,[a("a",ta,[t("http://blog.csdn.net/hanzheng260561728/article/details/51236131"),n(e)])]),a("li",null,[a("a",na,[t("http://blog.csdn.net/attagain/article/details/38639007"),n(e)])])])])}const ia=i(p,[["render",ea],["__file","Tomcat-Install-And-Settings.html.vue"]]);export{ia as default};