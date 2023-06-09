import{_ as t,o as e,c as l,a as i}from"./app-3d979d38.js";const a={},r=i('<h1 id="一些爬虫框架" tabindex="-1"><a class="header-anchor" href="#一些爬虫框架" aria-hidden="true">#</a> 一些爬虫框架</h1><p>Playwright VS Selenium VS Puppeteer VS Cypress</p><h2 id="支持语言" tabindex="-1"><a class="header-anchor" href="#支持语言" aria-hidden="true">#</a> 支持语言</h2><ul><li>Playwright: ✅✅✅✅ 支持主流语言：JavaScript &amp; TypeScript\\python\\C#\\Go\\Java</li><li>Selenium: ✅✅✅✅✅ 支持主流语言：java\\python\\ruby\\C#\\C++\\JavaScript</li><li>Cypress: ✅ 只支持 JavaScript &amp; TypeScript</li><li>Puppeteer: ✅✅ 只支持 JavaScript &amp; TypeScript \\ python</li></ul><h2 id="覆盖浏览器" tabindex="-1"><a class="header-anchor" href="#覆盖浏览器" aria-hidden="true">#</a> 覆盖浏览器</h2><ul><li>Playwright: ✅✅✅ 支持Chromium/WebKit/Firefox</li><li>Selenium: ✅✅✅✅✅ 运行在目前所有主流浏览器上（不包括国内套皮的浏览器）。</li><li>Cypress: ✅✅ 只支持 Chrome/Firefox</li><li>Puppeteer: ✅✅ 只支持 Chrome/Firefox</li></ul><h2 id="支持多标签-表单" tabindex="-1"><a class="header-anchor" href="#支持多标签-表单" aria-hidden="true">#</a> 支持多标签 + 表单</h2><ul><li>Selenium: ✅✅✅ 通过 <code>switch_to</code> 切换，但不好用。</li><li>Cypress: ❌ 没有真正支持</li><li>Puppeteer: ✅✅✅✅✅ 更符合直觉的 API</li><li>Playwright: ✅✅✅✅✅ 更符合直觉的 API</li></ul><p>为证明playwright 更简单，我们来做个代码对比。</p><h2 id="测试创建速度" tabindex="-1"><a class="header-anchor" href="#测试创建速度" aria-hidden="true">#</a> 测试创建速度</h2><ul><li>Selenium: ✅ Yes Selenium IDE可以录制脚本。</li><li>Cypress: ❌ 不支持脚本录制。</li><li>Puppeteer: ✅✅ Yes 基于Puppeteer Recorder录制脚本。</li><li>Playwright: ✅✅ Yes 基于 <code>playwright codegen</code> 命令录制脚本。</li></ul><h2 id="并行网格和基础服务" tabindex="-1"><a class="header-anchor" href="#并行网格和基础服务" aria-hidden="true">#</a> 并行网格和基础服务</h2><ul><li>Selenium: ✅ Yes 托管或构建自己解决方案。</li><li>Cypress: 🤷 只能在自己的闭源付费云构建。</li><li>Puppeteer: ❌ 通常构建自己的</li><li>Playwright: ❌ 通常构建自己的。</li></ul><h2 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性" aria-hidden="true">#</a> 稳定性</h2><p>这个主要评估用例编写之后的失败率，不包含真的发现bug之后的失败。</p><p>Selenium: ❌✅ 复杂的自动等待机制。 Cypress: ❌✅ 复杂的机制，并且不能与框架一起工作。 Puppeteer:❌✅ 等待某些元素，但必须手工等待其他元素。 Playwright: ❌✅✅ 最好等待某些元素，但必须手工等待其他元素。</p><h2 id="智能定位" tabindex="-1"><a class="header-anchor" href="#智能定位" aria-hidden="true">#</a> 智能定位</h2><p>Selenium: ❌ 不支持以多种方式选择元素 Cypress: ❌ 不支持以多种方式选择元素 Puppeteer❌ 不支持以多种方式选择元素 Playwright: ❌✅✅ 非常前景，开始支持自定义选择器引擎。</p><h2 id="debugging" tabindex="-1"><a class="header-anchor" href="#debugging" aria-hidden="true">#</a> Debugging</h2><ul><li>Selenium: ❌✅ 远程教程网格依赖于网格提供的程序。</li><li>Cypress: ❌✅ 你甚至不是在写常规的JavaScript。</li><li>Puppeteer: ✅ 在IDE中编写和调试Javascript。</li><li>Playwright: ✅ 在IDE中编写和调试Javascript或其他语言。</li></ul><h2 id="documentation-and-resources" tabindex="-1"><a class="header-anchor" href="#documentation-and-resources" aria-hidden="true">#</a> Documentation and Resources</h2><ul><li>Selenium: ✅✅ 官方文档写得确实不好，但是第三方资料太丰富，相关的书籍也很多。</li><li>Cypress: ✅✅ 虽然社区很小，但是很热闹，官方文档也写的非常赞。</li><li>Puppeteer: ✅ 社区比较小，但目前有大量的教程。</li><li>Playwright: ✅❌ 工具比较新，API也在变化，文档和教程可能跟不上。</li></ul><p>注：要分范围 1 ~ 5，代表分值，分值越高说明越优。</p><table><thead><tr><th style="text-align:left;">categories</th><th style="text-align:center;">Playwright</th><th style="text-align:center;">Selenium</th><th style="text-align:center;">Cypress</th><th style="text-align:center;">Puppeteer</th></tr></thead><tbody><tr><td style="text-align:left;">支持语言</td><td style="text-align:center;">4</td><td style="text-align:center;">5</td><td style="text-align:center;">1</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:left;">覆盖浏览器</td><td style="text-align:center;">3</td><td style="text-align:center;">5</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:left;">多标签&amp;表单</td><td style="text-align:center;">5</td><td style="text-align:center;">3</td><td style="text-align:center;">0</td><td style="text-align:center;">5</td></tr><tr><td style="text-align:left;">测试编写速度</td><td style="text-align:center;">4</td><td style="text-align:center;">4</td><td style="text-align:center;">4</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:left;">并行，网格</td><td style="text-align:center;">0</td><td style="text-align:center;">4</td><td style="text-align:center;">2</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:left;">稳定性</td><td style="text-align:center;">4</td><td style="text-align:center;">3</td><td style="text-align:center;">3</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:left;">智能定位</td><td style="text-align:center;">3</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:left;">Debugging</td><td style="text-align:center;">3</td><td style="text-align:center;">2</td><td style="text-align:center;">3</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:left;">文档和资源</td><td style="text-align:center;">3</td><td style="text-align:center;">4</td><td style="text-align:center;">4</td><td style="text-align:center;">3</td></tr></tbody></table><h2 id="如何选择" tabindex="-1"><a class="header-anchor" href="#如何选择" aria-hidden="true">#</a> 如何选择？</h2><p>首先，这些测试工具都是基础。他们只是提供了一套API来定位和操作元素。并不能成为你自动化项目成功或失败的决定因素。</p><p>自动化的是否成功我认为主要取决于以下几个方面：</p><ol><li>调研你的项目是否真的适合自动化。</li><li>是否真的找到自动化的应用场景。（比如，我们用自动化测试埋点，用自动化配合检查App性能都是很好应用场景）</li><li>是否有足够人力投入到自动化中。</li><li>测试人员的水平，不要怀疑这一点，不少同学还在定位元素面前磕磕绊绊。</li><li>是否有团队支持和配合。有些同学还在纠结验证的问题，让开发配合一些很轻松可绕过，可你就是做不到。</li></ol><p>好了，这些工具都无法决定自动化项目是否成功，那怎么选？</p><p>如果，你不懂并且也不打算学习JavaScript， 那么就不用选 Cypress 和 Puppeteer 了。</p><p>如果，你只是一个新手，那么还是稳妥点，先学会Selenium，这是测试的必备技能。</p><p>我非常鼓励那些有一些自动化经验的同学尝试学习JavaScript，他会让你对前端（web）技术有更深的理解，因为你要测试的就是前端(web)应用。就像我可灵活的控制元素的隐藏，修改属性，更快速的定位到疑难杂症的元素，这完全是因为我做过前端开发。Cypress 或 Puppeteer 就是很好的选择</p>',32),d=[r];function n(s,c){return e(),l("div",null,d)}const p=t(a,[["render",n],["__file","frameworks-compare.html.vue"]]);export{p as default};