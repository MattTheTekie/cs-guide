import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const i={},l=e(`<h1 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> nginx配置</h1><h2 id="nginx命令行" tabindex="-1"><a class="header-anchor" href="#nginx命令行" aria-hidden="true">#</a> nginx命令行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


<span class="token comment">#nginx执行程序路径需要修改</span>
<span class="token assign-left variable">nginxd</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx

<span class="token comment"># nginx配置文件路径需要修改</span>
<span class="token assign-left variable">nginx_config</span><span class="token operator">=</span>/usr/local/nginx/conf/nginx.conf

<span class="token comment"># pid 地址需要修改</span>
<span class="token assign-left variable">nginx_pid</span><span class="token operator">=</span>/var/local/nginx/nginx.pid


<span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">prog</span><span class="token operator">=</span><span class="token string">&quot;nginx&quot;</span>

<span class="token comment"># Source function library.</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions
<span class="token comment"># Source networking configuration.</span>
<span class="token builtin class-name">.</span> /etc/sysconfig/network
<span class="token comment"># Check that networking is up.</span>
<span class="token punctuation">[</span> <span class="token variable">\${NETWORKING}</span> <span class="token operator">=</span> <span class="token string">&quot;no&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$nginxd</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># Start nginx daemons functions.</span>
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$nginx_pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;nginx already running....&quot;</span>
   <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Starting <span class="token variable">$prog</span>: &quot;</span>
daemon <span class="token variable">$nginxd</span> <span class="token parameter variable">-c</span> <span class="token variable">\${nginx_config}</span>
<span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
<span class="token builtin class-name">echo</span>
<span class="token punctuation">[</span> <span class="token variable">$RETVAL</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> /var/lock/subsys/nginx
<span class="token builtin class-name">return</span> <span class="token variable">$RETVAL</span>
<span class="token punctuation">}</span>

<span class="token comment"># Stop nginx daemons functions.</span>
<span class="token comment"># pid 地址需要修改</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Stopping <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$nginxd</span>
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$RETVAL</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> /var/lock/subsys/nginx /var/local/nginx/nginx.pid
<span class="token punctuation">}</span>

<span class="token comment"># reload nginx service functions.</span>
<span class="token function-name function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Reloading <span class="token variable">$prog</span>: &quot;</span>
    <span class="token comment">#kill -HUP \`cat \${nginx_pid}\`</span>
    killproc <span class="token variable">$nginxd</span> <span class="token parameter variable">-HUP</span>
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>

<span class="token comment"># See how we were called.</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        stop
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    reload<span class="token punctuation">)</span>
        reload
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token punctuation">)</span>
        stop
        start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span>
        status <span class="token variable">$prog</span>
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>

    <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$prog</span> {start|stop|restart|reload|status|help}&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>

<span class="token keyword">esac</span>
<span class="token builtin class-name">exit</span> <span class="token variable">$RETVAL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测nginix" tabindex="-1"><a class="header-anchor" href="#检测nginix" aria-hidden="true">#</a> 检测nginix</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 如果进程中没有nginx则将keepalived进程kill掉</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>      <span class="token comment">## 查看是否有 nginx进程 把值赋给变量A </span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>                    <span class="token comment">## 如果没有进程值得为 零</span>
       <span class="token function">service</span> keepalived stop          <span class="token comment">## 则结束 keepalived 进程</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> nginx 配置</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>user root;
worker_processes  auto;
pid /run/nginx.pid;

events {
    use epoll;
    multi_accept on;
    worker_connections  1024;
}

http {
    # 必须加这两个，不然 CSS 无法正常加载
    include mime.types;
    default_type application/octet-stream;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot; &quot;$request_time&quot;&#39;;

    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log;

    gzip on;
    gzip_buffers 8 16k;
    gzip_min_length 512;
    gzip_disable &quot;MSIE [1-6]\\.(?!.*SV1)&quot;;
    gzip_http_version 1.1;
    gzip_types   text/plain text/css application/javascript application/x-javascript application/json application/xml;

    server {

        listen       8001;
        server_name  localhost 127.0.0.1 139.159.190.24 platform.gitnavi.com;

        location / {
            root /root/.jenkins/workspace/nestle-platform-front-test/dist;
            index index.html index.htm;
            try_files $uri /index.html;
        }

        ## 二级目录方式，记得 package.json 添加：&quot;homepage&quot;: &quot;cdk8s-markdown&quot;,
        location ^~ /cdk8s-markdown {
            root    /root/.jenkins/workspace;
            index   index.html;
            try_files $uri /cdk8s-markdown/index.html;
        }

        location ^~ /platform/ {
            proxy_pass http://127.0.0.1:28081;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        location ~ .*\\.(js|css)?$ {
            root   /root/.jenkins/workspace/nestle-platform-front-test/dist;
        }

        location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|ico|woff|woff2|ttf|eot|txt|svg)$ {
            root   /root/.jenkins/workspace/nestle-platform-front-test/dist;
        }

        error_page 404 /404.html;
           location = /usr/share/nginx/html/40x.html {
        }

        error_page 500 502 503 504 /50x.html;
           location = /usr/share/nginx/html/50x.html {
        }

    }

    server {

        listen       8002;
        server_name  localhost 127.0.0.1 139.159.190.24 store.gitnavi.com;

        location / {
            root /root/.jenkins/workspace/nestle-store-front-test/dist;
            index index.html index.htm;
            try_files $uri /index.html;
        }

        location ^~ /store/ {
            proxy_pass http://127.0.0.1:28082;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        location ~ .*\\.(js|css)?$ {
            root   /root/.jenkins/workspace/nestle-store-front-test/dist;
        }

        location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|ico|woff|woff2|ttf|eot|txt|svg)$ {
            root   /root/.jenkins/workspace/nestle-store-front-test/dist;
        }

        error_page 404 /404.html;
           location = /usr/share/nginx/html/40x.html {
        }

        error_page 500 502 503 504 /50x.html;
           location = /usr/share/nginx/html/50x.html {
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function c(o,r){return s(),a("div",null,t)}const p=n(i,[["render",c],["__file","nginx.html.vue"]]);export{p as default};
