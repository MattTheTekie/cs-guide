import{_ as t,r as l,o as i,c as d,d as e,e as n,b as a,a as o}from"./app-3d979d38.js";const r={},c=e("h1",{id:"powershell命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#powershell命令","aria-hidden":"true"},"#"),n(" powershell命令")],-1),u=e("h2",{id:"powershell模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#powershell模块","aria-hidden":"true"},"#"),n(" powershell模块")],-1),p={href:"https://learn.microsoft.com/zh-cn/powershell/scripting/developer/module/understanding-a-windows-powershell-module?view=powershell-7.3",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="删除命令" tabindex="-1"><a class="header-anchor" href="#删除命令" aria-hidden="true">#</a> 删除命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除指定文件
 Remove-Item * -Include *.json -Recurse
# 删除文件而保留文件夹
# 「This example deletes all of the files that have names that include a dot (.) 」
 Remove-Item * -Include *.* -Exclude *.md -Recurse
# 删除包含指定字符的文件夹
# 一定要注意加上通配符「*bin*」，否则只会删除bin这样的文件夹
Remove-Item * -Recurse -Include *bin*

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取文件夹内文件个数" tabindex="-1"><a class="header-anchor" href="#获取文件夹内文件个数" aria-hidden="true">#</a> 获取文件夹内文件个数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@(Get-ChildItem -Exclude .\\node_modules\\,.cache,.temp -r).Count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取文件夹大小" tabindex="-1"><a class="header-anchor" href="#获取文件夹大小" aria-hidden="true">#</a> 获取文件夹大小</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch((ls -r|measure -sum Length).Sum) {
  {$_ -gt 1GB} {
    &#39;{0:0.0} GiB&#39; -f ($_/1GB)
    break
  }
  {$_ -gt 1MB} {
    &#39;{0:0.0} MiB&#39; -f ($_/1MB)
    break
  }
  {$_ -gt 1KB} {
    &#39;{0:0.0} KiB&#39; -f ($_/1KB)
    break
  }
  default {&quot;$_ bytes&quot; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历一个文件夹-并排除node-modules" tabindex="-1"><a class="header-anchor" href="#遍历一个文件夹-并排除node-modules" aria-hidden="true">#</a> 遍历一个文件夹,并排除node_modules</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>@<span class="token punctuation">(</span><span class="token function">Get-ChildItem</span>   <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>r<span class="token punctuation">)</span><span class="token punctuation">.</span>Count

<span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Path E:\\WebstormProjects\\  <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>r

多层
@<span class="token punctuation">(</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">|</span><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Exclude node_module*<span class="token punctuation">)</span><span class="token punctuation">.</span>Count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除-文件" tabindex="-1"><a class="header-anchor" href="#删除-文件" aria-hidden="true">#</a> 删除._文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dir ._* /a/s 

del ._* /a/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="powershell查看运行时间" tabindex="-1"><a class="header-anchor" href="#powershell查看运行时间" aria-hidden="true">#</a> powershell查看运行时间</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Measure-Command</span> <span class="token punctuation">{</span>ping baidu<span class="token punctuation">.</span>com<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>TotalSeconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在我的配置文件里面引用模块" tabindex="-1"><a class="header-anchor" href="#在我的配置文件里面引用模块" aria-hidden="true">#</a> 在我的配置文件里面引用模块</h3><p><strong>Microsoft.PowerShell_profile.ps1</strong></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token punctuation">.</span> <span class="token variable">$PSScriptRoot</span>\\myalias<span class="token punctuation">.</span>ps1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="命令行运行wpf" tabindex="-1"><a class="header-anchor" href="#命令行运行wpf" aria-hidden="true">#</a> 命令行运行wpf</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dotnet watch run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过console.write不会生效 需要把<code>&lt;OutputType&gt;WinExe&lt;/OutputType&gt;</code>改为<code>&lt;OutputType&gt;Exe&lt;/OutputType&gt;</code></p><h2 id="dotnet发布" tabindex="-1"><a class="header-anchor" href="#dotnet发布" aria-hidden="true">#</a> dotnet发布</h2><p>发布单文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Project Sdk=&quot;Microsoft.NET.Sdk&quot;&gt;

  &lt;PropertyGroup&gt;
    &lt;OutputType&gt;Exe&lt;/OutputType&gt;
    &lt;TargetFramework&gt;net6.0&lt;/TargetFramework&gt;
    &lt;PublishSingleFile&gt;true&lt;/PublishSingleFile&gt;
    &lt;SelfContained&gt;true&lt;/SelfContained&gt;
    &lt;RuntimeIdentifier&gt;win-x64&lt;/RuntimeIdentifier&gt;
    &lt;PublishReadyToRun&gt;true&lt;/PublishReadyToRun&gt;
  &lt;/PropertyGroup&gt;

&lt;/Project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),h={href:"https://learn.microsoft.com/zh-cn/dotnet/core/deploying/single-file/overview?tabs=cli",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const s=l("ExternalLinkIcon");return i(),d("div",null,[c,u,e("p",null,[e("a",p,[n("https://learn.microsoft.com/zh-cn/powershell/scripting/developer/module/understanding-a-windows-powershell-module?view=powershell-7.3"),a(s)])]),v,e("p",null,[e("a",h,[n("https://learn.microsoft.com/zh-cn/dotnet/core/deploying/single-file/overview?tabs=cli"),a(s)])])])}const x=t(r,[["render",m],["__file","powershell.html.vue"]]);export{x as default};
