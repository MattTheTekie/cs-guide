import{_ as t,r as i,o,c as l,d as s,e as n,b as p,a}from"./app-3d979d38.js";const c="/cs-guide/assets/img1-6a4e5623.png",r="/cs-guide/assets/image-9338130a.png",u={},v=a(`<h1 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%SystemRoot%\\system32;%INTEL_DEV_REDIST%redist\\intel64\\compiler;%JAVA_HOME%\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;%SystemRoot%;%SystemRoot%\\System32\\Wbem;%SYSTEMROOT%\\System32\\WindowsPowerShell\\v1.0\\;%SYSTEMROOT%\\System32\\OpenSSH\\;C:\\Program Files\\dotnet\\;%NVM_HOME%;%NVM_SYMLINK%;C:\\Android_Reverse\\apkTool;C:\\Go\\bin;C:\\Program Files (x86)\\dotnet-core-uninstall\\;C:\\codeblocks-20.03mingw-nosetup\\MinGW\\bin;C:\\Program Files\\Memurai\\;C:\\Users\\yzqde\\AppData\\Local\\Yarn\\bin;C:\\Users\\yzqde\\.conda\\envs\\condapkg;C:\\Program Files\\Git\\cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>环境变量默认编辑界面是这样的 <img src="`+c+'" alt="image.png"> 编辑编辑文本会变成 <img src="'+r+'" alt="image.png"></p><p>如果出现环境变量path的编辑一直是编辑文本的样式,则需要将<code>%SystemRoot%\\system32</code> 这个变量移到最前面,这样干就变成了列表的样式</p><h2 id="使用powershell编辑环境变量" tabindex="-1"><a class="header-anchor" href="#使用powershell编辑环境变量" aria-hidden="true">#</a> 使用powershell编辑环境变量</h2>',5),m={href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 获取path环境变量</span>
<span class="token variable">$env</span>:path 
<span class="token comment"># 获取用户名</span>
<span class="token variable">$env</span>:USERNAME
<span class="token comment"># env有如下变量: USERPROFILE,username,path,windir,COMPUTERNAME等等</span>

<span class="token comment">#Powershell设置环境变量</span>

<span class="token comment">#查看所有环境变量  </span>
<span class="token function">ls</span> env:

<span class="token comment">#搜索环境变量   </span>
<span class="token function">ls</span> env:NODE*

<span class="token comment">#查看单个环境变量 </span>
<span class="token variable">$env</span>:NODE_ENV

<span class="token comment">#添加/更新环境变量 </span>
<span class="token variable">$env</span>:NODE_ENV=development

<span class="token comment">#删除环境变量        </span>
<span class="token function">del</span> evn:NODE_ENV

<span class="token comment"># 改变path环境变量</span>
<span class="token variable">$env</span>:PATH <span class="token operator">+=</span> <span class="token string">&quot;;<span class="token variable">$env</span>:ERLANG_HOME\\bin;c:\\temp&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用c#语法操作环境变量</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 读取环境变量</span>
<span class="token namespace">[environment]</span>::GetEnvironmentvariable<span class="token punctuation">(</span><span class="token string">&quot;Path&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Machine&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 用户变量</span>
<span class="token namespace">[environment]</span>::SetEnvironmentvariable<span class="token punctuation">(</span><span class="token string">&quot;变量名称&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;变量值&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;User&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 系统变量</span>
<span class="token namespace">[environment]</span>::SetEnvironmentvariable<span class="token punctuation">(</span><span class="token string">&quot;变量名称&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;变量值&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Machine&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#新建和追加环境变量</span>
<span class="token namespace">[environment]</span>::SetEnvironmentvariable<span class="token punctuation">(</span><span class="token string">&quot;GOPATH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;<span class="token variable">$env</span>:USERPROFILE\\gopath&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;User&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#调用命令结果：$(命令)</span>
<span class="token comment">#获取原有用户 PATH 变量：$([environment]::GetEnvironmentvariable(&quot;Path&quot;, &quot;User&quot;))</span>
<span class="token comment">#注意 PATH 中条目以分号结尾</span>
<span class="token namespace">[environment]</span>::SetEnvironmentvariable<span class="token punctuation">(</span><span class="token string">&quot;PATH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$([environment]::GetEnvironmentvariable(&quot;</span>Path<span class="token string">&quot;, &quot;</span>User<span class="token string">&quot;));%GOPATH%\\bin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;User&quot;</span><span class="token punctuation">)</span>

<span class="token namespace">[environment]</span>::SetEnvironmentvariable<span class="token punctuation">(</span><span class="token string">&quot;GOROOT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C:\\go&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Machine&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#调用命令结果：$(命令)</span>
<span class="token comment">#获取原有系统 PATH 变量：$([environment]::GetEnvironmentvariable(&quot;Path&quot;, &quot;Machine&quot;))</span>
<span class="token namespace">[environment]</span>::SetEnvironmentvariable<span class="token punctuation">(</span><span class="token string">&quot;PATH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$([environment]::GetEnvironmentvariable(&quot;</span>Path<span class="token string">&quot;, &quot;</span>Machine<span class="token string">&quot;));%GOROOT%\\bin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Machine&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,2);function k(b,q){const e=i("ExternalLinkIcon");return o(),l("div",null,[v,s("p",null,[n("查看微软官方文档 "),s("a",m,[n("链接"),p(e)]),n(" 注意下面的方法只是临时修改了环境变量")]),d])}const h=t(u,[["render",k],["__file","environment-varibles.html.vue"]]);export{h as default};
