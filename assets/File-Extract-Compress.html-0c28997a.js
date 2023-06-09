import{_ as c,r as o,o as r,c as t,d as e,e as i,b as d,a as l}from"./app-3d979d38.js";const n={},p=l(`<h1 id="linux-下常用压缩文件的解压、压缩" tabindex="-1"><a class="header-anchor" href="#linux-下常用压缩文件的解压、压缩" aria-hidden="true">#</a> Linux 下常用压缩文件的解压、压缩</h1><h2 id="常用压缩包-解压-令整理" tabindex="-1"><a class="header-anchor" href="#常用压缩包-解压-令整理" aria-hidden="true">#</a> 常用压缩包--解压--令整理</h2><ul><li><p>Linux 后缀为 <code>.war</code> 格式的文件（一般用在部署 Tomcat 项目的时候）</p></li><li><p>命令：<code>unzip -oq XXXXXX.war -d ROOT</code></p><ul><li>如果没有 ROOT 目录会自动创建 ROOT 目录。</li></ul></li><li><p>Linux 后缀为 <code>.tar.gz</code> 格式的文件-解压</p></li><li><p>命令：<code>tar zxvf XXXXXX.tar.gz</code></p></li><li><p>Linux 后缀为 <code>.bz2</code> 格式的文件-解压</p></li><li><p>命令：<code>bzip2 -d XXXXXX.bz2</code></p></li><li><p>Linux 后缀为 <code>.tar.bz2</code> 格式的文件-解压</p></li><li><p>命令：<code>tar jxvf XXXXXX.tar.bz2</code></p></li><li><p>Linux 后缀为 <code>.tar</code> 格式的文件-解压</p></li><li><p>命令：<code>tar zxvf XXXXXX.tar</code></p></li><li><p>Linux 后缀为 <code>.gz</code> 格式的文件-解压</p></li><li><p>命令：<code>gunzip XXXXXX.gz</code></p></li><li><p>Linux 后缀为 <code>.zip</code> 格式的文件-解压</p></li><li><p>命令：<code>unzip XXXXXX.zip</code></p></li><li><p>命令：<code>unzip XXXXXX.zip -d /opt/</code>，解压到指定目录</p></li><li><p>Linux 后缀为 <code>.7z</code> 格式的文件-解压</p></li><li><p>命令：<code>7za x XXXXXX.7z</code></p></li><li><p>Linux 后缀为 <code>.tar.xz</code> 格式的文件-解压，解压出来是tar，再对tar进行解压</p></li><li><p>命令：<code>tar xf XXXXXX.tar.xz</code></p></li></ul><hr><h2 id="常用文件进行-压缩-命令整理" tabindex="-1"><a class="header-anchor" href="#常用文件进行-压缩-命令整理" aria-hidden="true">#</a> 常用文件进行--压缩--命令整理</h2><ul><li><p>Linux 压缩文件夹为后缀 <code>.war</code> 格式的文件（最好不要对根目录进行压缩，不然会多出一级目录）</p></li><li><p>命令：<code>jar -cvfM0 cas.war /opt/cas/META-INF /opt/cas/WEB-INF /opt/cas/index.jsp</code></p></li><li><p>或者命令：<code>cd 项目根目录 ; jar -cvfM0 cas.war ./*</code></p></li><li><p>Linux 压缩文件为后缀 <code>.tar</code> 格式的文件</p></li><li><p>命令：<code>tar -zcvf test11.tar test11</code></p></li><li><p>Linux 压缩文件为后缀 <code>.tar.gz</code> 格式的文件</p></li><li><p>命令：<code>tar -zcvf test11.tar.gz test11</code></p></li><li><p>Linux 压缩文件为后缀 <code>.bz2</code> 格式的文件</p></li><li><p>命令：<code>bzip2 -v test.txt</code></p></li><li><p>Linux 压缩文件为后缀 <code>.tar.bz2</code> 格式的文件</p></li><li><p>命令：<code>tar -jcvf test11.tar.gz test11</code></p></li><li><p>Linux 压缩文件为后缀 <code>.zip</code> 格式的文件</p></li><li><p>命令：<code>zip -r test1.zip /opt/test1/</code></p></li><li><p>Linux 压缩文件为后缀 <code>.7z</code> 格式的文件</p></li><li><p>命令：<code>7za a test1.7z /opt/test1/</code></p></li></ul><h2 id="分卷压缩" tabindex="-1"><a class="header-anchor" href="#分卷压缩" aria-hidden="true">#</a> 分卷压缩</h2><ul><li>分卷压缩：<code>zip -s 100M myFile.zip --out newFile.zip</code></li><li>最终效果：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>newFile.z01
newFile.z02
newFile.z03
newFile.z04
newFile.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊格式" tabindex="-1"><a class="header-anchor" href="#特殊格式" aria-hidden="true">#</a> 特殊格式</h2>`,10),s={href:"http://sourceforge.net/projects/p7zip/files/p7zip/",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,[i("解压压缩包："),e("code",null,"tar jxvf p7zip_15.14_src_all.tar.bz2")],-1),h=e("li",null,[i("进入目录："),e("code",null,"cd p7zip_15.14")],-1),X=e("li",null,[i("执行安装："),e("code",null,"sh install.sh")],-1),z=l("<li>rar <ul><li>rar 的安装： <ul><li>下载：<code>wget http://www.rarlab.com/rar/rarlinux-3.8.0.tar.gz</code></li><li>解压下载下来的压缩包：<code>tar zxvf rarlinux-3.8.0.tar.gz</code></li><li>进入解压后目录：<code>cd rar</code></li><li>编译：<code>make</code></li><li>安装：<code>make install</code></li></ul></li><li>rar 解压：<code>rar x 文件名.rar</code></li></ul></li>",1),x=l('<h2 id="jar-包操作" tabindex="-1"><a class="header-anchor" href="#jar-包操作" aria-hidden="true">#</a> jar 包操作</h2><h3 id="修改-jar-包配置文件" tabindex="-1"><a class="header-anchor" href="#修改-jar-包配置文件" aria-hidden="true">#</a> 修改 jar 包配置文件</h3><ul><li>命令：<code>vim mytest.jar</code>，这时候会展示 jar 中所有层级目录下的所有文件</li><li>输入：<code>/log4j2.xml</code> 回车，光标定位到该文件，然后再回车，进入编辑该文件状态</li><li>此时可以修改配置文件了，修改后 <code>:wq</code> 保存退出，接着 <code>：q</code> 退出 jar 编辑状态</li></ul><h3 id="更新-jar-包中的文件" tabindex="-1"><a class="header-anchor" href="#更新-jar-包中的文件" aria-hidden="true">#</a> 更新 Jar 包中的文件</h3><ul><li>替换（新增）jar 根目录下的文件：<code>jar uvf mytest.jar ClassToAdd.class</code></li><li>一般 class 文件都是在多层目录里面的，需要这样做：<code>jar uvf mytest.jar com/youmeek/ClassToAdd.class</code><ul><li>需要在 jar 所在的文件夹下创建：<code>mkdir -p ./com/youmeek</code>，该目录必须和原 jar 里面的层级目录结构一致</li></ul></li></ul><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>',6),f={href:"http://forum.ubuntu.org.cn/viewtopic.php?f=50&t=158893",target:"_blank",rel:"noopener noreferrer"};function _(m,v){const a=o("ExternalLinkIcon");return r(),t("div",null,[p,e("ul",null,[e("li",null,[i("7z "),e("ul",null,[e("li",null,[i("7z 的安装： "),e("ul",null,[e("li",null,[i("访问官网下载解压包："),e("a",s,[i("http://sourceforge.net/projects/p7zip/files/p7zip/"),d(a)])]),u,h,X])])])]),z]),x,e("ul",null,[e("li",null,[e("a",f,[i("http://forum.ubuntu.org.cn/viewtopic.php?f=50&t=158893"),d(a)])])])])}const j=c(n,[["render",_],["__file","File-Extract-Compress.html.vue"]]);export{j as default};