import{_ as a,r as d,o as r,c as t,d as e,e as i,b as l,a as s}from"./app-3d979d38.js";const o={},c=e("h1",{id:"ansible-安装和配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ansible-安装和配置","aria-hidden":"true"},"#"),i(" Ansible 安装和配置")],-1),u=e("h2",{id:"ansible-说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ansible-说明","aria-hidden":"true"},"#"),i(" Ansible 说明")],-1),v={href:"https://www.ansible.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/ansible/ansible",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.ansible.com//",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"简单讲：它的作用就是把写 shell 这件事变成标准化、模块化。方便更好的自动化运维",-1),p=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),i(" 安装")],-1),_={href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[i("CentOS："),e("code",null,"sudo yum install -y ansible"),e("ul",null,[e("li",null,[i("查看版本："),e("code",null,"ansible --version")])])],-1),g=s(`<hr><h2 id="配置基本概念" tabindex="-1"><a class="header-anchor" href="#配置基本概念" aria-hidden="true">#</a> 配置基本概念</h2><h4 id="ansible-基本配置文件顺序" tabindex="-1"><a class="header-anchor" href="#ansible-基本配置文件顺序" aria-hidden="true">#</a> Ansible 基本配置文件顺序</h4><ul><li>Ansible 执行的时候会按照以下顺序查找配置项，所以修改的时候要特别注意改的是哪个文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ANSIBLE_CONFIG (环境变量)
ansible.cfg (脚本所在当前目录下)
~/.ansible.cfg (用户家目录下，默认没有)
/etc/ansible/ansible.cfg（安装后会自动生成）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置远程主机地址-ansible-称这些地址为-inventory" tabindex="-1"><a class="header-anchor" href="#配置远程主机地址-ansible-称这些地址为-inventory" aria-hidden="true">#</a> 配置远程主机地址 (Ansible 称这些地址为 Inventory)</h4>`,6),k=e("li",null,[i("假设我有 3 台机子： "),e("ul",null,[e("li",null,"192.168.0.223"),e("li",null,"192.168.0.70"),e("li",null,"192.168.0.103")])],-1),f={href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#hosts-and-groups",target:"_blank",rel:"noopener noreferrer"},y=s(`<h6 id="给这三台机子设置免密登录的情况-一般推荐方式" tabindex="-1"><a class="header-anchor" href="#给这三台机子设置免密登录的情况-一般推荐方式" aria-hidden="true">#</a> 给这三台机子设置免密登录的情况（一般推荐方式）</h6><ul><li>编辑 Ansible 配置文件：<code>vim /etc/ansible/hosts</code></li><li>添加如下内容</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[hadoop-host]
192.168.0.223
192.168.0.70
192.168.0.103
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其中 <code>[hadoop-host]</code> 表示这些主机代表的一个组名</li></ul><h6 id="如果不设置免密-直接采用账号密码-容易泄露信息" tabindex="-1"><a class="header-anchor" href="#如果不设置免密-直接采用账号密码-容易泄露信息" aria-hidden="true">#</a> 如果不设置免密，直接采用账号密码（容易泄露信息）</h6><ul><li>编辑 Ansible 配置文件：<code>vim /etc/ansible/hosts</code></li><li>添加如下内容</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[hadoop-host]
hadoop-master ansible_host=192.168.0.223 ansible_user=root ansible_ssh_pass=123456
hadoop-node1  ansible_host=192.168.0.70 ansible_user=root ansible_ssh_pass=123456
hadoop-node2  ansible_host=192.168.0.103 ansible_user=root ansible_ssh_pass=123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单使用-ad-hoc方式" tabindex="-1"><a class="header-anchor" href="#简单使用-ad-hoc方式" aria-hidden="true">#</a> 简单使用（<code>ad hoc</code>方式）</h2>`,8),A={href:"https://docs.ansible.com/ansible/latest/user_guide/intro_adhoc.html",target:"_blank",rel:"noopener noreferrer"},w=s(`<h5 id="运行-ansible" tabindex="-1"><a class="header-anchor" href="#运行-ansible" aria-hidden="true">#</a> 运行 Ansible</h5><ul><li>运行 Ansible 的 <code>ping</code> 命令，看看配置正确时输出如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ansible --private-key ~/.ssh/id_rsa all -m ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>让远程所有主机都执行 <code>ps</code> 命令，输出如下</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible all -a &#39;ps&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>让远程所有 hadoop-host 组的主机都执行 <code>ps</code> 命令，输出如下</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible hadoop-host -a &#39;ps&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="playbook-脚本方式" tabindex="-1"><a class="header-anchor" href="#playbook-脚本方式" aria-hidden="true">#</a> Playbook 脚本方式</h2>`,9),H={href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://docs.ansible.com/ansible/latest/modules/command_module.html",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,"playbook（剧本），顾名思义，就是需要定义一个脚本或者说配置文件，然后定义好要做什么。之后 ansible 就会根据 playbook 脚本对远程主机进行操作",-1),j=s(`<h4 id="简单脚本" tabindex="-1"><a class="header-anchor" href="#简单脚本" aria-hidden="true">#</a> 简单脚本</h4><ul><li>下面脚本让所有远程主机执行 <code>whoami</code> 命令，并把结果（当前用户名）输出到 <code>/opt/whoami.txt</code> 文件</li><li>创建脚本文件：<code>vim /opt/simple-playbook.yml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: all
  tasks:
    - name: whoami
      shell: &#39;whoami &gt; /opt/whoami.txt&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行命令：<code>ansible-playbook /opt/simple-playbook.yml</code>，结果如下，并且 opt 下也有文件生成</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PLAY [all] **************************************************************************************************************************

TASK [Gathering Facts] **************************************************************************************************************
ok: [192.168.0.223]
ok: [192.168.0.103]
ok: [192.168.0.70]

TASK [whoami] ***********************************************************************************************************************
changed: [192.168.0.103]
changed: [192.168.0.223]
changed: [192.168.0.70]

PLAY RECAP **************************************************************************************************************************
192.168.0.103              : ok=2    changed=1    unreachable=0    failed=0
192.168.0.223              : ok=2    changed=1    unreachable=0    failed=0
192.168.0.70               : ok=2    changed=1    unreachable=0    failed=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="平时用来测试" tabindex="-1"><a class="header-anchor" href="#平时用来测试" aria-hidden="true">#</a> 平时用来测试</h2><ul><li>创建脚本文件：<code>vim /opt/test-playbook.yml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: hadoop-test
  remote_user: root
  vars:
    java_install_folder: /usr/local
  tasks:
    # 按行的方式写入
    - name: Set JAVA_HOME 1
      lineinfile: 
        dest=/etc/profile
        line=&quot;JAVA_HOME={{ java_install_folder }}/jdk1.8.0_181&quot;
    # 按块的方式写入，#{mark} 会被自动替换成：begin 和 end 字符来包裹整块内容（我这里自己定义了词语）
    - name: Set JAVA_HOME 2
      blockinfile: 
        path: /etc/profile
        marker: &quot;#{mark} JDK ENV&quot;
        marker_begin: &quot;开始&quot;
        marker_end: &quot;结束&quot;
        block: |
          export JAVA_HOME={{ java_install_folder }}/jdk1.8.0_181
          export PATH=$PATH:$JAVA_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行命令：<code>ansible-playbook /opt/test-playbook.yml</code></li></ul><hr><h2 id="更多-playbook-实战" tabindex="-1"><a class="header-anchor" href="#更多-playbook-实战" aria-hidden="true">#</a> 更多 playbook 实战</h2><h4 id="禁用防火墙-centos-7-x" tabindex="-1"><a class="header-anchor" href="#禁用防火墙-centos-7-x" aria-hidden="true">#</a> 禁用防火墙（CentOS 7.x）</h4><ul><li>创建脚本文件：<code>vim /opt/disable-firewalld-playbook.yml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: all
  remote_user: root
  tasks:
    - name: Disable SELinux at next reboot
      selinux:
        state: disabled
    - name: disable firewalld
      command: &quot;{{ item }}&quot;
      with_items:
         - systemctl stop firewalld
         - systemctl disable firewalld
         - setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基础环境-centos-7-x" tabindex="-1"><a class="header-anchor" href="#基础环境-centos-7-x" aria-hidden="true">#</a> 基础环境（CentOS 7.x）</h4><ul><li>创建脚本文件：<code>vim /opt/install-basic-playbook.yml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: all
  remote_user: root
  tasks:
    - name: Disable SELinux at next reboot
      selinux:
        state: disabled
        
    - name: disable firewalld
      command: &quot;{{ item }}&quot;
      with_items:
         - systemctl stop firewalld
         - systemctl disable firewalld
         - setenforce 0
         
    - name: install-basic
      command: &quot;{{ item }}&quot;
      with_items:
         - yum install -y zip unzip lrzsz git epel-release wget htop deltarpm
         
    - name: install-vim
      shell: &quot;{{ item }}&quot;
      with_items:
         - yum install -y vim
         - curl https://raw.githubusercontent.com/wklken/vim-for-server/master/vimrc &gt; ~/.vimrc
         
    - name: install-docker
      shell: &quot;{{ item }}&quot;
      with_items:
         - yum install -y yum-utils device-mapper-persistent-data lvm2
         - yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
         - yum makecache fast
         - yum install -y docker-ce
         - systemctl start docker.service
         - docker run hello-world
         
    - name: install-docker-compose
      shell: &quot;{{ item }}&quot;
      with_items:
         - curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-\`uname -s\`-\`uname -m\` -o /usr/local/bin/docker-compose
         - chmod +x /usr/local/bin/docker-compose
         - docker-compose --version
         - systemctl restart docker.service
         - systemctl enable docker.service
         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行命令：<code>ansible-playbook /opt/install-basic-playbook.yml</code></li></ul><h4 id="修改-hosts" tabindex="-1"><a class="header-anchor" href="#修改-hosts" aria-hidden="true">#</a> 修改 hosts</h4><ul><li>创建脚本文件：<code>vim /opt/hosts-playbook.yml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: all
  remote_user: root
  tasks:
    - name: update hosts
      blockinfile: 
        path: /etc/hosts
        block: |
          192.168.0.223     linux01
          192.168.0.223     linux02
          192.168.0.223     linux03
          192.168.0.223     linux04
          192.168.0.223     linux05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行命令：<code>ansible-playbook /opt/hosts-playbook.yml</code></li></ul><h4 id="部署-jdk" tabindex="-1"><a class="header-anchor" href="#部署-jdk" aria-hidden="true">#</a> 部署 JDK</h4><ul><li>创建脚本文件：<code>vim /opt/jdk8-playbook.yml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: hadoop-host
  remote_user: root
  vars:
    java_install_folder: /usr/local
  tasks:
    - name: copy jdk
      copy: src=/opt/jdk-8u181-linux-x64.tar.gz dest={{ java_install_folder }}
      
    - name: tar jdk
      shell: chdir={{ java_install_folder }} tar zxf jdk-8u181-linux-x64.tar.gz
      
    - name: set JAVA_HOME
      blockinfile: 
        path: /etc/profile
        marker: &quot;#{mark} JDK ENV&quot;
        block: |
          JAVA_HOME={{ java_install_folder }}/jdk1.8.0_181
          JRE_HOME=$JAVA_HOME/jre
          PATH=$PATH:$JAVA_HOME/bin
          CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
          export JAVA_HOME
          export JRE_HOME
          export PATH
          export CLASSPATH
    
    - name: source profile
      shell: source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行命令：<code>ansible-playbook /opt/jdk8-playbook.yml</code></li></ul><h4 id="部署-hadoop-集群" tabindex="-1"><a class="header-anchor" href="#部署-hadoop-集群" aria-hidden="true">#</a> 部署 Hadoop 集群</h4><ul><li>创建脚本文件：<code>vim /opt/hadoop-playbook.yml</code></li><li>刚学 Ansible，不好动配置文件，所以就只保留环境部分的设置，其他部分自行手工~</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: hadoop-host
  remote_user: root
  tasks:
    - name: Creates directory
      file:
        path: /data/hadoop/hdfs/name
        state: directory
    - name: Creates directory
      file:
        path: /data/hadoop/hdfs/data
        state: directory
    - name: Creates directory
      file:
        path: /data/hadoop/hdfs/tmp
        state: directory

    - name: set HADOOP_HOME
      blockinfile: 
        path: /etc/profile
        marker: &quot;#{mark} HADOOP ENV&quot;
        block: |
          HADOOP_HOME=/usr/local/hadoop
          PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
          export HADOOP_HOME
          export PATH
    
    - name: source profile
      shell: source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行命令：<code>ansible-playbook /opt/hadoop-playbook.yml</code></li></ul><hr><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,33),q={href:"https://www.jianshu.com/p/081139f73613",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.the5fire.com/ansible-guide-cn.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.jianshu.com/p/62388a4fcbc6",target:"_blank",rel:"noopener noreferrer"},V={href:"http://showme.codes/2017-06-12/ansible-introduce/",target:"_blank",rel:"noopener noreferrer"};function S(J,T){const n=d("ExternalLinkIcon");return r(),t("div",null,[c,u,e("ul",null,[e("li",null,[i("Ansible 官网："),e("a",v,[i("https://www.ansible.com/"),l(n)])]),e("li",null,[i("Ansible 官网 Github："),e("a",m,[i("https://github.com/ansible/ansible"),l(n)])]),e("li",null,[i("Ansible 官网文档："),e("a",b,[i("https://docs.ansible.com//"),l(n)])]),h]),p,e("ul",null,[e("li",null,[i("官网说明："),e("a",_,[i("https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"),l(n)])]),x]),g,e("ul",null,[k,e("li",null,[i("官网对此的配置说明："),e("a",f,[i("https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#hosts-and-groups"),l(n)])])]),y,e("ul",null,[e("li",null,[i("ad hoc 官网："),e("a",A,[i("https://docs.ansible.com/ansible/latest/user_guide/intro_adhoc.html"),l(n)])])]),w,e("ul",null,[e("li",null,[i("官网："),e("a",H,[i("https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html"),l(n)])]),e("li",null,[i("一些语法："),e("a",O,[i("https://docs.ansible.com/ansible/latest/modules/command_module.html"),l(n)])]),E]),j,e("ul",null,[e("li",null,[e("a",q,[i("ANSIBLE模块 - shell和command区别"),l(n)])]),e("li",null,[e("a",P,[i("https://www.the5fire.com/ansible-guide-cn.html"),l(n)])]),e("li",null,[e("a",M,[i("https://www.jianshu.com/p/62388a4fcbc6"),l(n)])]),e("li",null,[e("a",V,[i("http://showme.codes/2017-06-12/ansible-introduce/"),l(n)])])])])}const D=a(o,[["render",S],["__file","Ansible-Install-And-Settings.html.vue"]]);export{D as default};
