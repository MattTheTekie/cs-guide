import{_ as d,r as c,o as t,c as r,d as e,e as l,b as i,a as s}from"./app-3d979d38.js";const a={},n=s(`<h1 id="bash-常用命令" tabindex="-1"><a class="header-anchor" href="#bash-常用命令" aria-hidden="true">#</a> Bash 常用命令</h1><h2 id="基础常用命令" tabindex="-1"><a class="header-anchor" href="#基础常用命令" aria-hidden="true">#</a> 基础常用命令</h2><ul><li><code>某个命令 --h</code>，对这个命令进行解释</li><li><code>某个命令 --help</code>，解释这个命令(更详细)</li><li><code>man某个命令</code>，文档式解释这个命令(更更详细)(执行该命令后,还可以按/+关键字进行查询结果的搜索)</li><li><code>Ctrl + c</code>，结束命令</li><li><code>TAB键</code>，自动补全命令（按一次自动补全，连续按两次，提示所有以输入开头字母的所有命令）</li><li><code>键盘上下键</code>，输入临近的历史命令</li><li><code>history</code>，查看所有的历史命令</li><li><code>Ctrl + r</code>，进入历史命令的搜索功能模式</li><li><code>clear</code>，清除屏幕里面的所有命令</li><li><code>pwd</code>，显示当前目录路径（常用）</li><li><code>firefox&amp;</code>，最后后面的 <strong>&amp;</strong> 符号，表示使用后台方式打开 Firefox，然后显示该进程的 PID 值</li><li><code>jobs</code>，查看后台运行的程序列表</li><li><code>ifconfig</code>，查看内网 IP 等信息（常用）</li><li><code>curl ifconfig.me</code>，查看外网 IP 信息</li><li><code>curl ip.cn</code>，查看外网 IP 信息</li><li><code>locate 搜索关键字</code>，快速搜索系统文件/文件夹（类似 Windows 上的 everything 索引式搜索）（常用） <ul><li><code>updatedb</code>，配合上面的 locate，给 locate 的索引更新（locate 默认是一天更新一次索引）（常用）</li></ul></li><li><code>date</code>，查看系统时间（常用） <ul><li><code>date -s20080103</code>，设置日期（常用）</li><li><code>date -s18:24</code>，设置时间，如果要同时更改 BIOS 时间，再执行 <code>hwclock --systohc</code>（常用）</li></ul></li><li><code>cal</code>，在终端中查看日历，肯定没有农历显示的</li><li><code>uptime</code>，查看系统已经运行了多久，当前有几个用户等信息（常用）</li><li><code>cat 文件路名</code>，显示文件内容（属于打印语句）</li><li><code>cat -n 文件名</code>，显示文件，并每一行内容都编号</li><li><code>more 文件名</code>，用分页的方式查看文件内容（按 space 翻下一页，按 <em>Ctrl + B</em> 返回上页）</li><li><code>less</code>文件名，用分页的方式查看文件内容（带上下翻页） <ul><li>按 <strong>j</strong> 向下移动，按 <strong>k</strong> 向上移动</li><li>按 <strong>/</strong> 后，输入要查找的字符串内容，可以对文件进行向下查询，如果存在多个结果可以按 <strong>n</strong> 调到下一个结果出</li><li>按 <strong>？</strong> 后，输入要查找的字符串内容，可以对文件进行向上查询，如果存在多个结果可以按 <strong>n</strong> 调到下一个结果出</li></ul></li><li><code>shutdown</code><ul><li><code>shutdown -hnow</code>，立即关机</li><li><code>shutdown -h+10</code>，10 分钟后关机</li><li><code>shutdown -h23:30</code>，23:30 关机</li><li><code>shutdown -rnew</code>，立即重启</li></ul></li><li><code>poweroff</code>，立即关机（常用）</li><li><code>reboot</code>，立即重启（常用）</li><li><code>zip mytest.zip /opt/test/</code>，把 /opt 目录下的 test/ 目录进行压缩，压缩成一个名叫 mytest 的 zip 文件 <ul><li><code>unzip mytest.zip</code>，对 mytest.zip 这个文件进行解压，解压到当前所在目录</li><li><code>unzip mytest.zip -d /opt/setups/</code>，对 mytest.zip 这个文件进行解压，解压到 /opt/setups/ 目录下</li></ul></li><li><code>tar -cvf mytest.tar mytest/</code>，对 mytest/ 目录进行归档处理（归档和压缩不一样）</li><li><code>tar -xvf mytest.tar</code>，释放 mytest.tar 这个归档文件，释放到当前目录 <ul><li><code>tar -xvf mytest.tar -C /opt/setups/</code>，释放 mytest.tar 这个归档文件，释放到 /opt/setups/ 目录下</li></ul></li><li><code>last</code>，显示最近登录的帐户及时间</li><li><code>lastlog</code>，显示系统所有用户各自在最近登录的记录，如果没有登录过的用户会显示 <strong>从未登陆过</strong></li><li><code>ls</code>，列出当前目录下的所有没有隐藏的文件 / 文件夹。 <ul><li><code>ls -a</code>，列出包括以.号开头的隐藏文件 / 文件夹（也就是所有文件）</li><li><code>ls -R</code>，显示出目录下以及其所有子目录的文件 / 文件夹（递归地方式，不显示隐藏的文件）</li><li><code>ls -a -R</code>，显示出目录下以及其所有子目录的文件 / 文件夹（递归地方式，显示隐藏的文件）</li><li><code>ls -al</code>，列出目录下所有文件（包含隐藏）的权限、所有者、文件大小、修改时间及名称（也就是显示详细信息）</li><li><code>ls -ld 目录名</code>，显示该目录的基本信息</li><li><code>ls -t</code>，依照文件最后修改时间的顺序列出文件名。</li><li><code>ls -F</code>，列出当前目录下的文件名及其类型。以 <strong>/</strong> 结尾表示为目录名，以 <strong>*</strong> 结尾表示为可执行文件，以 <strong>@</strong> 结尾表示为符号连接</li><li><code>ls -lg</code>，同上，并显示出文件的所有者工作组名。</li><li><code>ls -lh</code>，查看文件夹类文件详细信息，文件大小，文件修改时间</li><li><code>ls /opt | head -5</code>，显示 opt 目录下前 5 条记录</li><li><code>ls -l | grep &#39;.jar&#39;</code>，查找当前目录下所有 jar 文件</li><li><code>ls -l /opt |grep &quot;^-&quot;|wc -l</code>，统计 opt 目录下文件的个数，不会递归统计</li><li><code>ls -lR /opt |grep &quot;^-&quot;|wc -l</code>，统计 opt 目录下文件的个数，会递归统计</li><li><code>ls -l /opt |grep &quot;^d&quot;|wc -l</code>，统计 opt 目录下目录的个数，不会递归统计</li><li><code>ls -lR /opt |grep &quot;^d&quot;|wc -l</code>，统计 opt 目录下目录的个数，会递归统计</li><li><code>ls -lR /opt |grep &quot;js&quot;|wc -l</code>，统计 opt 目录下 js 文件的个数，会递归统计</li><li><code>ls -l</code>，列出目录下所有文件的权限、所有者、文件大小、修改时间及名称（也就是显示详细信息，不显示隐藏文件）。显示出来的效果如下：</li></ul></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>-rwxr-xr-x. 1 root root 4096 3月 26 10:57，其中最前面的 - 表示这是一个普通文件
lrwxrwxrwx. 1 root root 4096 3月 26 10:57，其中最前面的 l 表示这是一个链接文件，类似 Windows 的快捷方式
drwxr-xr-x. 5 root root 4096 3月 26 10:57，其中最前面的 d 表示这是一个目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cd</code>，目录切换 <ul><li><code>cd ..</code>，改变目录位置至当前目录的父目录(上级目录)。</li><li><code>cd ~</code>，改变目录位置至用户登录时的工作目录。</li><li><code>cd 回车</code>，回到家目录</li><li><code>cd -</code>，上一个工作目录</li><li><code>cd dir1/</code>，改变目录位置至 dir1 目录下。</li><li><code>cd ~user</code>，改变目录位置至用户的工作目录。</li><li><code>cd ../user</code>，改变目录位置至相对路径user的目录下。</li><li><code>cd /../..</code>，改变目录位置至绝对路径的目录位置下。</li></ul></li><li><code>cp 源文件 目标文件</code>，复制文件 <ul><li><code>cp -r 源文件夹 目标文件夹</code>，复制文件夹</li><li><code>cp -r -v 源文件夹 目标文件夹</code>，复制文件夹(显示详细信息，一般用于文件夹很大，需要查看复制进度的时候)</li><li><code>cp /usr/share/easy-rsa/2.0/keys/{ca.crt,server.{crt,key},dh2048.pem,ta.key} /etc/openvpn/keys/</code>，复制同目录下花括号中的文件</li></ul></li><li><code>tar cpf - . | tar xpf - -C /opt</code>，复制当前所有文件到 /opt 目录下，一般如果文件夹文件多的情况下用这个更好，用 cp 比较容易出问题</li><li><code>mv 文件 目标文件夹</code>，移动文件到目标文件夹 <ul><li><code>mv 文件</code>，不指定目录重命名后的名字，用来重命名文件</li></ul></li><li><code>touch 文件名</code>，创建一个空白文件/更新已有文件的时间(后者少用)</li><li><code>mkdir 文件夹名</code>，创建文件夹</li><li><code>mkdir -p /opt/setups/nginx/conf/</code>，创建一个名为 conf 文件夹，如果它的上级目录 nginx 没有也会跟着一起生成，如果有则跳过</li><li><code>rmdir 文件夹名</code>，删除文件夹(只能删除文件夹里面是没有东西的文件夹)</li><li><code>rm 文件</code>，删除文件 <ul><li><code>rm -r 文件夹</code>，删除文件夹</li><li><code>rm -r -i 文件夹</code>，在删除文件夹里的文件会提示(要的话,在提示后面输入yes)</li><li><code>rm -r -f 文件夹</code>，强制删除</li><li><code>rm -r -f 文件夹1/ 文件夹2/ 文件夹3/</code>删除多个</li></ul></li><li><code>find</code>，高级查找 <ul><li><code>find . -name *lin*</code>，其中 . 代表在当前目录找，-name 表示匹配文件名 / 文件夹名，*lin* 用通配符搜索含有lin的文件或是文件夹</li><li><code>find . -iname *lin*</code>，其中 . 代表在当前目录找，-iname 表示匹配文件名 / 文件夹名（忽略大小写差异），*lin* 用通配符搜索含有lin的文件或是文件夹</li><li><code>find / -name *.conf</code>，其中 / 代表根目录查找，*.conf代表搜索后缀会.conf的文件</li><li><code>find /opt -name .oh-my-zsh</code>，其中 /opt 代表目录名，.oh-my-zsh 代表搜索的是隐藏文件 / 文件夹名字为 oh-my-zsh 的</li><li><code>find /opt -type f -iname .oh-my-zsh</code>，其中 /opt 代表目录名，-type f 代表只找文件，.oh-my-zsh 代表搜索的是隐藏文件名字为 oh-my-zsh 的</li><li><code>find /opt -type d -iname .oh-my-zsh</code>，其中 /opt 代表目录名，-type d 代表只找目录，.oh-my-zsh 代表搜索的是隐藏文件夹名字为 oh-my-zsh 的</li><li><code>find . -name &quot;lin*&quot; -exec ls -l {} \\;</code>，当前目录搜索lin开头的文件，然后用其搜索后的结果集，再执行ls -l的命令（这个命令可变，其他命令也可以），其中 -exec 和 {} ; 都是固定格式</li><li><code>find /opt -type f -size +800M -print0 | xargs -0 du -h | sort -nr</code>，找出 /opt 目录下大于 800 M 的文件</li><li><code>find / -name &quot;*tower*&quot; -exec rm {} \\;</code>，找到文件并删除</li><li><code>find / -name &quot;*tower*&quot; -exec mv {} /opt \\;</code>，找到文件并移到 opt 目录</li><li><code>find . -name &quot;*&quot; |xargs grep &quot;youmeek&quot;</code>，递归查找当前文件夹下所有文件内容中包含 youmeek 的文件</li><li><code>find . -size 0 | xargs rm -f &amp;</code>，删除当前目录下文件大小为0的文件</li><li><code>du -hm --max-depth=2 | sort -nr | head -12</code>，找出系统中占用容量最大的前 12 个目录</li></ul></li><li><code>cat /etc/resolv.conf</code>，查看 DNS 设置</li><li><code>netstat -tlunp</code>，查看当前运行的服务，同时可以查看到：运行的程序已使用端口情况</li><li><code>env</code>，查看所有系统变量</li><li><code>export</code>，查看所有系统变量</li><li><code>echo</code><ul><li><code>echo $JAVA_HOME</code>，查看指定系统变量的值，这里查看的是自己配置的 JAVA_HOME。</li><li><code>echo &quot;字符串内容&quot;</code>，输出 &quot;字符串内容&quot;</li><li><code>echo &gt; aa.txt</code>，清空 aa.txt 文件内容（类似的还有：<code>: &gt; aa.txt</code>，其中 : 是一个占位符, 不产生任何输出）</li></ul></li><li><code>unset $JAVA_HOME</code>，删除指定的环境变量</li><li><code>ln -s /opt/data /opt/logs/data</code>，表示给 /opt/logs 目录下创建一个名为 data 的软链接，该软链接指向到 /opt/data</li><li><code>grep</code><ul><li><code>shell grep -H &#39;安装&#39; *.sh</code>，查找当前目录下所有 sh 类型文件中，文件内容包含 <code>安装</code> 的当前行内容</li><li><code>grep &#39;test&#39; java*</code>，显示当前目录下所有以 java 开头的文件中包含 test 的行</li><li><code>grep &#39;test&#39; spring.ini docker.sh</code>，显示当前目录下 spring.ini docker.sh 两个文件中匹配 test 的行</li></ul></li><li><code>ps</code><ul><li><code>ps –ef|grep java</code>，查看当前系统中有关 java 的所有进程</li><li><code>ps -ef|grep --color java</code>，高亮显示当前系统中有关 java 的所有进程</li></ul></li><li><code>kill</code><ul><li><code>kill 1234</code>，结束 pid 为 1234 的进程</li><li><code>kill -9 1234</code>，强制结束 pid 为 1234 的进程（慎重）</li><li><code>killall java</code>，结束同一进程组内的所有为 java 进程</li><li><code>ps -ef|grep hadoop|grep -v grep|cut -c 9-15|xargs kill -9</code>，结束包含关键字 hadoop 的所有进程</li></ul></li><li><code>head</code><ul><li><code>head -n 10 spring.ini</code>，查看当前文件的前 10 行内容</li></ul></li><li><code>tail</code><ul><li><code>tail -n 10 spring.ini</code>，查看当前文件的后 10 行内容</li><li><code>tail -200f 文件名</code>，查看文件被更新的新内容尾 200 行，如果文件还有在新增可以动态查看到（一般用于查看日记文件）</li></ul></li></ul><h2 id="用户、权限-相关命令" tabindex="-1"><a class="header-anchor" href="#用户、权限-相关命令" aria-hidden="true">#</a> 用户、权限-相关命令</h2><ul><li>使用 pem 证书登录：<code>ssh -i /opt/mykey.pem root@192.168.0.70</code><ul><li>证书权限不能太大，不然无法使用：<code>chmod 600 mykey.pem</code></li></ul></li><li><code>hostname</code>，查看当前登陆用户全名</li><li><code>cat /etc/group</code>，查看所有组</li><li><code>cat /etc/passwd</code>，查看所有用户</li><li><code>groups youmeek</code>，查看 youmeek 用户属于哪个组</li><li><code>useradd youmeek -g judasn</code>，添加用户并绑定到 judasn 组下</li><li><code>userdel -r youmeek</code>，删除名字为 youmeek 的用户 <ul><li>参数：<code>-r</code>，表示删除用户的时候连同用户的家目录一起删除</li></ul></li><li>修改普通用户 youmeek 的权限跟 root 权限一样： <ul><li><p>常用方法（原理是把该用户加到可以直接使用 sudo 的一个权限状态而已）：</p><ul><li>编辑配置文件：<code>vim /etc/sudoers</code></li><li>找到 98 行（预估），有一个：<code>root ALL=(ALL) ALL</code>，在这一行下面再增加一行，效果如下：</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>root    ALL=(ALL)   ALL
youmeek    ALL=(ALL)   ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>另一种方法：</p><ul><li>编辑系统用户的配置文件：<code>vim /etc/passwd</code>，找到 <strong>root</strong> 和 <strong>youmeek</strong> 各自开头的那一行，比如 root 是：<code>root:x:0:0:root:/root:/bin/zsh</code>，这个代表的含义为：<em>用户名:密码:UserId:GroupId:描述:家目录:登录使用的 shell</em></li><li>通过这两行对比，我们可以直接修改 youmeek 所在行的 UserId 值 和 GroupId 值，都改为 0。</li></ul></li></ul></li><li><code>groupadd judasn</code>，添加一个名为 judasn 的用户组</li><li><code>groupdel judasn</code>，删除一个名为 judasn 的用户组（前提：先删除组下面的所有用户）</li><li><code>usermod 用户名 -g 组名</code>，把用户修改到其他组下</li><li><code>passwd youmeek</code>，修改 youmeek 用户的密码（前提：只有 root 用户才有修改其他用户的权限，其他用户只能修改自己的）</li><li><code>chmod 777 文件名/目录</code>，给指定文件增加最高权限，系统中的所有人都可以进行读写。 <ul><li>linux 的权限分为 rwx。r 代表：可读，w 代表：可写，x 代表：可执行</li><li>这三个权限都可以转换成数值表示，r = 4，w = 2，x = 1，- = 0，所以总和是 7，也就是最大权限。第一个 7 是所属主（user）的权限，第二个 7 是所属组（group）的权限，最后一位 7 是非本群组用户（others）的权限。</li><li><code>chmod -R 777 目录</code> 表示递归目录下的所有文件夹，都赋予 777 权限</li><li><code>chown myUsername:myGroupName myFile</code> 表示修改文件所属用户、组</li><li><code>chown -R myUsername:myGroupName myFolder</code> 表示递归修改指定目录下的所有文件权限</li></ul></li><li><code>su</code>：切换到 root 用户，终端目录还是原来的地方（常用） <ul><li><code>su -</code>：切换到 root 用户，其中 <strong>-</strong> 号另起一个终端并切换账号</li><li><code>su 用户名</code>，切换指定用户帐号登陆，终端目录还是原来地方。</li><li><code>su - 用户名</code>，切换到指定用户帐号登陆，其中 <strong>-</strong> 号另起一个终端并切换账号</li></ul></li><li><code>exit</code>，注销当前用户（常用）</li><li><code>sudo 某个命令</code>，使用管理员权限使用命令，使用 sudo 回车之后需要输入当前登录账号的密码。（常用）</li><li><code>passwd</code>，修改当前用户密码（常用）</li><li>添加临时账号，并指定用户根目录，并只有可读权限方法 <ul><li>添加账号并指定根目录（用户名 tempuser）：<code>useradd -d /data/logs -m tempuser</code></li><li>设置密码：<code>passwd tempuser</code> 回车设置密码</li><li>删除用户（该用户必须退出 SSH 才能删除成功），也会同时删除组：<code>userdel tempuser</code></li></ul></li></ul><h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2><ul><li><code>df -h</code>，自动以合适的磁盘容量单位查看磁盘大小和使用空间 <ul><li><code>df -k</code>，以磁盘容量单位 K 为数值结果查看磁盘使用情况</li><li><code>df -m</code>，以磁盘容量单位 M 为数值结果查看磁盘使用情况</li></ul></li><li><code>du -sh /opt</code>，查看 opt 这个文件夹大小 （h 的意思 human-readable 用人类可读性较好方式显示，系统会自动调节单位，显示合适大小的单位）</li><li><code>du -sh ./*</code>，查看当前目录下所有文件夹大小 （h 的意思 human-readable 用人类可读性较好方式显示，系统会自动调节单位，显示合适大小的单位）</li><li><code>du -sh /opt/setups/</code>，显示 /opt/setups/ 目录所占硬盘空间大小（s 表示 –summarize 仅显示总计，即当前目录的大小。h 表示 –human-readable 以 KB，MB，GB 为单位，提高信息的可读性）</li><li><code>mount /dev/sdb5 /newDir/</code>，把分区 sdb5 挂载在根目录下的一个名为 newDir 的空目录下，需要注意的是：这个目录最好为空，不然已有的那些文件将看不到，除非卸载挂载。 <ul><li>挂载好之后，通过：<code>df -h</code>，查看挂载情况。</li></ul></li><li><code>umount /newDir/</code>，卸载挂载，用目录名 <ul><li>如果这样卸载不了可以使用：<code>umount -l /newDir/</code></li></ul></li><li><code>umount /dev/sdb5</code>，卸载挂载，用分区名</li></ul><h2 id="wget-下载文件" tabindex="-1"><a class="header-anchor" href="#wget-下载文件" aria-hidden="true">#</a> wget 下载文件</h2><ul><li>常规下载：<code>wget http://www.gitnavi.com/index.html</code></li><li>自动断点下载：<code>wget -c http://www.gitnavi.com/index.html</code></li><li>后台下载：<code>wget -b http://www.gitnavi.com/index.html</code></li><li>伪装代理名称下载：<code>wget --user-agent=&quot;Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16&quot; http://www.gitnavi.com/index.html</code></li><li>限速下载：<code>wget --limit-rate=300k http://www.gitnavi.com/index.html</code></li><li>批量下载：<code>wget -i /opt/download.txt</code>，一个下载地址一行</li><li>后台批量下载：<code>wget -b -c -i /opt/download.txt</code>，一个下载地址一行</li></ul><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,12),u={href:"http://wenku.baidu.com/view/1ad19bd226fff705cc170af3.html",target:"_blank",rel:"noopener noreferrer"},p={href:"http://blog.csdn.net/nzing/article/details/9166057",target:"_blank",rel:"noopener noreferrer"},h={href:"http://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/wget.html",target:"_blank",rel:"noopener noreferrer"};function m(g,f){const o=c("ExternalLinkIcon");return t(),r("div",null,[n,e("ul",null,[e("li",null,[e("a",u,[l("http://wenku.baidu.com/view/1ad19bd226fff705cc170af3.html"),i(o)])]),e("li",null,[e("a",p,[l("http://blog.csdn.net/nzing/article/details/9166057"),i(o)])]),e("li",null,[e("a",h,[l("http://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/wget.html"),i(o)])])])])}const x=d(a,[["render",m],["__file","Bash.html.vue"]]);export{x as default};
