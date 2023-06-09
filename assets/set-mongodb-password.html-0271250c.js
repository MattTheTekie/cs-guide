import{_ as a,o as n,c as s,a as e}from"./app-3d979d38.js";const p={},t=e(`<h1 id="mongodb设置密码" tabindex="-1"><a class="header-anchor" href="#mongodb设置密码" aria-hidden="true">#</a> mongodb设置密码</h1><h2 id="超级管理员" tabindex="-1"><a class="header-anchor" href="#超级管理员" aria-hidden="true">#</a> 超级管理员</h2><h3 id="设置-admin" tabindex="-1"><a class="header-anchor" href="#设置-admin" aria-hidden="true">#</a> 设置 admin</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>use admin  
db<span class="token punctuation">.</span><span class="token function">createUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 用户名</span>
  <span class="token literal-property property">pwd</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 密码</span>
  <span class="token literal-property property">roles</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 角色</span>
    <span class="token literal-property property">db</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span>  <span class="token comment">// 数据库</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置完成，可以输入 <code>show users</code> 查看是否设置成功。</p><h3 id="开启验证" tabindex="-1"><a class="header-anchor" href="#开启验证" aria-hidden="true">#</a> 开启验证</h3><p>找到 MongoDB 安装目录，打开 <code>mongod.cfg</code>文件，找到以下这句：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#security:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>security<span class="token punctuation">:</span>
  authorization<span class="token punctuation">:</span> enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启-mongodb" tabindex="-1"><a class="header-anchor" href="#重启-mongodb" aria-hidden="true">#</a> 重启 MongoDB</h3><p>打开任务管理器</p><p><img src="https://upload-images.jianshu.io/upload_images/1128764-564fe60c63ce951b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/788/format/webp#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=LnrTq&amp;originHeight=600&amp;originWidth=788&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><p>任务管理器界面</p><p>找到 MongoDB 服务，右键重新启动。</p><p>这时，我们可以打开 powershell 连接数据库：</p><p>输入 mongo：</p><p><img src="https://upload-images.jianshu.io/upload_images/1128764-08b60c7bdc8e9010.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/657/format/webp#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=TACUi&amp;originHeight=84&amp;originWidth=657&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><p>截图</p><p>显示连接成功，但是当我们输入其他指令时，会提示没有权限：</p><p><img src="https://upload-images.jianshu.io/upload_images/1128764-5b9c49021375919b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/622/format/webp#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=wR9q5&amp;originHeight=218&amp;originWidth=622&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><p>截图</p><h3 id="登录数据库" tabindex="-1"><a class="header-anchor" href="#登录数据库" aria-hidden="true">#</a> 登录数据库</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方式一</span>
mongo
use admin
db<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 方式二</span>
mongo admin <span class="token operator">-</span>u admin <span class="token operator">-</span>p <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们就可以正常访问和操作数据了。</p><h2 id="添加数据库用户" tabindex="-1"><a class="header-anchor" href="#添加数据库用户" aria-hidden="true">#</a> 添加数据库用户</h2><p>我们除了可以设置数据库的超级管理员以外，还可以给每个数据库设置单独的管理员。其只有操作单独数据的一定权限。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>use test  <span class="token comment">// 跳转到需要添加用户的数据库</span>
db<span class="token punctuation">.</span><span class="token function">createUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;fooadmin&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 用户名</span>
  <span class="token literal-property property">pwd</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 密码</span>
  <span class="token literal-property property">roles</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">&#39;readWrite&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 角色</span>
    <span class="token literal-property property">db</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>  <span class="token comment">// 数据库名</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>show users  <span class="token comment">// 查看当前库下的用户</span>

db<span class="token punctuation">.</span><span class="token function">dropUser</span><span class="token punctuation">(</span><span class="token string">&#39;testadmin&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 删除用户</span>

db<span class="token punctuation">.</span><span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">pwd</span><span class="token operator">:</span> <span class="token string">&#39;654321&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 修改用户密码</span>

db<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;654321&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 密码认证</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-数据库默认角色" tabindex="-1"><a class="header-anchor" href="#mongodb-数据库默认角色" aria-hidden="true">#</a> MongoDB 数据库默认角色</h2><ol><li>数据库用户角色：read、readWrite</li><li>数据库管理角色：dbAdmin、dbOwner、userAdmin</li><li>集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager</li><li>备份恢复角色：backup、restore</li><li>所有数据库角色： readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、 dbAdminAnyDatabase</li><li>超级用户角色：root</li></ol>`,32),i=[t];function o(r,c){return n(),s("div",null,i)}const d=a(p,[["render",o],["__file","set-mongodb-password.html.vue"]]);export{d as default};
