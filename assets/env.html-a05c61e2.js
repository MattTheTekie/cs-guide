import{_ as o,r as a,o as i,c as r,d as e,e as t,b as c,a as n}from"./app-3d979d38.js";const l={},p=n(`<h1 id="常用的环境变量" tabindex="-1"><a class="header-anchor" href="#常用的环境变量" aria-hidden="true">#</a> 常用的环境变量</h1><h2 id="launchsettings-json" tabindex="-1"><a class="header-anchor" href="#launchsettings-json" aria-hidden="true">#</a> launchSettings.json</h2><p>launchSettings.json文件仅在本地开发计算机中使用。这意味着当我们将asp.net core应用程序发布到生产服务器时，不需要此文件 开发时使用<code>0.0.0.0</code>,需要在launchsettings.json配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &quot;applicationUrl&quot;: &quot;https://0.0.0.0:7025;http://0.0.0.0:5272;https://localhost:7025;http://localhost:5272;&quot;,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={href:"https://json.schemastore.org/launchsettings.json",target:"_blank",rel:"noopener noreferrer"},h=n('<h2 id="appsettings-json" tabindex="-1"><a class="header-anchor" href="#appsettings-json" aria-hidden="true">#</a> appSettings.json</h2><p>通常会几个配置, appsettings.{Environment}.json 例如，appsettings.Production.json 和 appsettings.Development.json<br> appsettings.{Environment}.json 值替代 appsettings.json 中的键。 例如，默认情况下：</p><ul><li>在开发环境中，appsettings.Development.json 配置会覆盖在 appsettings.json 中找到的值。</li><li>在生产环境中，appsettings.Production.json 配置会覆盖在 appsettings.json 中找到的值。 例如，在将应用部署到 Azure 时。</li></ul><p>项目配置文件,会覆盖launchSettings.json的值,如果要让所有ip均可访问,需要设置类似<code>&quot;Urls&quot;: &quot;http://*:9000/&quot;,</code>的值,但是这样在launchSettings.json中的<code>applicationUrl</code>会被覆盖</p>',4);function u(g,j){const s=a("ExternalLinkIcon");return i(),r("div",null,[p,e("p",null,[t("关于它的schema,需要到这里查看"),e("a",d,[t("https://json.schemastore.org/launchsettings.json"),c(s)])]),h])}const m=o(l,[["render",u],["__file","env.html.vue"]]);export{m as default};