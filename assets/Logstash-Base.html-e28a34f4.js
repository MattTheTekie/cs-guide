import{_ as c,r as o,o as u,c as d,d as n,e as s,b as a,w as l,a as e}from"./app-3d979d38.js";const p={},r=n("h1",{id:"logstash-知识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#logstash-知识","aria-hidden":"true"},"#"),s(" Logstash 知识")],-1),v=n("h2",{id:"基础知识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础知识","aria-hidden":"true"},"#"),s(" 基础知识")],-1),g=n("li",null,"基于 ruby 写的",-1),k={href:"https://www.elastic.co/guide/en/logstash/5.2/first-event.html",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"如果是通过网络来收集，并不需要所有机子都装，但是如果是要通过读取文件来收集，那文件所在的那个机子就的安装",-1),b={href:"https://www.elastic.co/guide/en/logstash/5.2/configuration-file-structure.html",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"logstash-5-5-0-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#logstash-5-5-0-安装","aria-hidden":"true"},"#"),s(" logstash 5.5.0 安装")],-1),q=n("li",null,[s("安装："),n("code",null,"yum install -y logstash")],-1),_=e(`<h3 id="logstash-2-4-1-安装" tabindex="-1"><a class="header-anchor" href="#logstash-2-4-1-安装" aria-hidden="true">#</a> logstash 2.4.1 安装</h3><ul><li>logstash 基于 ruby，也需要 JDK 环境</li><li>如果是通过网络来收集，并不需要所有机子都装，但是如果是要通过读取文件来收集，那文件所在的那个机子就的安装 logstash</li><li>安装： <ul><li>切换到存放目录：<code>cd /usr/program/elk</code></li><li>解压：<code>tar zxvf logstash-2.4.1.tar.gz</code></li></ul></li><li>切换到 root 用户下，启动 logstash</li><li>带控制台的启动（比较慢）进行最简单的 hello world 测试：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -e &#39;input { stdin { } } output { stdout { codec =&gt; rubydebug} }&#39;</code><ul><li>启动后显示如下内容：</li></ul></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>Settings: Default pipeline workers: 1
Pipeline main started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后此时的光标是为可输入状态，我们输入：hello world 回车，然后应该会得到这样的结果：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
       <span class="token string">&quot;message&quot;</span> =&gt; <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;@version&quot;</span> =&gt; <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@timestamp&quot;</span> =&gt; <span class="token string">&quot;2017-03-14T06:56:44.690Z&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;host&quot;</span> =&gt; <span class="token string">&quot;youmeeklocalhost&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>现在进一步加深，把控制台输入的内容放在 elasticsearch 索引中</li><li>记得先切换到 elasticsearch 用户下，然后先启动 elasticsearch。先确保 elasticsearch 集群是启动的。</li><li>带控制台的启动（比较慢）：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -e &#39;input { stdin { } } output { elasticsearch { hosts =&gt; [&quot;192.168.1.127:9200&quot;] } }&#39;</code><ul><li>启动后显示如下内容：</li></ul></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>Settings: Default pipeline workers: 1
Pipeline main started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后此时的光标是为可输入状态，我们输入任意内容回车，然后访问 elasticsearch 的 head 插件控制台：<code>http://192.168.1.127:9200/_plugin/head/</code></li><li>然后你可以看到有一个类似这样的名称格式的索引：<code>logstash-2017.03.14</code>，这一步必须有，等下 kibana 会用到这个索引</li></ul><h2 id="配置文件中的-filter-讲解" tabindex="-1"><a class="header-anchor" href="#配置文件中的-filter-讲解" aria-hidden="true">#</a> 配置文件中的 Filter 讲解</h2>`,9),f=n("li",null,"grok 比较耗 CPU 能少用就尽量少用",-1),x={href:"https://www.elastic.co/guide/en/logstash/5.2/plugins-filters-grok.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/logstash-plugins/logstash-patterns-core/tree/master/patterns",target:"_blank",rel:"noopener noreferrer"},y=n("ul",null,[n("li",null,[s("内置的变量格式为，eg："),n("code",null,"%{IP}")]),n("li",null,[s("而这个格式 "),n("code",null,"%{IP:client}"),s(" 表示把日志中匹配 IP 格式的内容存储到 ES 中的 client 域（字段）中，这样 ES 界面就有单独字段查看，方便。")])],-1),E=n("li",null,[s("安装完 logstash 本地也是有这些文件的，路径："),n("code",null,"/usr/program/elk/logstash-2.4.1/vendor/bundle/jruby/1.9/gems/logstash-patterns-core-2.0.5/patterns")],-1),L=n("li",null,"官网简单的日志讲解：",-1),R=n("li",null,[n("strong",null,"新建"),s(" 配置文件："),n("code",null,"vim /usr/program/elk/logstash-2.4.1/config/filter-grok-test.conf"),s("：")],-1),M=e(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">stdin</span></span> <span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">filter</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">grok</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">match</span> =&gt;</span> <span class="token punctuation">{</span> &quot;message&quot; =&gt; &quot;%<span class="token punctuation">{</span>IP:client<span class="token punctuation">}</span> %<span class="token punctuation">{</span>WORD:method<span class="token punctuation">}</span> %<span class="token punctuation">{</span>URIPATHPARAM:request<span class="token punctuation">}</span> %<span class="token punctuation">{</span>NUMBER:bytes<span class="token punctuation">}</span> %<span class="token punctuation">{</span>NUMBER:duration<span class="token punctuation">}</span>&quot; <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span> 
		hosts =&gt; [&quot;192.168.1.127:9200&quot;]
		index =&gt; &quot;filter-grok-test&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/filter-grok-test.conf</code><ul><li>然后我们在交互界面中分别输入下面内容： <ul><li><code>55.3.244.1 GET /index.html 15824 0.043</code></li><li><code>125.4.234.22 GET /GitNavi.html 124 0.13</code></li></ul></li><li>然后你开始关注 elasticsearch 集群的索引变化。</li></ul></li></ul><h2 id="配置文件中的-multiline-多行内容收集插件讲解" tabindex="-1"><a class="header-anchor" href="#配置文件中的-multiline-多行内容收集插件讲解" aria-hidden="true">#</a> 配置文件中的 multiline 多行内容收集插件讲解</h2><ul><li>配置的格式如下：</li><li>在 file 中的：<code>codec =&gt; multiline</code></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">file</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">path</span> =&gt; [<span class="token string">&quot;/usr/program/tomcat8/logs/logbackOutFile.log.*.log&quot;</span>]
		type =&gt; <span class="token string">&quot;tomcat-log&quot;</span>
		start_position =&gt; <span class="token string">&quot;beginning&quot;</span>
		codec =&gt; multiline</span> <span class="token punctuation">{</span>
		    pattern =&gt; &quot;^\\[&quot;
		    negate =&gt; true
		    what =&gt; &quot;previous&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;tomcat-log&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span> 
			hosts =&gt; [&quot;192.168.1.127:9200&quot;]
			index =&gt; &quot;tomcat-log-%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="测试模式" tabindex="-1"><a class="header-anchor" href="#测试模式" aria-hidden="true">#</a> 测试模式</h3><h4 id="自己写正则表达式-匹配后输出到控制台先看下" tabindex="-1"><a class="header-anchor" href="#自己写正则表达式-匹配后输出到控制台先看下" aria-hidden="true">#</a> 自己写正则表达式，匹配后输出到控制台先看下：</h4><ul><li>新建目录（如果存在就不用）：<code>mkdir -p /usr/program/elk/logstash-2.4.1/config</code></li><li><strong>新建</strong> 配置文件：<code>vim /usr/program/elk/logstash-2.4.1/config/regexp-test.conf</code>：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">stdin</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">codec</span> =&gt; multiline</span> <span class="token punctuation">{</span>
			pattern =&gt; &quot;^\\[&quot;
			negate =&gt; true
			what =&gt; &quot;previous&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">stdout</span></span> <span class="token punctuation">{</span> 
		codec =&gt; &quot;rubydebug&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/regexp-test.conf</code></li></ul><h4 id="读取文件-输出到控制台先看下" tabindex="-1"><a class="header-anchor" href="#读取文件-输出到控制台先看下" aria-hidden="true">#</a> 读取文件，输出到控制台先看下：</h4><ul><li>新建目录（如果存在就不用）：<code>mkdir -p /usr/program/elk/logstash-2.4.1/config</code></li><li><strong>新建</strong> 配置文件：<code>vim /usr/program/elk/logstash-2.4.1/config/file-test.conf</code>：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">file</span></span> <span class="token punctuation">{</span>
		path =&gt; [&quot;/var/log/nginx/access.log&quot;]
		type =&gt; &quot;nginx-access-log&quot;
		start_position =&gt; &quot;beginning&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">stdout</span></span> <span class="token punctuation">{</span> 
		codec =&gt; &quot;rubydebug&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/regexp-test.conf</code></li></ul><h3 id="nginx-日志收集" tabindex="-1"><a class="header-anchor" href="#nginx-日志收集" aria-hidden="true">#</a> Nginx 日志收集</h3>`,16),j=n("li",null,[s("机子：192.168.1.121 "),n("ul",null,[n("li",null,[s("Nginx 日志位置： "),n("ul",null,[n("li",null,[n("code",null,"/var/log/nginx/access.log")]),n("li",null,[n("code",null,"/var/log/nginx/error.log")])])])])],-1),S=n("li",null,[s("新建目录（如果存在就不用）："),n("code",null,"mkdir -p /usr/program/elk/logstash-2.4.1/config")],-1),N=n("li",null,[n("strong",null,"新建"),s(" 配置文件："),n("code",null,"vim /usr/program/elk/logstash-2.4.1/config/nginx.conf"),s("：")],-1),B=e(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">file</span></span> <span class="token punctuation">{</span>
		path =&gt; [&quot;/var/log/nginx/access.log&quot;]
		type =&gt; &quot;nginx-access-log&quot;
		start_position =&gt; &quot;beginning&quot;
	<span class="token punctuation">}</span>
	
	<span class="token directive"><span class="token keyword">file</span></span> <span class="token punctuation">{</span>
		path =&gt; [&quot;/var/log/nginx/error.log&quot;]
		type =&gt; &quot;nginx-error-log&quot;
		start_position =&gt; &quot;beginning&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;nginx-access-log&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span> 
			hosts =&gt; [&quot;192.168.1.127:9200&quot;]
			index =&gt; &quot;nginx-access-log&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;nginx-error-log&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span> 
			hosts =&gt; [&quot;192.168.1.127:9200&quot;]
			index =&gt; &quot;nginx-error-log&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/nginx.conf</code></li><li>然后你开始访问 nginx，再关注 elasticsearch 集群的索引变化，如果有新增索引那就表示可以了。</li></ul><h4 id="进一步优化-把-nginx-的日志输出格式改为-json" tabindex="-1"><a class="header-anchor" href="#进一步优化-把-nginx-的日志输出格式改为-json" aria-hidden="true">#</a> 进一步优化：把 nginx 的日志输出格式改为 json</h4><ul><li>配置 nginx 访问日志的输出格式：<code>vim /usr/local/nginx/conf/nginx.conf</code></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> root</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">log_format</span> json <span class="token string">&#39;{&quot;@timestamp&quot;:&quot;<span class="token variable">$time_iso8601</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;host&quot;:&quot;<span class="token variable">$server_addr</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;clientip&quot;:&quot;<span class="token variable">$remote_addr</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;size&quot;:<span class="token variable">$body_bytes_sent,</span>&#39;</span>
                     <span class="token string">&#39;&quot;responsetime&quot;:<span class="token variable">$request_time,</span>&#39;</span>
                     <span class="token string">&#39;&quot;upstreamtime&quot;:&quot;<span class="token variable">$upstream_response_time</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;upstreamhost&quot;:&quot;<span class="token variable">$upstream_addr</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;http_host&quot;:&quot;<span class="token variable">$host</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;url&quot;:&quot;<span class="token variable">$uri</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;xff&quot;:&quot;<span class="token variable">$http_x_forwarded_for</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;referer&quot;:&quot;<span class="token variable">$http_referer</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;agent&quot;:&quot;<span class="token variable">$http_user_agent</span>&quot;,&#39;</span>
                     <span class="token string">&#39;&quot;status&quot;:&quot;<span class="token variable">$status</span>&quot;}&#39;</span></span><span class="token punctuation">;</span>
	<span class="token comment">#全局日志</span>
    <span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/access.log</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
		
		<span class="token comment"># 针对服务的日志输出</span>
		<span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/access-json.log json</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改 Logstash 的收集</li><li><strong>编辑</strong> 配置文件：<code>vim /usr/program/elk/logstash-2.4.1/config/nginx.conf</code>：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">file</span></span> <span class="token punctuation">{</span>
		path =&gt; [&quot;/var/log/nginx/access-json.log&quot;]
		codec =&gt; json
		type =&gt; &quot;nginx-access-json-log&quot;
		start_position =&gt; &quot;beginning&quot;
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;nginx-access-json-log&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span> 
			hosts =&gt; [&quot;192.168.1.127:9200&quot;]
			index =&gt; &quot;nginx-access-json-log&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/nginx.conf</code></li><li>然后你开始访问 nginx，再关注 elasticsearch 集群的索引变化，如果有新增索引那就表示可以了。</li></ul><h3 id="tomcat-日志收集" tabindex="-1"><a class="header-anchor" href="#tomcat-日志收集" aria-hidden="true">#</a> Tomcat 日志收集</h3>`,9),U=n("li",null,[s("机子：192.168.1.121 "),n("ul",null,[n("li",null,[s("Tomcat 日志位置："),n("code",null,"/usr/program/tomcat8/logs")])])],-1),I=n("li",null,[s("新建目录（如果存在就不用）："),n("code",null,"mkdir -p /usr/program/elk/logstash-2.4.1/config")],-1),Y=n("li",null,[n("strong",null,"新建"),s(" 配置文件："),n("code",null,"vim /usr/program/elk/logstash-2.4.1/config/tomcat.conf"),s("：")],-1),P=e(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">file</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">path</span> =&gt; [<span class="token string">&quot;/usr/program/tomcat8/logs/logbackOutFile.log.*.log&quot;</span>]
		type =&gt; <span class="token string">&quot;tomcat-log&quot;</span>
		start_position =&gt; <span class="token string">&quot;beginning&quot;</span>
		codec =&gt; multiline</span> <span class="token punctuation">{</span>
		    pattern =&gt; &quot;^\\[&quot;
		    negate =&gt; true
		    what =&gt; &quot;previous&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;tomcat-log&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span> 
			hosts =&gt; [&quot;192.168.1.127:9200&quot;]
			index =&gt; &quot;tomcat-log-%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/tomcat.conf</code></li><li>然后你开始访问 nginx，再关注 elasticsearch 集群的索引变化，如果有新增索引那就表示可以了。</li></ul><h3 id="mysql-慢-sql-日志收集" tabindex="-1"><a class="header-anchor" href="#mysql-慢-sql-日志收集" aria-hidden="true">#</a> MySQL 慢 SQL 日志收集</h3>`,3),$=n("li",null,"其他的细节都跟上面一样不多说了，配置文件这里需要用到 grok 进行正则的拆分",-1),T=n("code",null,"grok mysql slow",-1),Q={href:"http://soft.dog/2016/01/30/logstash-mysql-slow-log/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://kibana.logstash.es/content/logstash/examples/mysql-slow.html",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leejo.github.io/2013/11/21/parsing_mysql_slow_query_log_with_logstash/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.phase2technology.com/blog/adding-mysql-slow-query-logs-to-logstash/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://discuss.elastic.co/t/grok-filter-for-mysql-slow-logs-produces-grokparsefailure-but-passes-tests/55799",target:"_blank",rel:"noopener noreferrer"},V=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;(?m)^#\\s+User@Host:\\s+%{USER:user}\\[[^\\]]+\\]\\s+@\\s+%{USER:clienthost}\\s+\\[(?:%{IP:clientip})?\\]\\s+Id:\\s+%{NUMBER:id:int}\\n#\\s+Schema:\\s+%{USER:schema}\\s+Last_errno:\\s+%{NUMBER:lasterrorno:int}\\s+Killed:\\s+%{NUMBER:killedno:int}\\n#\\s+Query_time:\\s+%{NUMBER:query_time:float}\\s+Lock_time:\\s+%{NUMBER:lock_time:float}\\s+Rows_sent:\\s+%{NUMBER:rows_sent:int}\\s+Rows_examined:\\s+%{NUMBER:rows_examined:int}\\s+Rows_affected:\\s+%{NUMBER:rows_affected:int}\\n#\\s+Bytes_sent:\\s+%{NUMBER:bytes_sent:int}\\n\\s*(?:use\\s+%{USER:usedatabase};\\s*\\n)?SET\\s+timestamp=%{NUMBER:timestamp};\\n\\s*(?&lt;query&gt;(?&lt;action&gt;\\w+)\\b.*)\\s*(?:\\n#\\s+Time)?.*$&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="logstash-不直接写到-es-先写到-redis-再写到-es" tabindex="-1"><a class="header-anchor" href="#logstash-不直接写到-es-先写到-redis-再写到-es" aria-hidden="true">#</a> Logstash 不直接写到 ES 先写到 Redis 再写到 ES</h3>`,2),z={href:"https://www.elastic.co/guide/en/logstash/2.4/plugins-inputs-redis.html",target:"_blank",rel:"noopener noreferrer"},C=e(`<h4 id="一台-logstash-把数据写到-redis" tabindex="-1"><a class="header-anchor" href="#一台-logstash-把数据写到-redis" aria-hidden="true">#</a> 一台 Logstash 把数据写到 Redis</h4><ul><li>Redis 机器 IP：192.168.1.125</li><li>Logstash 机器 IP：192.168.1.121</li><li>Logstash 机器 <strong>新建</strong> 配置文件：<code>vim /usr/program/elk/logstash-2.4.1/config/redis-test.conf</code>：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">stdin</span></span> <span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">redis</span></span> <span class="token punctuation">{</span>
		host =&gt; &quot;192.168.1.125&quot;
		port =&gt; &quot;6379&quot;
		db =&gt; &quot;2&quot;
		data_type =&gt; &quot;list&quot;
		key =&gt; &quot;gitnavi-logstash-info&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/redis-test.conf</code><ul><li>然后我们在交互界面中分别输入下面内容：</li><li><code>hello</code> 回车</li><li><code>world</code> 回车</li></ul></li><li>进入 Redis 机器上的数据： <ul><li>进入 redis 交互端：<code>redis-cli</code></li><li>查询 db2：<code>select 2</code></li><li>查询 db2 下的所有内容：<code>keys *</code>，可以看到有一个：&quot;gitnavi-logstash-info&quot;</li><li>查询该 list 类型的数据：<code>LRANGE gitnavi-logstash-info 0 1</code>，正常可以得到这样的数据</li></ul></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token number">1</span>) <span class="token string">&quot;{\\&quot;message\\&quot;:\\&quot;hello\\&quot;,\\&quot;@version\\&quot;:\\&quot;1\\&quot;,\\&quot;@timestamp\\&quot;:\\&quot;2017-03-15T15:23:35.064Z\\&quot;,\\&quot;host\\&quot;:\\&quot;youmeekhost\\&quot;}&quot;</span>
<span class="token number">2</span>) <span class="token string">&quot;{\\&quot;message\\&quot;:\\&quot;world\\&quot;,\\&quot;@version\\&quot;:\\&quot;1\\&quot;,\\&quot;@timestamp\\&quot;:\\&quot;2017-03-15T15:23:37.245Z\\&quot;,\\&quot;host\\&quot;:\\&quot;youmeekhost\\&quot;}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一台-logstash-把数据从-redis-读取出来写到-es" tabindex="-1"><a class="header-anchor" href="#一台-logstash-把数据从-redis-读取出来写到-es" aria-hidden="true">#</a> 一台 Logstash 把数据从 Redis 读取出来写到 ES</h4><ul><li>Redis 机器 IP：192.168.1.125</li><li>Logstash 机器 IP：192.168.1.125</li><li>Logstash 机器 <strong>新建</strong> 配置文件：<code>vim /usr/program/elk/logstash-2.4.1/config/redis-test.conf</code>：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">redis</span></span> <span class="token punctuation">{</span>
		type =&gt; &quot;redis-log&quot;
		host =&gt; &quot;192.168.1.125&quot;
		port =&gt; &quot;6379&quot;
		db =&gt; &quot;2&quot;
		data_type =&gt; &quot;list&quot;
		key =&gt; &quot;gitnavi-logstash-info&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;redis-log&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span>
	        hosts =&gt; [&quot;192.168.1.127:9200&quot;]
	        index =&gt; &quot;redis-log&quot;
	    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 Logstash 并加载该配置文件：<code>/usr/program/elk/logstash-2.4.1/bin/logstash -f /usr/program/elk/logstash-2.4.1/config/redis-test.conf</code></li><li>然后现在在 Logstash 机器 IP：192.168.1.121 上继续输入一些内容，看下 ES 集群是否有对应的索引创建。</li></ul><h3 id="logstash-不直接写到-es-先写到-mq-再写到-es" tabindex="-1"><a class="header-anchor" href="#logstash-不直接写到-es-先写到-mq-再写到-es" aria-hidden="true">#</a> Logstash 不直接写到 ES 先写到 MQ 再写到 ES</h3>`,10),F={href:"https://www.elastic.co/guide/en/logstash/2.4/plugins-inputs-rabbitmq.html",target:"_blank",rel:"noopener noreferrer"},O=e(`<h4 id="一台-logstash-把数据写到-rabbitmq" tabindex="-1"><a class="header-anchor" href="#一台-logstash-把数据写到-rabbitmq" aria-hidden="true">#</a> 一台 Logstash 把数据写到 rabbitMQ</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">file</span></span> <span class="token punctuation">{</span>
		path =&gt; &quot;/usr/local/tomcat/logs/tomcat_json.log&quot;
		codec =&gt; &quot;json&quot;
		type =&gt; &quot;tomcat&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">rabbitmq</span></span> <span class="token punctuation">{</span> 
		host =&gt; &quot;RabbitMQ_server&quot;
		port =&gt; &quot;5672&quot;
		vhost =&gt; &quot;elk&quot;
		exchange =&gt; &quot;elk_exchange&quot;
		exchange_type =&gt; &quot;direct&quot;
		key =&gt; &quot;elk_key&quot;
		user =&gt; &quot;liang&quot;
		password =&gt; &quot;liang123&quot;
	<span class="token punctuation">}</span>
	<span class="token directive"><span class="token keyword">stdout</span></span> <span class="token punctuation">{</span> 
		codec =&gt; rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一台-logstash-把数据从-rabbitmq-读取出来写到-es-还未测试" tabindex="-1"><a class="header-anchor" href="#一台-logstash-把数据从-rabbitmq-读取出来写到-es-还未测试" aria-hidden="true">#</a> 一台 Logstash 把数据从 rabbitMQ 读取出来写到 ES （还未测试）</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">input</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">rabbitmq</span></span> <span class="token punctuation">{</span>
		host =&gt; &quot;127.0.0.1&quot;
		subscription_retry_interval_seconds =&gt; &quot;5&quot;
		vhost =&gt; &quot;elk&quot;
		exchange =&gt; &quot;elk_exchange&quot;
		queue =&gt; &quot;elk_queue&quot;
		durable =&gt; &quot;true&quot;
		key =&gt; &quot;elk_key&quot;
		user =&gt; &quot;liang&quot;
		password =&gt; &quot;liang123&quot;
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">output</span></span> <span class="token punctuation">{</span>

	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;nginx&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span>
			hosts =&gt; &quot;192.168.1.127:9200&quot;
			user =&gt; &quot;logstash&quot;
			password =&gt; &quot;123456&quot;
			index =&gt; &quot;nginx-%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token directive"><span class="token keyword">if</span> [type] == <span class="token string">&quot;tomcat&quot;</span></span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">elasticsearch</span></span> <span class="token punctuation">{</span>
			hosts =&gt; &quot;192.168.1.127:9200&quot;
			user =&gt; &quot;logstash&quot;
			password =&gt; &quot;123456&quot;
			index =&gt; &quot;tomcat-%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token directive"><span class="token keyword">stdout</span></span> <span class="token punctuation">{</span> 
		codec =&gt; rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,5),Z={href:"https://liang178.github.io/2016/08/11/elk+rabbitmq/",target:"_blank",rel:"noopener noreferrer"};function H(J,W){const t=o("ExternalLinkIcon"),i=o("RouterLink");return u(),d("div",null,[r,v,n("ul",null,[g,n("li",null,[s("官网文档："),n("a",k,[s("https://www.elastic.co/guide/en/logstash/5.2/first-event.html"),a(t)])]),m,n("li",null,[s("配置文件的写法格式："),n("a",b,[s("https://www.elastic.co/guide/en/logstash/5.2/configuration-file-structure.html"),a(t)])])]),h,n("ul",null,[n("li",null,[s("假设你已经看了 Elasticsearch 专题文，并且设置了仓库地址："),a(i,{to:"/linux-tutor/server/Elasticsearch-Base.html"},{default:l(()=>[s("Elasticsearch 相关知识")]),_:1})]),q]),_,n("ul",null,[f,n("li",null,[s("主要讲解 grok 这个插件，官网资料："),n("a",x,[s("https://www.elastic.co/guide/en/logstash/5.2/plugins-filters-grok.html"),a(t)])]),n("li",null,[s("官网给我们整理的 120 个正则表达式变量："),n("a",w,[s("https://github.com/logstash-plugins/logstash-patterns-core/tree/master/patterns"),a(t)]),y]),E,L,R]),M,n("ul",null,[j,n("li",null,[s("安装 Logstash 过程请看："),a(i,{to:"/linux-tutor/server/ELK-Install-And-Settings.html"},{default:l(()=>[s("ELK 日志收集系统安装和配置")]),_:1})]),S,N]),B,n("ul",null,[U,n("li",null,[s("安装 Logstash 过程请看："),a(i,{to:"/linux-tutor/server/ELK-Install-And-Settings.html"},{default:l(()=>[s("ELK 日志收集系统安装和配置")]),_:1})]),I,Y]),P,n("ul",null,[$,n("li",null,[s("这里有资料，我觉得别人已经说得很好了（Google 关键字："),T,s("）： "),n("ul",null,[n("li",null,[n("a",Q,[s("http://soft.dog/2016/01/30/logstash-mysql-slow-log/"),a(t)])]),n("li",null,[n("a",A,[s("https://kibana.logstash.es/content/logstash/examples/mysql-slow.html"),a(t)])]),n("li",null,[n("a",K,[s("https://leejo.github.io/2013/11/21/parsing_mysql_slow_query_log_with_logstash/"),a(t)])]),n("li",null,[n("a",G,[s("https://www.phase2technology.com/blog/adding-mysql-slow-query-logs-to-logstash/"),a(t)])]),n("li",null,[n("a",D,[s("https://discuss.elastic.co/t/grok-filter-for-mysql-slow-logs-produces-grokparsefailure-but-passes-tests/55799"),a(t)])])])])]),V,n("ul",null,[n("li",null,[s("官网 Redis 插件使用说明："),n("a",z,[s("https://www.elastic.co/guide/en/logstash/2.4/plugins-inputs-redis.html"),a(t)])])]),C,n("ul",null,[n("li",null,[s("官网 RabbitMQ 插件使用说明："),n("a",F,[s("https://www.elastic.co/guide/en/logstash/2.4/plugins-inputs-rabbitmq.html"),a(t)])])]),O,n("ul",null,[n("li",null,[n("a",Z,[s("https://liang178.github.io/2016/08/11/elk+rabbitmq/"),a(t)])])])])}const nn=c(p,[["render",H],["__file","Logstash-Base.html.vue"]]);export{nn as default};
