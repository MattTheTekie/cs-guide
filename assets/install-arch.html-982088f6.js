import{_ as a,r,o as i,c as o,d as e,e as n,b as t,a as c}from"./app-3d979d38.js";const s={},d=e("h1",{id:"linux刻录教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux刻录教程","aria-hidden":"true"},"#"),n(" linux刻录教程")],-1),h={href:"https://link.jianshu.com?t=https://www.archlinux.org/download/",target:"_blank",rel:"noopener noreferrer"},u=c("<li>VMware创建虚拟机，类型选择 linux2.6内核，一路下一步即可。 开启虚拟机。</li><li>分区，输入fdisk /dev/sda，输入n创建分区，选择p，再输入w保存退出</li><li>格式化分区，输入命令mkfs.ext4 /dev/sda1</li><li>格式化结束后，就可以挂载分区了。输入mount /dev/sda1 /mnt</li><li>修改镜像源，因为安装arch还需要下载，所以必须保证虚拟机处于联网状态。可以采用NAT模式</li><li>删除其他的源，保存中国地区的。vi /etc/pacman.d/mirrorslist 建议将163的复制到最前面。</li><li>现在可以进行安装了, 输入pacstrap /mnt base</li><li>安装完毕后。输入：arch-chroot /mnt</li><li>此时安装grub。输入：pacman -S grub</li><li>安装配置grub。输入：grub-install /dev/sda</li><li>最后配置boot文件。输入：grub-mkconfig -o /boot/grub/grub.cfg</li><li>reboot 尽情的玩耍吧~~</li>",12),m={href:"https://wangchujiang.com/linux-command/",target:"_blank",rel:"noopener noreferrer"};function _(p,f){const l=r("ExternalLinkIcon");return i(),o("div",null,[d,e("ul",null,[e("li",null,[n("下载Arch安装盘 "),e("a",h,[n("下载地址"),t(l)])]),u]),e("p",null,[e("a",m,[n("https://wangchujiang.com/linux-command/"),t(l)])])])}const b=a(s,[["render",_],["__file","install-arch.html.vue"]]);export{b as default};
