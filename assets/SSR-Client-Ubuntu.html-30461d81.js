import{_ as o,r as t,o as a,c as d,d as e,e as i,b as s,a as n}from"./app-3d979d38.js";const r={},u=n(`<h1 id="ssr-ubuntu-客户端" tabindex="-1"><a class="header-anchor" href="#ssr-ubuntu-客户端" aria-hidden="true">#</a> SSR Ubuntu 客户端</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>因为某些原因，这个东西不做过多解释</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>需要 Git 环境： <code>sudo apt-get install git</code>&gt;\`</li><li>需要 Python 2 环境：<code>sudo apt-get install python</code></li><li>官网脚本： https://github.com/the0demiurge/CharlesScripts/blob/master/charles/bin/ssr</li><li>我们这里使用别人提供的文件，如果该文件被屏蔽，就自行用上面官网的文件。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://www.djangoz.com/ssr

sudo mv ssr /usr/local/bin

sudo chmod 766 /usr/local/bin/ssr

ssr install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置：<code>ssr config</code><ul><li>这是一个 vim 的配置界面，也可以直接编辑其源文件：</li></ul></li><li>主要修改如下内容：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;server&quot;:&quot;12.26.68.99&quot;,        //服务器ip
&quot;server_port&quot;:9191,        //端口
&quot;password&quot;:&quot;123456&quot;,       //密码
&quot;protocol&quot;:&quot;auth_sha1_v4&quot;, //协议插件
&quot;obfs&quot;:&quot;http_simple&quot;,      //混淆插件
&quot;method&quot;:&quot;aes-256-cfb&quot;,    //加密方式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动：<code>ssr start</code></li><li>其他常用命令： <ul><li><code>ssr stop</code></li><li><code>ssr help</code></li></ul></li><li>然后就可以用 Chrome 的 SwitchyOmega</li><li>AutoProxy：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt</li></ul><h2 id="配置终端代理-polipo" tabindex="-1"><a class="header-anchor" href="#配置终端代理-polipo" aria-hidden="true">#</a> 配置终端代理 polipo</h2><ul><li>安装：<code>sudo apt-get install polipo</code></li><li>修改配置（一般不要变动，直接复制上去即可）：<code>sudo vim /etc/polipo/config</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># This file only needs to list configuration variables that deviate  
# from the default values.  See /usr/share/doc/polipo/examples/config.sample  
# and &quot;polipo -v&quot; for variables you can tweak and further information.  
  
logSyslog = true  
logFile = /var/log/polipo/polipo.log  
  
proxyAddress = &quot;0.0.0.0&quot;  
  
socksParentProxy = &quot;127.0.0.1:1080&quot;  
socksProxyType = socks5  
  
chunkHighMark = 50331648  
objectHighMark = 16384  
  
serverMaxSlots = 64  
serverSlots = 16  
serverSlots1 = 32  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启：<code>sudo service polipo restart</code></li></ul><h4 id="开始测试-polipo" tabindex="-1"><a class="header-anchor" href="#开始测试-polipo" aria-hidden="true">#</a> 开始测试 polipo</h4>`,14),c=n("<li><p>获取自己当前 IP：<code>curl ip.gs</code></p><ul><li>这时候应该是国内 IP</li></ul></li><li><p><strong>开始使用代理</strong>：<code>export http_proxy=http://127.0.0.1:8123</code></p></li><li><p>获取自己当前 IP：<code>curl ip.gs</code></p><ul><li>这时候应该是国外 IP</li></ul></li><li><p><strong>取消代理</strong>：<code>unset http_proxy</code></p></li><li><p>获取自己当前 IP：<code>curl ip.gs</code></p><ul><li>这时候应该是国内 IP</li></ul></li>",5),v={href:"http://127.0.0.1:8123/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"材料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#材料","aria-hidden":"true"},"#"),i(" 材料")],-1),h={href:"https://www.jianshu.com/p/a0f3268bfa33",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const l=t("ExternalLinkIcon");return a(),d("div",null,[u,e("ul",null,[c,e("li",null,[e("p",null,[i("另外：在浏览器中输入 "),e("a",v,[i("http://127.0.0.1:8123/"),s(l)]),i(" 便可以进入到 Polipo 的使用说明和配置界面。")])])]),p,e("ul",null,[e("li",null,[e("a",h,[i("https://www.jianshu.com/p/a0f3268bfa33"),s(l)])])])])}const x=o(r,[["render",m],["__file","SSR-Client-Ubuntu.html.vue"]]);export{x as default};
