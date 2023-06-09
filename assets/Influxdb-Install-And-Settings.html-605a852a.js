import{_ as l,r as i,o as r,c as t,d as a,e as n,b as e,a as c}from"./app-3d979d38.js";const o={},d=a("h1",{id:"influxdb-安装和配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#influxdb-安装和配置","aria-hidden":"true"},"#"),n(" Influxdb 安装和配置")],-1),p=a("h2",{id:"influxdb-docker-安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#influxdb-docker-安装","aria-hidden":"true"},"#"),n(" Influxdb Docker 安装")],-1),u={href:"https://docs.docker.com/samples/library/influxdb",target:"_blank",rel:"noopener noreferrer"},b=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> influxdb <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8086</span>:8086 <span class="token parameter variable">-p</span> <span class="token number">8083</span>:8083 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">INFLUXDB_HTTP_AUTH_ENABLED</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">INFLUXDB_ADMIN_ENABLED</span><span class="token operator">=</span>true <span class="token parameter variable">-e</span> <span class="token assign-left variable">INFLUXDB_ADMIN_USER</span><span class="token operator">=</span>admin <span class="token parameter variable">-e</span> <span class="token assign-left variable">INFLUXDB_ADMIN_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">INFLUXDB_DB</span><span class="token operator">=</span>mydb1 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /Users/gitnavi/docker_data/influxdb/data:/var/lib/influxdb influxdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进入终端交互：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> influxdb /bin/bash

输入：influx，开始终端交互

auth admin <span class="token number">123456</span>
show databases<span class="token punctuation">;</span>

use springboot
show measurements

show series from <span class="token string">&quot;jvm_buffer_total_capacity&quot;</span>

<span class="token keyword">select</span> * from <span class="token string">&quot;jvm_buffer_total_capacity&quot;</span>


如果你要再额外创建数据库：
create database demo

如果你要再创建用户：
create user <span class="token string">&quot;myuser&quot;</span> with password <span class="token string">&#39;123456&#39;</span> with all privileges
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他资料" tabindex="-1"><a class="header-anchor" href="#其他资料" aria-hidden="true">#</a> 其他资料</h2>`,4),v={href:"https://www.cnblogs.com/woshimrf/p/docker-influxdb.html",target:"_blank",rel:"noopener noreferrer"};function m(k,h){const s=i("ExternalLinkIcon");return r(),t("div",null,[d,p,a("ul",null,[a("li",null,[n("官网库："),a("a",u,[n("https://docs.docker.com/samples/library/influxdb"),e(s)])])]),b,a("ul",null,[a("li",null,[a("a",v,[n("https://www.cnblogs.com/woshimrf/p/docker-influxdb.html"),e(s)])])])])}const _=l(o,[["render",m],["__file","Influxdb-Install-And-Settings.html.vue"]]);export{_ as default};
