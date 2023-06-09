import{_ as r,r as c,o as d,c as i,d as e,e as s,b as n,a as o}from"./app-3d979d38.js";const p="/cs-guide/assets/e45e9ccc918e320e0e1ebb7bd2812f1a-6c1976b3.webp",t="/cs-guide/assets/858b1e66515f2298bb22e06ffa9e9792-d0c5cfc1.webp",l="/cs-guide/assets/ee94b4fd0c05615d3334ec2ce871674f-9b5bbcd4.webp",h="/cs-guide/assets/29b1af3c6254f9a55cf329df451e1f8b-d2bf3a65.webp",u="/cs-guide/assets/57f68a38a70e1a78e275b6539a7cd275-f505e525.webp",m="/cs-guide/assets/d821ab74baabee3c91e560e00efea0de-29968caf.webp",b="/cs-guide/assets/48b26e190568574b2de2d23186adc5be-f9fdf4d8.webp",v="/cs-guide/assets/1b06187ef93ca1fc5cdb5836ce753656-5e92c44c.webp",g="/cs-guide/assets/phpstorm-run-dccf5e73.png",f={},k=e("h1",{id:"环境搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境搭建","aria-hidden":"true"},"#"),s(" 环境搭建")],-1),_=e("h2",{id:"安装php",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装php","aria-hidden":"true"},"#"),s(" 安装php")],-1),x={href:"https://windows.php.net/download",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),q={href:"https://xdebug.org/",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"c:\\php",-1),y=o('<h2 id="安装composer" tabindex="-1"><a class="header-anchor" href="#安装composer" aria-hidden="true">#</a> 安装composer</h2><p>如果出现如下错误，说明伟大的防火墙阻止了你获取存在国外服务器的文件，需要手动下载一下</p><p><img src="'+p+'" alt="88108dda7f29ef40596f219db284a09e"></p><h3 id="第一步-添加php-exe到环境变量" tabindex="-1"><a class="header-anchor" href="#第一步-添加php-exe到环境变量" aria-hidden="true">#</a> 第一步：添加php.exe到环境变量</h3><p>方法：计算机--&gt;右键--&gt;属性--&gt;高级系统设置--&gt;环境变量（这一步相信大家都是妥妥的）</p><p><img src="'+t+'" alt="ba47a64eb2ac2b217a522b27fd644eb9"></p><p>复制php.exe的路径，粘贴到path环境变量中（注意前面有一个分号;），图片如下：</p><p><img src="'+l+'" alt="c1fc192727d2dd7b13bc7ea29a524a56"></p><blockquote><p><strong>php -v</strong> 执行成功会返回版本信息，这里是PHP 7.0.12</p></blockquote><p><img src="'+h+'" alt="8692dcabbeb60afe006c2699e2429480"></p><h3 id="第二步-开启openssl扩展" tabindex="-1"><a class="header-anchor" href="#第二步-开启openssl扩展" aria-hidden="true">#</a> 第二步：开启openssl扩展</h3><p>方法：在PHP目录下，打开<strong>php.ini</strong>文件，去掉<strong>extension=php_openssl.dll</strong>前面的分号(<strong>;</strong>)</p><p><img src="'+u+'" alt="7dadd699abb3a4d03f0a1b6235c4316b"></p>',13),j={id:"第三-下载composer-phar并放到php目录下-在php目录下新建composer-cmd-内容为",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#第三-下载composer-phar并放到php目录下-在php目录下新建composer-cmd-内容为","aria-hidden":"true"},"#",-1),H={href:"https://link.jianshu.com?t=https://getcomposer.org/composer.phar",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"composer.cmd",-1),B=o(`<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token operator">*</span><span class="token operator">*</span>@php <span class="token string">&quot;%~dp0composer.phar&quot;</span> <span class="token operator">%</span>\\<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt="851b81a56ab9d052a8a5481bacc7b328"></p><p>保存后，**运行这个文件，**打开cmd，输入 <code>composer -V</code> 查看是否成功</p><p><img src="'+b+`" alt="d33d95cb0f6a9aa1f3eb2c826f03f622"></p><h4 id="第四-更改-packagist-为国内镜像" tabindex="-1"><a class="header-anchor" href="#第四-更改-packagist-为国内镜像" aria-hidden="true">#</a> 第四：更改 Packagist 为国内镜像</h4><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>composer config <span class="token operator">-</span>g repo<span class="token punctuation">.</span>packagist composer  https:<span class="token operator">/</span><span class="token operator">/</span>packagist<span class="token punctuation">.</span>phpcomposer<span class="token punctuation">.</span>com 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+`" alt="50c60854f9c07f15eb6cfbdb89fb7cd4"></p><h2 id="composer运行出现问题" tabindex="-1"><a class="header-anchor" href="#composer运行出现问题" aria-hidden="true">#</a> composer运行出现问题</h2><ol><li>建议先将Composer版本升级到最新：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> self-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>执行诊断命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> diagnose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>清除缓存：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>若项目之前已通过其他源安装，则需要更新 composer.lock 文件，执行命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> update <span class="token parameter variable">--lock</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="composer管理依赖" tabindex="-1"><a class="header-anchor" href="#composer管理依赖" aria-hidden="true">#</a> composer管理依赖</h2><p>要使用 Composer，我们需要先在项目的目录下创建一个 composer.json 文件，文件描述了项目的依赖关系</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;monolog/monolog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.*&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定安装依赖" tabindex="-1"><a class="header-anchor" href="#指定安装依赖" aria-hidden="true">#</a> 指定安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">composer</span> require monolog/monolog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新依赖" tabindex="-1"><a class="header-anchor" href="#更新依赖" aria-hidden="true">#</a> 更新依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新所有依赖</span>
<span class="token function">composer</span> update

<span class="token comment"># 更新指定的包</span>
<span class="token function">composer</span> update monolog/monolog

<span class="token comment"># 更新指定的多个包</span>
<span class="token function">composer</span> update monolog/monolog symfony/dependency-injection

<span class="token comment"># 还可以通过通配符匹配包</span>
<span class="token function">composer</span> update monolog/monolog symfony/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除依赖" tabindex="-1"><a class="header-anchor" href="#移除依赖" aria-hidden="true">#</a> 移除依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">composer</span> remove monolog/monolog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="phpstorm运行项目" tabindex="-1"><a class="header-anchor" href="#phpstorm运行项目" aria-hidden="true">#</a> phpstorm运行项目</h2><p>配置好php环境,然后,选择<code>php build in web server</code>:<br><img src="`+g+`" alt="run"></p><p>使用命令行运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 其中php-tutor是文件夹名称</span>
php.exe <span class="token parameter variable">-S</span> localhost:82 <span class="token parameter variable">-t</span>  php-tutor

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function C(E,I){const a=c("ExternalLinkIcon");return d(),i("div",null,[k,_,e("p",null,[s("windows版本php下载: "),e("a",x,[s("https://windows.php.net/download"),n(a)]),w,s(" xdebug下载: "),e("a",q,[s("https://xdebug.org/"),n(a)]),s(" 把php的压缩包解压后放在"),P,s("文件夹")]),y,e("h3",j,[V,s(" 第三：下载"),e("a",H,[s("composer.phar"),n(a)]),s("并放到PHP目录下，在PHP目录下新建"),N,s("， 内容为")]),B])}const S=r(f,[["render",C],["__file","install.html.vue"]]);export{S as default};
