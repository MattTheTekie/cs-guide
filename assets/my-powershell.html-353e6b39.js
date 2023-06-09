import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},p=e(`<h1 id="我的ps配置" tabindex="-1"><a class="header-anchor" href="#我的ps配置" aria-hidden="true">#</a> 我的ps配置</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>查询<code>profile</code>位置: <code>$PROFILE</code></p></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token keyword">function</span> fluship <span class="token punctuation">{</span>
    ipconfig <span class="token operator">/</span>flushdns
<span class="token punctuation">}</span>
<span class="token keyword">function</span> yarnDev <span class="token punctuation">{</span>
    yarn <span class="token operator">--</span>registry=https:<span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npmmirror<span class="token punctuation">.</span>com &amp;&amp; yarn dev
<span class="token punctuation">}</span>
<span class="token keyword">function</span> yarnInstall <span class="token punctuation">{</span>
    yarn install <span class="token operator">--</span>registry=https:<span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npmmirror<span class="token punctuation">.</span>com
<span class="token punctuation">}</span>
<span class="token keyword">function</span> removeItem <span class="token punctuation">{</span>
    <span class="token function">Remove-Item</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force

<span class="token punctuation">}</span>
<span class="token keyword">function</span> getCmdPath<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">start</span> <span class="token punctuation">(</span><span class="token function">Get-ChildItem</span> <span class="token punctuation">(</span><span class="token function">Get-Command</span> <span class="token operator">-</span>Name <span class="token variable">$args</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Source<span class="token punctuation">)</span><span class="token punctuation">.</span>Directory
<span class="token punctuation">}</span>
<span class="token keyword">function</span> deletePnpm <span class="token punctuation">{</span>
    <span class="token function">Copy-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json <span class="token operator">-</span>Destination <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>jsonbak<span class="token punctuation">;</span>
    <span class="token function">Remove-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span> <span class="token string">&quot;pnpm-lock.yml&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Remove-Item</span>  <span class="token string">&quot;pnpm-lock.yml&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">Write-Output</span> <span class="token string">&#39;删除node_modules中&#39;</span>
    pnpm init &amp;&amp; pnpm add axios
    <span class="token function">Remove-Item</span> <span class="token operator">-</span>Force <span class="token operator">-</span>Recurse <span class="token punctuation">.</span>\\node_modules<span class="token punctuation">;</span>
    <span class="token function">Remove-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json<span class="token punctuation">;</span>
    <span class="token function">Copy-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>jsonbak <span class="token operator">-</span>Destination <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json<span class="token punctuation">;</span>
    <span class="token function">Remove-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>jsonbak
    <span class="token comment"># 删除文件名中包含lock字符的文件</span>
    <span class="token function">Remove-Item</span>   <span class="token string">&#39;*lock*&#39;</span>
    <span class="token function">Write-Output</span> <span class="token string">&#39;已完成&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> deleteNodemodules <span class="token punctuation">{</span>
    <span class="token function">Copy-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json <span class="token operator">-</span>Destination <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>jsonbak<span class="token punctuation">;</span>
    <span class="token function">Remove-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json<span class="token punctuation">;</span>
    <span class="token function">Write-Output</span> <span class="token string">&#39;删除node_modules中&#39;</span>
    yarn init <span class="token operator">-</span>y &amp;&amp; yarn add axios<span class="token punctuation">;</span>

    <span class="token function">Remove-Item</span> <span class="token operator">-</span>Force <span class="token operator">-</span>Recurse <span class="token punctuation">.</span>\\node_modules<span class="token punctuation">;</span>
    <span class="token function">Remove-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json<span class="token punctuation">;</span>
    <span class="token function">Copy-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>jsonbak <span class="token operator">-</span>Destination <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>json<span class="token punctuation">;</span>
    <span class="token function">Remove-Item</span> <span class="token punctuation">.</span>\\package<span class="token punctuation">.</span>jsonbak
    <span class="token comment"># 删除文件名中包含lock字符的文件</span>
    <span class="token function">Remove-Item</span>   <span class="token string">&#39;*lock*&#39;</span>
    <span class="token function">Write-Output</span> <span class="token string">&#39;已完成&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> gbFun <span class="token punctuation">{</span>
    git pull <span class="token operator">--</span>rebase
<span class="token punctuation">}</span>
<span class="token keyword">function</span> glogFun <span class="token punctuation">{</span>
    git log <span class="token operator">--</span>graph <span class="token operator">--</span>pretty=<span class="token string">&#39;%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)&lt;%an&gt;%Creset&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> gpFunc <span class="token punctuation">{</span>
    git add <span class="token operator">-</span>A &amp;&amp; git commit <span class="token operator">-</span>m <span class="token variable">$args</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span> &amp;&amp; git push origin main
<span class="token punctuation">}</span>
<span class="token keyword">function</span> gcacheFun <span class="token punctuation">{</span>
    git checkout <span class="token operator">--</span>orphan dev <span class="token punctuation">;</span>
    git add <span class="token operator">-</span>A <span class="token punctuation">;</span>
    git branch <span class="token operator">-</span>D main <span class="token punctuation">;</span>
    git branch <span class="token operator">-</span>m main <span class="token punctuation">;</span>
    git commit <span class="token operator">-</span>m <span class="token string">&#39;Initial commit&#39;</span> <span class="token punctuation">;</span>
    git push origin main <span class="token operator">-</span>f <span class="token punctuation">;</span>
    git <span class="token function">gc</span> <span class="token operator">--</span>aggressive <span class="token operator">--</span>prune=all
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Format-FileSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">Param</span> <span class="token punctuation">(</span><span class="token namespace">[int]</span><span class="token variable">$size</span><span class="token punctuation">)</span>
    <span class="token keyword">If</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">-gt</span> 1TB<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token namespace">[string]</span>::Format<span class="token punctuation">(</span><span class="token string">&quot;{0:0.00} TB&quot;</span><span class="token punctuation">,</span> <span class="token variable">$size</span> <span class="token operator">/</span> 1TB<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">ElseIf</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">-gt</span> 1GB<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token namespace">[string]</span>::Format<span class="token punctuation">(</span><span class="token string">&quot;{0:0.00} GB&quot;</span><span class="token punctuation">,</span> <span class="token variable">$size</span> <span class="token operator">/</span> 1GB<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">ElseIf</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">-gt</span> 1MB<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token namespace">[string]</span>::Format<span class="token punctuation">(</span><span class="token string">&quot;{0:0.00} MB&quot;</span><span class="token punctuation">,</span> <span class="token variable">$size</span> <span class="token operator">/</span> 1MB<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">ElseIf</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">-gt</span> 1KB<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token namespace">[string]</span>::Format<span class="token punctuation">(</span><span class="token string">&quot;{0:0.00} kB&quot;</span><span class="token punctuation">,</span> <span class="token variable">$size</span> <span class="token operator">/</span> 1KB<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">ElseIf</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">-gt</span> 0<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token namespace">[string]</span>::Format<span class="token punctuation">(</span><span class="token string">&quot;{0:0.00} B&quot;</span><span class="token punctuation">,</span> <span class="token variable">$size</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">Else</span> <span class="token punctuation">{</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> lsmFunc<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Get-ChildItem</span> <span class="token punctuation">|</span> <span class="token function">Select-Object</span> Name<span class="token punctuation">,</span> LastWriteTime<span class="token punctuation">,</span> @<span class="token punctuation">{</span>Name = <span class="token string">&quot;Size&quot;</span><span class="token punctuation">;</span> Expression = <span class="token punctuation">{</span> <span class="token function">Format-FileSize</span><span class="token punctuation">(</span><span class="token variable">$_</span><span class="token punctuation">.</span>Length<span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># # PowerShell parameter completion shim for the dotnet CLI</span>
<span class="token function">Register-ArgumentCompleter</span> <span class="token operator">-</span>Native <span class="token operator">-</span>CommandName dotnet <span class="token operator">-</span>ScriptBlock <span class="token punctuation">{</span>
    <span class="token keyword">param</span><span class="token punctuation">(</span><span class="token variable">$commandName</span><span class="token punctuation">,</span> <span class="token variable">$wordToComplete</span><span class="token punctuation">,</span> <span class="token variable">$cursorPosition</span><span class="token punctuation">)</span>
    dotnet complete <span class="token operator">--</span>position <span class="token variable">$cursorPosition</span> <span class="token string">&quot;<span class="token variable">$wordToComplete</span>&quot;</span> <span class="token punctuation">|</span> <span class="token function">ForEach-Object</span> <span class="token punctuation">{</span>
        <span class="token namespace">[System.Management.Automation.CompletionResult]</span>::new<span class="token punctuation">(</span><span class="token variable">$_</span><span class="token punctuation">,</span> <span class="token variable">$_</span><span class="token punctuation">,</span> <span class="token string">&#39;ParameterValue&#39;</span><span class="token punctuation">,</span> <span class="token variable">$_</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">Remove-Alias</span> <span class="token operator">-</span>Name <span class="token function">ni</span> <span class="token operator">-</span>Force
<span class="token function">Set-Alias</span> yr deleteNodemodules
<span class="token function">Set-Alias</span> pr deletePnpm
<span class="token function">Set-Alias</span> ip fluship
<span class="token function">Set-Alias</span> yd yarnDev
<span class="token function">Set-Alias</span> y yarnInstall
<span class="token function">Set-Alias</span> gitp gpFunc
<span class="token function">Set-Alias</span> gitc gcacheFunq
<span class="token function">Set-Alias</span> gcp getCmdPath
<span class="token function">Set-Alias</span> gb gbFun
<span class="token function">Set-Alias</span> glog glogFun
<span class="token function">Set-Alias</span> kate <span class="token string">&quot;C:\\Program Files\\Kate\\bin\\kate.exe&quot;</span>
<span class="token function">Set-Alias</span> lsm lsmFunc
<span class="token comment"># #chcp 65001</span>
<span class="token comment"># #chcp 936</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$env</span>:TERM_PROGRAM <span class="token operator">-eq</span> <span class="token string">&quot;vscode&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span> <span class="token string">&quot;<span class="token variable">$env</span>:USERPROFILE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\out\\vs\\workbench\\contrib\\terminal\\browser\\media\\shellIntegration.ps1&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># if ($env:TERM_PROGRAM -eq &quot;vscode&quot;) { . &quot;$(code --locate-shell-integration-path pwsh)&quot; }</span>
<span class="token comment"># # PSReadLine</span>
<span class="token function">Import-Module</span> PSReadLine
<span class="token function">Import-Module</span> <span class="token operator">-</span>Name Terminal-Icons
<span class="token comment"># # Enable Prediction History</span>
<span class="token function">Set-PSReadLineOption</span> <span class="token operator">-</span>PredictionSource History
<span class="token comment"># # Advanced Autocompletion for arrow keys</span>
<span class="token function">Set-PSReadlineKeyHandler</span> <span class="token operator">-</span>Key UpArrow <span class="token operator">-</span><span class="token keyword">Function</span> HistorySearchBackward
<span class="token function">Set-PSReadlineKeyHandler</span> <span class="token operator">-</span>Key DownArrow <span class="token operator">-</span><span class="token keyword">Function</span> HistorySearchForward
<span class="token function">Import-Module</span> posh-git
oh-my-posh init pwsh <span class="token operator">--</span>config <span class="token string">&quot;<span class="token variable">$env</span>:POSH_THEMES_PATH\\negligible.omp.json&quot;</span> <span class="token punctuation">|</span> <span class="token function">Invoke-Expression</span>
<span class="token comment">#</span>
<span class="token comment"># #conda activate condapkg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载sg源码的配置" tabindex="-1"><a class="header-anchor" href="#下载sg源码的配置" aria-hidden="true">#</a> 下载sg源码的配置</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$snapName</span> = <span class="token string">&quot;.\\Snap.Genshin&quot;</span>
<span class="token keyword">function</span> cloneSnap <span class="token punctuation">{</span>
    git clone <span class="token string">&quot;https://github.com/DGP-Studio/Snap.Genshin.git&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span> <span class="token string">&quot;.\\Snap.Genshin&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Set-Location</span> Snap<span class="token punctuation">.</span>Genshin
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 复制metadata</span>
<span class="token keyword">function</span> copyMeta <span class="token punctuation">{</span>
    <span class="token comment"># 获取dotnet版本</span>
    <span class="token variable">$snapCsProj</span> = <span class="token function">Get-Content</span> <span class="token string">&quot;.\\DGP.Genshin\\DGP.Genshin.csproj&quot;</span>
    <span class="token variable">$reg</span> = <span class="token string">&quot;&lt;TargetFramework&gt;(?&lt;netVersion&gt;.*?)&lt;/TargetFramework&gt;&quot;</span>
    <span class="token variable">$version</span> = <span class="token string">&quot;&quot;</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$line</span> in <span class="token variable">$snapCsProj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$line</span> <span class="token operator">-match</span> <span class="token variable">$reg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>       
            <span class="token variable">$version</span> = <span class="token variable">$Matches</span><span class="token punctuation">.</span>netVersion<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">Test-Path</span> <span class="token string">&quot;.git&quot;</span>  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$buildDir</span> = <span class="token string">&quot;Build\\\\Debug\\\\<span class="token variable">$version</span>&quot;</span> 
        git submodule update <span class="token operator">--</span>init <span class="token operator">--</span>recursive
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-not</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span>  <span class="token variable">$buildDir</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mkdir <span class="token string">&quot;<span class="token variable">$buildDir</span>\\\\Plugins\\\\&quot;</span>
            xcopy Metadata\\\\<span class="token operator">*</span><span class="token punctuation">.</span>json <span class="token string">&quot;<span class="token variable">$buildDir</span>\\\\Metadata\\\\&quot;</span> <span class="token operator">/</span>e <span class="token operator">/</span>y
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            xcopy Metadata\\\\<span class="token operator">*</span><span class="token punctuation">.</span>json <span class="token string">&quot;<span class="token variable">$buildDir</span>\\\\Metadata\\\\&quot;</span> <span class="token operator">/</span>e <span class="token operator">/</span>y
        <span class="token punctuation">}</span>
     
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">Write-Host</span> <span class="token string">&#39;不是一个有效的git仓库,请重新clone https://github.com/DGP-Studio/Snap.Genshin.git&#39;</span> <span class="token operator">-</span>ForegroundColor Magenta
        <span class="token function">Exit-PSSession</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 返回目录</span>
    <span class="token function">Set-Location</span> <span class="token string">&#39;../&#39;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> run <span class="token punctuation">{</span>
    <span class="token function">Write-Output</span> <span class="token string">&quot;将在本文件夹创建项目 Snap.Genshin&quot;</span>
    <span class="token function">Write-Host</span> <span class="token string">&quot;确定继续吗?(输入y确认,输入n退出)&quot;</span> <span class="token operator">-</span>NoNewline <span class="token operator">-</span>ForegroundColor Magenta
    <span class="token variable">$response</span> = <span class="token function">read-host</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$response</span> <span class="token operator">-ne</span> <span class="token string">&quot;Y&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">exit</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span> <span class="token variable">$snapName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">Write-Host</span> <span class="token string">&quot;文件夹已经存在了!&quot;</span>
            <span class="token keyword">Exit</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cloneSnap
            copyMeta
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
run
    
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="克隆王道的文档" tabindex="-1"><a class="header-anchor" href="#克隆王道的文档" aria-hidden="true">#</a> 克隆王道的文档</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$prefix</span> = <span class="token string">&#39;https://github.com/wangdoc/&#39;</span>
<span class="token variable">$suffix</span> = <span class="token string">&#39;.git&#39;</span>
<span class="token variable">$cur</span> = <span class="token variable">$PWD</span>
<span class="token variable">$gitRepos</span> = <span class="token string">&#39;bash-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;git-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;javascript-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;clang-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;es6-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ssh-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;html-tutorial&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;webapi-tutorial&#39;</span>
<span class="token comment"># 这里填你的docs文件夹</span>
 
<span class="token variable">$dest</span> = <span class="token string">&#39;E:\\myblogs\\wangdoc\\docs\\&#39;</span>
<span class="token comment"># 系统临时文件路径</span>
<span class="token variable">$tmpPath</span> = <span class="token variable">$env</span>:tmp <span class="token operator">+</span> <span class="token string">&#39;\\wang\\&#39;</span>
<span class="token function">Write-Host</span>  <span class="token string">&#39;设置临时文件路径&#39;</span><span class="token variable">$tmpPath</span> <span class="token operator">-</span>ForegroundColor Cyan
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-not</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span> <span class="token variable">$tmpPath</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mkdir <span class="token variable">$tmpPath</span>
<span class="token punctuation">}</span>
<span class="token function">Set-Location</span> <span class="token variable">$tmpPath</span>
<span class="token comment"># 克隆所有文件</span>
<span class="token keyword">function</span> cloneAll <span class="token punctuation">{</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$item</span> in <span class="token variable">$gitRepos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        git clone <span class="token variable">$prefix</span><span class="token variable">$item</span><span class="token variable">$suffix</span>
        <span class="token function">Set-Location</span> <span class="token variable">$item</span>
        <span class="token function">Copy-Item</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force docs <span class="token variable">$dest</span><span class="token variable">$item</span>
    <span class="token punctuation">}</span> 
    <span class="token function">Set-Location</span> <span class="token variable">$cur</span>
    delTmpPath
    
    
<span class="token punctuation">}</span>
<span class="token keyword">function</span> cloneOnlyDocs <span class="token punctuation">{</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$item</span> in <span class="token variable">$gitRepos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-not</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span>  <span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mkdir <span class="token variable">$item</span> 
        <span class="token punctuation">}</span>
        
         
        <span class="token function">Set-Location</span> <span class="token variable">$item</span>
    
        <span class="token function">Write-Host</span> <span class="token string">&#39;当前路径&#39;</span><span class="token variable">$PWD</span> <span class="token operator">-</span>ForegroundColor Cyan
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span> <span class="token string">&quot;.git&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">Write-Host</span>  <span class="token string">&#39;已有git文件夹&#39;</span> <span class="token operator">-</span>ForegroundColor Cyan
            <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;ssh-tutorial&#39;</span> <span class="token punctuation">{</span>  
                    git pull origin main
                <span class="token punctuation">}</span> 
                <span class="token string">&#39;clang-tutorial&#39;</span> <span class="token punctuation">{</span>  
                    git pull origin main
                <span class="token punctuation">}</span>
                Default <span class="token punctuation">{</span>
                    git pull origin master
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token function">Write-Host</span> <span class="token string">&#39;从docs复制到&#39;</span><span class="token variable">$dest</span><span class="token variable">$item</span> <span class="token operator">-</span>ForegroundColor Cyan
            <span class="token comment"># 注意下面的\\文件夹分割</span>
            <span class="token function">Copy-Item</span>  <span class="token operator">-</span>Path <span class="token string">&#39;docs&#39;</span><span class="token operator">-</span>Destination  <span class="token variable">$dest</span><span class="token variable">$item</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force
            <span class="token function">Set-Location</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            git init
            git remote add origin <span class="token variable">$prefix</span><span class="token variable">$item</span><span class="token variable">$suffix</span>
            <span class="token comment"># 设置允许克隆子目录</span>
            git config core<span class="token punctuation">.</span>sparsecheckout true 
            <span class="token function">Write-Host</span>  <span class="token string">&#39;没有git文件夹,正在克隆&#39;</span> <span class="token operator">-</span>ForegroundColor Cyan
            <span class="token function">Write-Host</span> <span class="token string">&#39;当前路径&#39;</span><span class="token variable">$PWD</span> <span class="token operator">-</span>ForegroundColor Cyan
            <span class="token function">Write-Output</span> <span class="token string">&#39;docs&#39;</span> &gt;&gt; <span class="token string">&#39;.git/info/sparse-checkout&#39;</span>  
            <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;ssh-tutorial&#39;</span> <span class="token punctuation">{</span>  
                    git pull origin main
                <span class="token punctuation">}</span> 
                <span class="token string">&#39;clang-tutorial&#39;</span> <span class="token punctuation">{</span>  
                    git pull origin main
                <span class="token punctuation">}</span>
                Default <span class="token punctuation">{</span>
                    git pull origin master
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment"># 注意下面的\\文件夹分割 -Force 覆盖文件</span>
            <span class="token function">Copy-Item</span>  <span class="token operator">-</span>Path <span class="token string">&#39;docs&#39;</span>  <span class="token operator">-</span>Destination  <span class="token variable">$dest</span><span class="token variable">$item</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force
            <span class="token function">Set-Location</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
     
<span class="token punctuation">}</span>

<span class="token keyword">function</span> delTmpPath <span class="token punctuation">{</span>
    <span class="token function">Remove-Item</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force <span class="token variable">$tmpPath</span>
    
<span class="token punctuation">}</span>
cloneOnlyDocs
<span class="token function">Set-Location</span> <span class="token variable">$cur</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小爬虫" tabindex="-1"><a class="header-anchor" href="#小爬虫" aria-hidden="true">#</a> 小爬虫</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#This is a crawler for baidu images</span>
<span class="token comment">&lt;#
All these funuctions would be used to implementation crawler&#39;s target
#&gt;</span>
<span class="token keyword">function</span> <span class="token function">Get-Random</span><span class="token operator">-</span>String <span class="token punctuation">{</span>
    <span class="token variable">$fileName</span> = <span class="token operator">-join</span> <span class="token punctuation">(</span><span class="token namespace">[char[]]</span><span class="token punctuation">(</span>65<span class="token punctuation">.</span><span class="token punctuation">.</span>90 <span class="token operator">+</span> 97<span class="token punctuation">.</span><span class="token punctuation">.</span>122<span class="token punctuation">)</span> <span class="token punctuation">|</span> <span class="token function">Get-Random</span> <span class="token operator">-</span>Count 6<span class="token punctuation">)</span>
    <span class="token variable">$fileName</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Resolve-Directory</span> <span class="token punctuation">{</span>
    <span class="token keyword">param</span> <span class="token punctuation">(</span>
        <span class="token namespace">[Parameter(Mandatory)]</span>
        <span class="token namespace">[string]</span>
        <span class="token variable">$Path</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-not</span> <span class="token punctuation">(</span><span class="token function">Test-Path</span> <span class="token operator">-</span>LiteralPath <span class="token variable">$Path</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">New-Item</span> <span class="token operator">-</span>Path <span class="token variable">$Path</span> <span class="token operator">-</span>ItemType Directory <span class="token operator">-</span>ErrorAction SilentlyContinue
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> Invoke-MD5 <span class="token punctuation">{</span>
    <span class="token keyword">param</span> <span class="token punctuation">(</span>
        <span class="token comment"># Parameter Path</span>
        <span class="token namespace">[Parameter(Mandatory)]</span>
        <span class="token namespace">[string]</span>
        <span class="token variable">$Path</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">begin</span> <span class="token punctuation">{</span>
        <span class="token variable">$global</span>:hashTable = @<span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">process</span> <span class="token punctuation">{</span>
        <span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Path <span class="token variable">$Path</span> <span class="token punctuation">|</span> <span class="token function">Where-Object</span> <span class="token punctuation">{</span>
            <span class="token variable">$hash</span> = <span class="token function">Get-FileHash</span> <span class="token operator">-</span>Path <span class="token variable">$_</span><span class="token punctuation">.</span>FullName <span class="token operator">-</span>Algorithm MD5
            <span class="token variable">$hashTable</span><span class="token punctuation">[</span><span class="token variable">$hash</span><span class="token punctuation">.</span>Hash<span class="token punctuation">]</span> = <span class="token variable">$hash</span><span class="token punctuation">.</span>Path
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">end</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">Get-Images</span> <span class="token punctuation">{</span>
    <span class="token keyword">param</span> <span class="token punctuation">(</span>
        <span class="token namespace">[Parameter(ValueFromPipeline)]</span>
        <span class="token namespace">[int]</span>
        <span class="token variable">$page</span> = 1<span class="token punctuation">,</span>
        <span class="token namespace">[Parameter(Mandatory)]</span>
        <span class="token namespace">[string]</span>
        <span class="token variable">$Path</span><span class="token punctuation">,</span>
        <span class="token namespace">[Parameter(Mandatory)]</span>
        <span class="token namespace">[string]</span>
        <span class="token variable">$keyword</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">begin</span> <span class="token punctuation">{</span>
        <span class="token function">Resolve-Directory</span> <span class="token operator">-</span>Path <span class="token variable">$Path</span>
        Invoke-MD5 <span class="token operator">-</span>Path <span class="token variable">$Path</span>
        <span class="token variable">$headers</span> = @<span class="token punctuation">{</span>
            <span class="token string">&#39;Accept&#39;</span>                    = <span class="token string">&#39;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3&#39;</span>
            <span class="token string">&#39;Accept-Encoding&#39;</span>           = <span class="token string">&#39;gzip, deflate, br&#39;</span>
            <span class="token string">&#39;Accept-Language&#39;</span>           = <span class="token string">&#39;en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7&#39;</span>
            <span class="token string">&#39;Host&#39;</span>                      = <span class="token string">&#39;image.baidu.com&#39;</span>
            <span class="token string">&#39;Upgrade-Insecure-Requests&#39;</span> = <span class="token string">&#39;1&#39;</span>
            <span class="token string">&#39;User-Agent&#39;</span>                = <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">process</span> <span class="token punctuation">{</span>
        <span class="token variable">$n</span> = <span class="token punctuation">(</span><span class="token variable">$page</span> <span class="token operator">*</span> 20<span class="token punctuation">)</span>
        <span class="token variable">$word</span> = <span class="token namespace">[uri]</span>::EscapeDataString<span class="token punctuation">(</span><span class="token variable">$keyword</span><span class="token punctuation">)</span>
        <span class="token variable">$url</span> = <span class="token string">&quot;https://image.baidu.com/search/flip?tn=baiduimage&amp;ie=utf-8&amp;word=\${word}&amp;pn=<span class="token variable">$n</span>&quot;</span>
        <span class="token function">Write-Host</span> <span class="token string">&quot;Handling <span class="token variable">$url</span>\`n&quot;</span>
        <span class="token variable">$web</span> = <span class="token punctuation">(</span><span class="token function">Invoke-WebRequest</span> <span class="token operator">-</span>Uri <span class="token variable">$url</span> <span class="token operator">-</span>Method GET <span class="token operator">-</span>Headers <span class="token variable">$headers</span><span class="token punctuation">)</span>
        <span class="token variable">$web</span> <span class="token punctuation">|</span> <span class="token function">Select-String</span> <span class="token string">&#39;&quot;objURL&quot;:&quot;https?://+[^\\s]+[\\w]&#39;</span> <span class="token operator">-</span>AllMatches <span class="token punctuation">|</span> <span class="token function">ForEach-Object</span> <span class="token punctuation">{</span> <span class="token variable">$_</span><span class="token punctuation">.</span>Matches <span class="token punctuation">}</span> <span class="token punctuation">|</span> <span class="token function">Foreach-Object</span> <span class="token punctuation">{</span>
            <span class="token variable">$_</span> <span class="token operator">-match</span> <span class="token string">&#39;https?://.+.&#39;</span>
            <span class="token variable">$Matches</span><span class="token punctuation">.</span>Values <span class="token punctuation">|</span> <span class="token function">ForEach-Object</span> <span class="token punctuation">{</span>
                <span class="token function">Write-Host</span> <span class="token string">&quot;Fetching from <span class="token variable">$_</span>&quot;</span> <span class="token operator">-</span>ForegroundColor 3
                <span class="token variable">$ext</span> = <span class="token punctuation">(</span><span class="token namespace">[regex]</span><span class="token string">&#39;\\.(jpe?g|png|gif|tif|bmp)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Match<span class="token punctuation">(</span><span class="token variable">$_</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token namespace">[String]</span>::IsNullOrEmpty<span class="token punctuation">(</span><span class="token variable">$ext</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$ext</span> = <span class="token string">&quot;.jpg&quot;</span>
                <span class="token punctuation">}</span>
                <span class="token variable">$fileFullName</span> = <span class="token punctuation">(</span><span class="token function">Get-Random</span><span class="token operator">-</span>String<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token variable">$ext</span>
                <span class="token variable">$TargetPath</span> = <span class="token function">Join-Path</span> <span class="token operator">-</span>Path <span class="token variable">$Path</span> <span class="token operator">-</span>ChildPath <span class="token variable">$fileFullName</span>
                <span class="token function">Invoke-WebRequest</span> <span class="token operator">-</span>Uri <span class="token variable">$_</span> <span class="token operator">-</span>PassThru <span class="token operator">-</span>TimeoutSec 20000 <span class="token operator">-</span>OutFile <span class="token variable">$TargetPath</span> <span class="token operator">-</span>ErrorAction SilentlyContinue
                <span class="token comment"># calculate the md5 value</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">Test-Path</span> <span class="token variable">$TargetPath</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$hashValue</span> = <span class="token punctuation">(</span><span class="token function">Get-FileHash</span> <span class="token operator">-</span>Path <span class="token variable">$TargetPath</span> <span class="token operator">-</span>Algorithm MD5<span class="token punctuation">)</span><span class="token punctuation">.</span>Hash
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$hashValue</span> <span class="token operator">-and</span> <span class="token variable">$hashTable</span><span class="token punctuation">.</span>ContainsKey<span class="token punctuation">(</span><span class="token variable">$hashValue</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">Remove-Item</span> <span class="token operator">-</span>Path <span class="token variable">$TargetPath</span> <span class="token operator">-</span>Force <span class="token operator">-</span>ErrorAction SilentlyContinue
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">Start-Sleep</span> <span class="token operator">-</span>Milliseconds 1000
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">#ii $Path</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

0<span class="token punctuation">.</span><span class="token punctuation">.</span>10 <span class="token punctuation">|</span> <span class="token function">Get-Images</span> <span class="token operator">-</span>Path <span class="token string">&quot;d:\\temp\\baiduimages&quot;</span> <span class="token operator">-</span>keyword <span class="token string">&quot;soft cat&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取安装的软件" tabindex="-1"><a class="header-anchor" href="#获取安装的软件" aria-hidden="true">#</a> 获取安装的软件</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">&lt;#
.Synopsis
   Get installed software list by retrieving registry.
.DESCRIPTION
   The function return a installed software list by retrieving registry from below path;
   1.&#39;HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall&#39;
   2.&#39;HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall&#39;
   3.&#39;HKLM:SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall&#39;
   Author: Mosser Lee (http://www.pstips.net/author/mosser/)

.EXAMPLE
   Get-InstalledSoftwares
.EXAMPLE
   Get-InstalledSoftwares  | Group-Object Publisher
#&gt;</span>
<span class="token keyword">function</span> <span class="token function">Get-InstalledSoftwares</span> <span class="token punctuation">{</span>
    <span class="token comment">#</span>
    <span class="token comment"># Read registry key as product entity.</span>
    <span class="token comment">#</span>
    <span class="token keyword">function</span> <span class="token function">ConvertTo-ProductEntity</span> <span class="token punctuation">{</span>
        <span class="token keyword">param</span><span class="token punctuation">(</span><span class="token namespace">[Microsoft.Win32.RegistryKey]</span><span class="token variable">$RegKey</span><span class="token punctuation">)</span>
        <span class="token variable">$product</span> = <span class="token string">&#39;&#39;</span> <span class="token punctuation">|</span> <span class="token function">select</span> Name<span class="token punctuation">,</span> Publisher<span class="token punctuation">,</span> Version
        <span class="token variable">$product</span><span class="token punctuation">.</span>Name = <span class="token variable">$_</span><span class="token punctuation">.</span>GetValue<span class="token punctuation">(</span><span class="token string">&quot;DisplayName&quot;</span><span class="token punctuation">)</span>
        <span class="token variable">$product</span><span class="token punctuation">.</span>Publisher = <span class="token variable">$_</span><span class="token punctuation">.</span>GetValue<span class="token punctuation">(</span><span class="token string">&quot;Publisher&quot;</span><span class="token punctuation">)</span>
        <span class="token variable">$product</span><span class="token punctuation">.</span>Version = <span class="token variable">$_</span><span class="token punctuation">.</span>GetValue<span class="token punctuation">(</span><span class="token string">&quot;DisplayVersion&quot;</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">-not</span> <span class="token namespace">[string]</span>::IsNullOrEmpty<span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$product</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token variable">$UninstallPaths</span> = @<span class="token punctuation">(</span><span class="token punctuation">,</span>
        <span class="token comment"># For local machine.</span>
        <span class="token string">&#39;HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall&#39;</span><span class="token punctuation">,</span>
        <span class="token comment"># For current user.</span>
        <span class="token string">&#39;HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># For 32bit softwares that were installed on 64bit operating system.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token namespace">[Environment]</span>::Is64BitOperatingSystem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$UninstallPaths</span> <span class="token operator">+=</span> <span class="token string">&#39;HKLM:SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token variable">$UninstallPaths</span> <span class="token punctuation">|</span> <span class="token keyword">foreach</span> <span class="token punctuation">{</span>
        <span class="token function">Get-ChildItem</span> <span class="token variable">$_</span> <span class="token punctuation">|</span> <span class="token keyword">foreach</span> <span class="token punctuation">{</span>
            <span class="token function">ConvertTo-ProductEntity</span> <span class="token operator">-</span>RegKey <span class="token variable">$_</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取文件夹大小" tabindex="-1"><a class="header-anchor" href="#获取文件夹大小" aria-hidden="true">#</a> 获取文件夹大小</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$startFolder</span> = <span class="token string">&quot;D:\\flutter&quot;</span>
<span class="token variable">$colItems</span> = <span class="token punctuation">(</span><span class="token function">Get-ChildItem</span> <span class="token variable">$startFolder</span>  <span class="token punctuation">|</span> <span class="token function">Where-Object</span> <span class="token punctuation">{</span><span class="token variable">$_</span><span class="token punctuation">.</span>PSIsContainer <span class="token operator">-eq</span> <span class="token boolean">$True</span><span class="token punctuation">}</span> <span class="token punctuation">|</span> <span class="token function">Sort-Object</span><span class="token punctuation">)</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$i</span> in <span class="token variable">$colItems</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$subFolderItems</span> = <span class="token punctuation">(</span><span class="token function">Get-ChildItem</span> <span class="token variable">$i</span><span class="token punctuation">.</span>FullName <span class="token operator">-</span>recurse <span class="token punctuation">|</span> <span class="token function">Measure-Object</span> <span class="token operator">-</span>property length <span class="token operator">-</span>sum<span class="token punctuation">)</span>
    <span class="token variable">$FileSize</span>=<span class="token string">&quot;{0:N2}&quot;</span> <span class="token operator">-</span>f <span class="token punctuation">(</span><span class="token variable">$subFolderItems</span><span class="token punctuation">.</span>sum <span class="token operator">/</span> 1GB<span class="token punctuation">)</span>
    <span class="token variable">$Unit</span>=<span class="token string">&#39;GB&#39;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$FileSize</span> <span class="token operator">-lt</span> 1<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$FileSize</span>=<span class="token string">&quot;{0:N2}&quot;</span> <span class="token operator">-</span>f <span class="token punctuation">(</span><span class="token variable">$subFolderItems</span><span class="token punctuation">.</span>sum <span class="token operator">/</span> 1MB<span class="token punctuation">)</span>
        <span class="token variable">$Unit</span>=<span class="token string">&#39;MB&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token function">write-host</span> <span class="token variable">$i</span><span class="token punctuation">.</span>FullName  <span class="token string">&#39; -- &#39;</span>  <span class="token variable">$FileSize</span>  <span class="token variable">$Unit</span> <span class="token operator">-</span>fore green
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取文件夹内的文件数量" tabindex="-1"><a class="header-anchor" href="#获取文件夹内的文件数量" aria-hidden="true">#</a> 获取文件夹内的文件数量</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token namespace">[System.IO.Directory]</span>::GetFiles<span class="token punctuation">(</span><span class="token string">&quot;d:\\flutter&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;AllDirectories&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Path <span class="token string">&quot;d:\\flutter&quot;</span> <span class="token operator">-</span>Force <span class="token operator">-</span>Recurse <span class="token operator">-</span>ErrorAction SilentlyContinue <span class="token punctuation">|</span>
 <span class="token function">Where-Object</span> <span class="token punctuation">{</span> <span class="token variable">$_</span><span class="token punctuation">.</span>PSIsContainer <span class="token operator">-eq</span> <span class="token boolean">$false</span> <span class="token punctuation">}</span> <span class="token punctuation">|</span>
 <span class="token function">Measure-Object</span> <span class="token punctuation">|</span> 
 <span class="token function">Select-Object</span> <span class="token operator">-</span>ExpandProperty Count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","my-powershell.html.vue"]]);export{r as default};
