import{_ as t,o as c,c as a,a as o}from"./app-3d979d38.js";const e="/cs-guide/assets/tomcat-6865b30b.png",m={},p=o('<h1 id="tomcat使用" tabindex="-1"><a class="header-anchor" href="#tomcat使用" aria-hidden="true">#</a> tomcat使用</h1><p>进入tomcat/bin目录,运行startup.sh 打开<code>http://ip:8080</code>出现tomcat界面</p><p>当程序部署在tomcat上后，需要监测tomcat的性能和监测tomcat的各项指标，如内存使用情况，cpu使用情况，jvm实际情况等，对于这些指标的监控，tomcat提供了访问入口，然而tomcat默认的访问只能在部署tomcat服务的服务器上访问，即不能在其他服务器上访问(禁止远程访问)，为了解决远程访问，需要做一些配置，本文旨在解决该问题。</p><p>一 问题描述 如下页面，表示不能远程访问tocmat管理里面：</p><p>二 解决措施 为了能够远程访问页面，需要做如下配置：</p><p>1.配置<code>apache-tomcat-9.0.27/conf\\tomcat-users.xml</code> 2.配置<code>apache-tomcat-9.0.27\\webapps\\manager\\META-INF\\context.xml</code></p><p>注释掉如下内容 <img src="'+e+'" alt="image.png"> 3.重启tomcat服务</p><p>4.访问</p><p>重新访问 <code>ip:port/manager/status</code>，出现如下界面，表示远程访问设置成功</p><p>输入用户名和密码</p><p>这里的用户名和密码，就使在<code>apache-tomcat-9.0.27/conf\\tomcat-users.xml</code>配置文件中设置的密码，我设置的是<code>admin/admin</code></p>',11),s=[p];function n(d,r){return c(),a("div",null,s)}const _=t(m,[["render",n],["__file","tomcat-config.html.vue"]]);export{_ as default};