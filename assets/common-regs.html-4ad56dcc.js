import{_ as a,r as c,o as t,c as i,d as s,e,b as l,a as o}from"./app-3d979d38.js";const p="/cs-guide/assets/pic3-1ec8508b.jpg",r="/cs-guide/assets/pic2-c43a74b7.jpg",d="/cs-guide/assets/pic1-74bfc0c0.jpg",u={},m=s("h1",{id:"windows常用注册表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows常用注册表","aria-hidden":"true"},"#"),e(" windows常用注册表")],-1),v={class:"hint-container tip"},h=s("p",{class:"hint-container-title"},"提示",-1),_=s("br",null,null,-1),q={href:"https://registry-finder.com/",target:"_blank",rel:"noopener noreferrer"},b=o('<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><p>在使用电脑过程中，很多时候为了设置系统会使用注册表导入操作，但是有时用户会发现，如我们导入一些添加右键菜单功能的注册表，左导入之后菜单、选项变成乱码的问题，那么这是怎么回事，如何解决呢。</p><p><img src="'+p+'" alt="pic"></p><p>解决方法： 1、Windows 10的记事本不断升级有了更多功能，但它也改变了默认保存文件的编码，以前默认的编码是ANSI，但现在默认保存文件的编码是UTF-8。</p><p><img src="'+r+'" alt="pic"></p><p>记事本非常的轻巧，但使用它编辑保存reg文件需要注意编码问题，将使用UTF-8保存的reg文件导入注册表会出现中文乱码。</p><p>2、避免中文乱码的方法也很简单，在记事本中将reg文件另存为，使用ANSI或UTF-16 LE编码保存即可，其中UTF-16 LE是系统导出注册表文件的默认编码。</p><p><img src="'+d+`" alt="pic"></p><p>3、保存后重新导入，可以看到添加的中文菜单已正常显示。</p><h2 id="常用的注册表" tabindex="-1"><a class="header-anchor" href="#常用的注册表" aria-hidden="true">#</a> 常用的注册表</h2><p>添加右键打开cmd(已经不需要了,因为有terminal)</p><div class="language-reg line-numbers-mode" data-ext="reg"><pre class="language-reg"><code>Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\cmd_here]
@=&quot;在此处打开命令行&quot;
&quot;Icon&quot;=&quot;cmd.exe&quot;
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\cmd_here\\command]
@=&quot;\\&quot;C:\\\\Windows\\\\System32\\\\cmd.exe\\&quot;&quot;
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Folder\\shell\\cmdPrompt]
@=&quot;在此处打开命令行&quot;
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Folder\\shell\\cmdPrompt\\command]
@=&quot;\\&quot;C:\\\\Windows\\\\System32\\\\cmd.exe\\&quot; \\&quot;cd %1\\&quot;&quot;
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\shell\\cmd_here]
@=&quot;在此处打开命令行&quot;
&quot;Icon&quot;=&quot;cmd.exe&quot;
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\shell\\cmd_here\\command]
@=&quot;\\&quot;C:\\\\Windows\\\\System32\\\\cmd.exe\\&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加用记事本打开</p><div class="language-regex line-numbers-mode" data-ext="regex"><pre class="language-regex"><code>Windows Registry Editor Version 5<span class="token char-set class-name">.</span>00
<span class="token char-class"><span class="token char-class-punctuation punctuation">[</span>HKEY_LOCAL_MACHINE<span class="token char-set class-name">\\S</span>OFTWARE<span class="token escape">\\M</span>icrosoft<span class="token char-set class-name">\\W</span>indows NT<span class="token escape">\\C</span>urrentVersion<span class="token escape">\\I</span>mage File Execution Options<span class="token escape">\\n</span>otepad.exe<span class="token char-class-punctuation punctuation">]</span></span>
&quot;Debugger&quot;=&quot;<span class="token escape">\\&quot;</span>D:<span class="token special-escape escape">\\\\</span><span class="token special-escape escape">\\\\</span>Program Files<span class="token special-escape escape">\\\\</span><span class="token special-escape escape">\\\\</span>Notepad3<span class="token special-escape escape">\\\\</span><span class="token special-escape escape">\\\\</span>Notepad3<span class="token char-set class-name">.</span>exe<span class="token escape">\\&quot;</span> /z&quot;
<span class="token char-class"><span class="token char-class-punctuation punctuation">[</span>HKEY_CLASSES_ROOT<span class="token special-escape escape">\\*</span><span class="token char-set class-name">\\s</span>hell<span class="token escape">\\用</span>记事本打开<span class="token char-class-punctuation punctuation">]</span></span>
&quot;Icon&quot;=&quot;D:<span class="token special-escape escape">\\\\</span>Program Files<span class="token special-escape escape">\\\\</span>Notepad3<span class="token special-escape escape">\\\\</span>Notepad3<span class="token char-set class-name">.</span>exe&quot;
@=&quot;用记事本打开&quot;
<span class="token char-class"><span class="token char-class-punctuation punctuation">[</span>HKEY_CLASSES_ROOT<span class="token special-escape escape">\\*</span><span class="token char-set class-name">\\s</span>hell<span class="token escape">\\用</span>记事本打开<span class="token escape">\\co</span>mmand<span class="token char-class-punctuation punctuation">]</span></span>
@=&quot;notepad %1 &quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>txt拓展无法用记事本打开</p><div class="language-reg line-numbers-mode" data-ext="reg"><pre class="language-reg"><code>Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\\.txt]
@=&quot;txtfile&quot;
&quot;Content Type&quot;=&quot;text/plain&quot;
[HKEY_CLASSES_ROOT\\.txt\\ShellNew]
&quot;NullFile&quot;=&quot;&quot; [HKEY_CLASSES_ROOT\\txtfile]
@=&quot;文本文档&quot;
[HKEY_CLASSES_ROOT\\txtfile\\shell]
[HKEY_CLASSES_ROOT\\txtfile\\shell\\open]
[HKEY_CLASSES_ROOT\\txtfile\\shell\\open\\command]
@=&quot;NOTEPAD.EXE %1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function g(E,k){const n=c("ExternalLinkIcon");return t(),i("div",null,[m,s("div",v,[h,s("p",null,[e("常用注册表管理工具 regedit"),_,s("a",q,[e("https://registry-finder.com/"),l(n)]),e(" registry workshop(收费)")])]),b])}const C=a(u,[["render",g],["__file","common-regs.html.vue"]]);export{C as default};
