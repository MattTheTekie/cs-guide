import{_ as e,o as a,c as n,a as s}from"./app-3d979d38.js";const l={},i=s(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><h2 id="创建aspnetcore项目" tabindex="-1"><a class="header-anchor" href="#创建aspnetcore项目" aria-hidden="true">#</a> 创建aspnetcore项目</h2><ol><li>创建web项目</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 查看所有命令</span>
dotnet <span class="token operator">-</span>h
<span class="token comment"># 查看所有的模板</span>
dotnet new list
<span class="token comment"># 创建一个webapp,非restapi</span>
dotnet new webapp <span class="token operator">-</span>o &lt;项目名称&gt;
<span class="token comment"># 创建一个restfulapi 最小api</span>
dotnet new webapi <span class="token operator">-</span>o  &lt;项目名称&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建最小api(使用vs)</p><ul><li>从“文件”菜单中选择“新建”&gt;“项目” 。</li><li>在搜索框中输入“Web API”。</li><li>选择“ASP.NET Core Web API”模板，然后选择“下一步”。</li><li>在“配置新项目”对话框中，将项目命名为“TodoApi”，然后选择“下一步”。</li><li>在“其他信息”对话框中： <ul><li>确认“框架”是“.NET 7.0”（或更高版本）。</li><li>确认已选中“使用控制器(取消选中以使用最小 API)”。</li><li>选择“创建”。</li></ul></li></ul><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>dotnet watch run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),t=[i];function r(d,o){return a(),n("div",null,t)}const p=e(l,[["render",r],["__file","basic.html.vue"]]);export{p as default};
