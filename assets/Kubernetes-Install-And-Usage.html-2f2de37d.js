import{_ as r,r as l,o as a,c as i,d as e,e as t,b as n,a as s}from"./app-3d979d38.js";const u={},d=s('<h1 id="kubernetes-部署" tabindex="-1"><a class="header-anchor" href="#kubernetes-部署" aria-hidden="true">#</a> Kubernetes 部署</h1><h2 id="环境说明" tabindex="-1"><a class="header-anchor" href="#环境说明" aria-hidden="true">#</a> 环境说明</h2><ul><li>CentOS 7.4</li><li>购买自阿里云普通的 ECS 华南地区（如果你是购买美国地区的服务器，则直接使用 kubespray 原项目，那些镜像地址不用修改，其他照着文档即可）</li><li>所有机子都是干净的不需要先安装 Docker 等其他容器相关的东西</li><li>建议还是用美国服务器，不然各种网络的坑</li></ul><table><thead><tr><th>机器简称</th><th>内网 IP 地址</th><th>部署软件</th><th>系统环境</th><th>硬件配置</th></tr></thead><tbody><tr><td>操作机</td><td>172.20.229.224</td><td>ansible</td><td>CentOS 7.4</td><td>1 vCPU + 2 GB</td></tr><tr><td>node1</td><td>172.20.229.225</td><td>master</td><td>CentOS 7.4</td><td>1 vCPU + 4 GB</td></tr><tr><td>node2</td><td>172.20.229.226</td><td>worker</td><td>CentOS 7.4</td><td>1 vCPU + 4 GB</td></tr><tr><td>node3</td><td>172.20.229.227</td><td>worker</td><td>CentOS 7.4</td><td>1 vCPU + 4 GB</td></tr></tbody></table><h2 id="所有机子都需要的环境准备" tabindex="-1"><a class="header-anchor" href="#所有机子都需要的环境准备" aria-hidden="true">#</a> 所有机子都需要的环境准备</h2><ul><li>关闭 SELinux <ul><li>编辑配置文件：<code>vim /etc/selinux/config</code></li><li>把 <code>SELINUX=enforcing</code> 改为 <code>SELINUX=disabled</code></li></ul></li></ul><p>所有节点关闭防火墙：<code>systemctl stop firewalld &amp;&amp; systemctl disable firewalld</code></p><p>安装自己常用的一些组件（非必须）：vim zsh zip unzip lrzsz git</p><h2 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程" aria-hidden="true">#</a> 安装过程</h2><h4 id="操作机安装-ansible" tabindex="-1"><a class="header-anchor" href="#操作机安装-ansible" aria-hidden="true">#</a> 操作机安装 ansible</h4><h1 id="yum-install-y-epel-releaseyum-install-y-python34-python34-pip-python-pip-python-netaddr-ansible-gitpip-install-upgrade-jinja2yum-install-y-gcc-libffi-devel-python-devel-openssl-devel" tabindex="-1"><a class="header-anchor" href="#yum-install-y-epel-releaseyum-install-y-python34-python34-pip-python-pip-python-netaddr-ansible-gitpip-install-upgrade-jinja2yum-install-y-gcc-libffi-devel-python-devel-openssl-devel" aria-hidden="true">#</a> ================================= yum install -y epel-release yum install -y python34 python34-pip python-pip python-netaddr ansible git pip install --upgrade Jinja2 yum install -y gcc libffi-devel python-devel openssl-devel</h1><p>操作机免密码登录到其他节点</p><p>如果还不懂可以具体看我的这篇文章： ssh-keygen ssh-copy-id -i /root/.ssh/id_rsa.pub -p 22 root@172.20.229.225 ssh-copy-id -i /root/.ssh/id_rsa.pub -p 22 root@172.20.229.226 ssh-copy-id -i /root/.ssh/id_rsa.pub -p 22 root@172.20.229.227</p><p>测试下是否可以免登陆： ssh -p 22 root@172.20.229.225 ssh -p 22 root@172.20.229.226 ssh -p 22 root@172.20.229.227</p><h4 id="修改-kubespray-项目配置" tabindex="-1"><a class="header-anchor" href="#修改-kubespray-项目配置" aria-hidden="true">#</a> 修改 kubespray 项目配置</h4>',15),c={href:"https://github.com/kubernetes-incubator/kubespray",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"在本地机子上",-1),h={href:"https://github.com/kubernetes-incubator/kubespray.git",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"当前时间（2018-02）最新版本是：v2.4.0，所以我 checkout v2.4.0 的 tag",-1),m=e("p",null,"用 IntelliJ IDEA 打开该项目，然后批量替换：",-1),b=e("li",null,[e("code",null,"gcr.io/"),t(" 替换成："),e("code",null,"registry.cn-hangzhou.aliyuncs.com/")],-1),v={href:"https://cloud.google.com/container-registry/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://dev.aliyun.com/search.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},_=s(`<p>======================================================</p><p>cd /opt/kubespray &amp;&amp; cp -rfp inventory/sample inventory/mycluster</p><p>修改：inventory/mycluster/hosts.ini python3 contrib/inventory_builder/inventory.py 172.20.229.225 172.20.229.226 172.20.229.227</p><h1 id="review-and-change-parameters-under-inventory-mycluster-group-vars" tabindex="-1"><a class="header-anchor" href="#review-and-change-parameters-under-inventory-mycluster-group-vars" aria-hidden="true">#</a> Review and change parameters under <code>inventory/mycluster/group_vars</code></h1><p>cat inventory/mycluster/group_vars/all.yml cat inventory/mycluster/group_vars/k8s-cluster.yml</p><p>修改 /kubespray/inventory/mycluster/hosts.ini，改为如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node1 ansible_ssh_host=172.20.229.225 ansible_user=root ip=172.20.229.225
node2 ansible_ssh_host=172.20.229.226 ansible_user=root ip=172.20.229.226
node3 ansible_ssh_host=172.20.229.227 ansible_user=root ip=172.20.229.227

[kube-master]
node1

[etcd]
node1

[kube-node]
node2
node3

[k8s-cluster:children]
kube-node
kube-master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后把这个项目压缩成 zip 上传到操作机的 /opt 根目录上，然后解压。</p><p>然后在操作机上执行：<code>cd /opt/kubespray &amp;&amp; ansible-playbook -i inventory/mycluster/hosts.ini cluster.yml</code> 然后会开始输出一大堆执行任务的东西，等等吧，预计需要 20~60 分钟左右。</p><p>然后报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Thursday 08 February 2018  18:03:14 +0800 (0:00:00.038)       0:04:14.420 ***** 
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (4 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (4 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (4 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (3 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (3 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (3 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (2 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (2 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (2 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (1 retries left).
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (1 retries left).
fatal: [node1]: FAILED! =&gt; {&quot;attempts&quot;: 4, &quot;changed&quot;: true, &quot;cmd&quot;: [&quot;/usr/bin/docker&quot;, &quot;pull&quot;, &quot;registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64:1.1.2&quot;], &quot;delta&quot;: &quot;0:00:00.413852&quot;, &quot;end&quot;: &quot;2018-02-08 18:03:38.396245&quot;, &quot;msg&quot;: &quot;non-zero return code&quot;, &quot;rc&quot;: 1, &quot;start&quot;: &quot;2018-02-08 18:03:37.982393&quot;, &quot;stderr&quot;: &quot;Error response from daemon: repository registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64 not found: does not exist or no pull access&quot;, &quot;stderr_lines&quot;: [&quot;Error response from daemon: repository registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64 not found: does not exist or no pull access&quot;], &quot;stdout&quot;: &quot;&quot;, &quot;stdout_lines&quot;: []}
FAILED - RETRYING: container_download | Download containers if pull is required or told to always pull (all nodes) (1 retries left).
fatal: [node3]: FAILED! =&gt; {&quot;attempts&quot;: 4, &quot;changed&quot;: true, &quot;cmd&quot;: [&quot;/usr/bin/docker&quot;, &quot;pull&quot;, &quot;registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64:1.1.2&quot;], &quot;delta&quot;: &quot;0:00:00.421977&quot;, &quot;end&quot;: &quot;2018-02-08 18:03:42.334875&quot;, &quot;msg&quot;: &quot;non-zero return code&quot;, &quot;rc&quot;: 1, &quot;start&quot;: &quot;2018-02-08 18:03:41.912898&quot;, &quot;stderr&quot;: &quot;Error response from daemon: repository registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64 not found: does not exist or no pull access&quot;, &quot;stderr_lines&quot;: [&quot;Error response from daemon: repository registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64 not found: does not exist or no pull access&quot;], &quot;stdout&quot;: &quot;&quot;, &quot;stdout_lines&quot;: []}
fatal: [node2]: FAILED! =&gt; {&quot;attempts&quot;: 4, &quot;changed&quot;: true, &quot;cmd&quot;: [&quot;/usr/bin/docker&quot;, &quot;pull&quot;, &quot;registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64:1.1.2&quot;], &quot;delta&quot;: &quot;0:00:00.390301&quot;, &quot;end&quot;: &quot;2018-02-08 18:03:46.246213&quot;, &quot;msg&quot;: &quot;non-zero return code&quot;, &quot;rc&quot;: 1, &quot;start&quot;: &quot;2018-02-08 18:03:45.855912&quot;, &quot;stderr&quot;: &quot;Error response from daemon: repository registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64 not found: does not exist or no pull access&quot;, &quot;stderr_lines&quot;: [&quot;Error response from daemon: repository registry.cn-hangzhou.aliyuncs.com/google_containers/cluster-proportional-autoscaler-amd64 not found: does not exist or no pull access&quot;], &quot;stdout&quot;: &quot;&quot;, &quot;stdout_lines&quot;: []}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明这个镜像在阿里云没有，所以我有在 docker 官网找了下，有一个这个：<code>mirrorgooglecontainers/cluster-proportional-autoscaler-amd64</code></p><p>建议你可以找个有 docker 的服务器试一下：<code>docker pull mirrorgooglecontainers/cluster-proportional-autoscaler-amd64</code>，如果能下载，那就说明没问题了。 同时也发现这个 docker hub 用户是北京的，应该同道。</p><p>然后又报了下面这个错误。主要是这个脚本：/usr/local/bin/etcd-scripts/make-ssl-etcd.sh 有这个错误：$&#39;\\r&#39;: command not found 而这个脚本是来自操作机上的 /opt/kubespray/roles/etcd/files 目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fatal: [node1 -&gt; 172.20.229.225]: FAILED! =&gt; {&quot;changed&quot;: true, &quot;cmd&quot;: [&quot;bash&quot;, &quot;-x&quot;, &quot;/usr/local/bin/etcd-scripts/make-ssl-etcd.sh&quot;, &quot;-f&quot;, &quot;/etc/ssl/etcd/openssl.conf&quot;, &quot;-d&quot;, &quot;/etc/ssl/etcd/ssl&quot;], &quot;delta&quot;: &quot;0:00:00.012822&quot;, &quot;end&quot;: &quot;2018-02-08 18:42:09.815776&quot;, &quot;msg&quot;: &quot;non-zero return code&quot;, &quot;rc&quot;: 2, &quot;start&quot;: &quot;2018-02-08 18:42:09.802954&quot;, &quot;stderr&quot;: &quot;+ $&#39;\\\\r&#39;\\n/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 2: $&#39;\\\\r&#39;: command not found\\n+ $&#39;\\\\r&#39;\\n/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 16: $&#39;\\\\r&#39;: command not found\\n+ set -o $&#39;errexit\\\\r&#39;\\n/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 17: set: errexit\\r: invalid option name\\n+ set -o $&#39;pipefail\\\\r&#39;\\n/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 18: set: pipefail\\r: invalid option name\\n/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 19: syntax error near unexpected token \`$&#39;\\\\r&#39;&#39;\\n/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 19: \`usage()\\r&#39;&quot;, &quot;stderr_lines&quot;: [&quot;+ $&#39;\\\\r&#39;&quot;, &quot;/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 2: $&#39;\\\\r&#39;: command not found&quot;, &quot;+ $&#39;\\\\r&#39;&quot;, &quot;/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 16: $&#39;\\\\r&#39;: command not found&quot;, &quot;+ set -o $&#39;errexit\\\\r&#39;&quot;, &quot;/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 17: set: errexit&quot;, &quot;: invalid option name&quot;, &quot;+ set -o $&#39;pipefail\\\\r&#39;&quot;, &quot;/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 18: set: pipefail&quot;, &quot;: invalid option name&quot;, &quot;/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 19: syntax error near unexpected token \`$&#39;\\\\r&#39;&#39;&quot;, &quot;/usr/local/bin/etcd-scripts/make-ssl-etcd.sh: line 19: \`usage()&quot;, &quot;&#39;&quot;], &quot;stdout&quot;: &quot;&quot;, &quot;stdout_lines&quot;: []}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们需要操作这个机节点做这样的操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y dos2unix unix2dos

cd /opt/kubespray/roles/etcd/files &amp;&amp; dos2unix make-ssl-etcd.sh
cd /opt/kubespray/roles/kubernetes/secrets/files &amp;&amp; dos2unix make-ssl.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h4><p>SSH 连上 master 节点：ssh root@172.20.229.225 输入：<code>kubectl get nodes</code></p><p>展示出如下信息： NAME STATUS AGE VERSION node1 Ready,SchedulingDisabled 1m v1.6.1+coreos.0 node2 Ready 1m v1.6.1+coreos.0 node3 Ready 1m v1.6.1+coreos.0</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,21),f={href:"http://www.wisely.top/2017/05/16/kargo-ansible-kubernetes/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/wiselyman/kubespray",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"======================================================",-1),w=e("p",null,"安装bzip2软件",-1),E=e("p",null,"yum install -y bzip2",-1),I=e("p",null,"tar -xjvf k8s_images.tar.bz2",-1),D=e("p",null,"设置 hostname",-1),R=e("p",null,"hostnamectl --static set-hostname k8s-master",-1),z=e("p",null,"hostnamectl --static set-hostname k8s-node-1",-1),A=e("p",null,"在master和slave的/etc/hosts文件中均加入以下内容：",-1),L=e("p",null,"172.18.218.96 k8s-master 172.18.218.96 etcd 172.18.218.96 registry 172.18.218.97 k8s-node-1",-1);function N(F,G){const o=l("ExternalLinkIcon");return a(),i("div",null,[d,e("ul",null,[e("li",null,[t("kubespray 项目官网："),e("a",c,[t("https://github.com/kubernetes-incubator/kubespray"),n(o)])])]),p,e("p",null,[t("git clone "),e("a",h,[t("https://github.com/kubernetes-incubator/kubespray.git"),n(o)])]),q,m,e("ul",null,[b,e("li",null,[t("因为 gcr.io 这个网站的本地址是："),e("a",v,[t("https://cloud.google.com/container-registry/"),n(o)]),t("，国内的环境当然就没资格上了，所以才要替换。")]),e("li",null,[t("但是需要注意的是，官网的这些镜像阿里云不一定有，所以稳妥点，你最好可以去阿里云检查下的："),e("a",y,[t("https://dev.aliyun.com/search.html"),n(o)]),t("，或者是："),e("a",g,[t("https://hub.docker.com/"),n(o)])])]),_,e("ul",null,[e("li",null,[e("a",f,[t("http://www.wisely.top/2017/05/16/kargo-ansible-kubernetes/"),n(o)])]),e("li",null,[e("a",k,[t("https://github.com/wiselyman/kubespray"),n(o)])])]),x,w,E,I,D,R,z,A,L])}const T=r(u,[["render",N],["__file","Kubernetes-Install-And-Usage.html.vue"]]);export{T as default};
