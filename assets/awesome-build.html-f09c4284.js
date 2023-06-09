import{_ as s,r,o as d,c as _,d as t,e,b as o,a as l}from"./app-3d979d38.js";const h={},u=t("h1",{id:"好用的打包工具",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#好用的打包工具","aria-hidden":"true"},"#"),e(" 好用的打包工具")],-1),i={href:"https://transitivebullsh.it/javascript-dev-tools-in-2022",target:"_blank",rel:"noopener noreferrer"},c=l('<blockquote><p>在2022年，每一位 <strong>JS / TS</strong> 开发者都应该知道的最重要的开发工具的分类，包括最相关的权衡，以及一些个人建议。</p></blockquote><p>在软件工程的世界中，对所使用的工具有一个明确的了解非常重要。</p><p>但是 <strong>JS</strong> 工具总是在快速的变化着，2022年也不例外。</p><p>因此，我想把你在2022年应该知道的最重要的工具分解开来，它们最相关的权衡是什么，并提供一些个人建议。</p><p>我们将从最低级别的工具开始，然后从那里逐步升级到更高级别的工具。让我们开始💪。</p><h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2><h3 id="编译器" tabindex="-1"><a class="header-anchor" href="#编译器" aria-hidden="true">#</a> 编译器</h3><p>编译器负责将输入代码转换为某种目标输出格式。出于我们的目的，我们关注的是那些支持将现代 <strong>JavaScript</strong> 和<strong>TypeScript</strong> 转换成特定版本的 <strong>ECMAscript</strong> 的编译器，这些 <strong>ECMAscript</strong> 兼容浏览器和最新版本的 <strong>Node.js</strong>。</p>',8),a=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"描述"),t("th",null,"星数"),t("th",null,"语言"),t("th",null,"速度"),t("th",null,"成熟度"),t("th",null,"许可")])],-1),p={href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",target:"_blank",rel:"noopener noreferrer"},g=t("td",null,"TS官方编译器",-1),b=t("td",null,"79,300",-1),f=t("td",null,"TS",-1),k=t("td",null,"slow",-1),m=t("td",null,"非常成熟",-1),w=t("td",null,"Apache 2.0",-1),S={href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},v=t("td",null,"快速JS/TS编译器",-1),T=t("td",null,"31,200",-1),x=t("td",null,"Go",-1),j=t("td",null,"fast",-1),M=t("td",null,"可以",-1),y=t("td",null,"MIT",-1),I={href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer"},N=t("td",null,"快速JS/TS编译器",-1),V=t("td",null,"21,300",-1),J=t("td",null,"Rust",-1),E=t("td",null,"fast",-1),P=t("td",null,"可以",-1),A=t("td",null,"Apache 2.0",-1),B={href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"},C=t("td",null,"JS编译器（TS 插件）",-1),R=t("td",null,"40,700",-1),q=t("td",null,"JS",-1),W=t("td",null,"slow",-1),L=t("td",null,"非常成熟",-1),D=t("td",null,"MIT",-1),G=l('<p>关于这个领域最重要的一点是，它正在经历一个巨大的转变，从用高级解释语言编写的编译器 <strong>tsc</strong> 和 <strong>babel</strong>，到用更快的编译语言编写的编译器 <strong>swc</strong> 和 <strong>esbuild</strong>。</p><p>这种转变导致编译时间缩短了10-100倍，如下图所示： <img src="https://segmentfault.com/img/remote/1460000041651443" alt="1"> 如果你正在更新你的开发工具技术栈，或者在2022年开始一个新项目，那么你会想要考虑在底层使用这些下一代编译器之一。它们可能不像 <strong>TypeScript</strong> 官方编译器 <strong>tsc</strong> 和 <strong>babel</strong> 那样成熟，但构建速度快100倍的好处是不能低估的。</p>',2),O=t("strong",null,"swc",-1),F=t("strong",null,"esbuild",-1),K=t("strong",null,"TypeScript",-1),X=t("strong",null,"TypeScript",-1),z=t("strong",null,"TypeScript",-1),H=t("strong",null,"swc",-1),Q=t("strong",null,"kdy1dev",-1),U={href:"https://kdy1.dev/posts/2022/1/tsc-go",target:"_blank",rel:"noopener noreferrer"},Y=t("strong",null,"tsc",-1),Z=t("strong",null,"tsc",-1),$=t("h3",{id:"swc-vs-esbuild",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#swc-vs-esbuild","aria-hidden":"true"},"#"),e(" SWC vs esbuild")],-1),tt=t("strong",null,"swc",-1),et=t("strong",null,"esbuild",-1),nt=t("strong",null,"JS / TS",-1),ot={href:"https://datastation.multiprocess.io/blog/2021-11-13-benchmarking-esbuild-swc-typescript-babel.html",target:"_blank",rel:"noopener noreferrer"},lt=t("p",null,"在这两个编译器之间做出选择，更多地取决于构建在这些编译器之上的高级工具，而不是直接在它们之间做出选择。",-1),st=t("p",null,[e("使用 "),t("strong",null,"swc"),e(" 值得注意的项目：")],-1),rt={href:"https://nextjs.org/docs/advanced-features/compiler",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://github.com/denoland/deno_lint",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://parceljs.org/",target:"_blank",rel:"noopener noreferrer"},ht=t("p",null,[e("使用 "),t("strong",null,"esbuild"),e(" 值得注意的项目：")],-1),ut={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},it={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://tsup.egoist.sh/",target:"_blank",rel:"noopener noreferrer"},at=t("blockquote",null,[t("p",null,"在软件工程中，诸如“技术A比技术B更好”这样的简单叙述很少有太大的价值。相反，应该根据项目情况来决定使用哪个工具。在很多情况下，你最好使用官方的TypeScript编译器或babel。")],-1),pt=t("blockquote",null,[t("p",null,"要成为一名更好的软件工程师，通常需要彻底理解这些类型的决策所涉及的权衡，并根据项目、团队和业务需求的特定约束来平衡这些权衡。")],-1),gt=t("h3",{id:"打包器-bundlers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#打包器-bundlers","aria-hidden":"true"},"#"),e(" 打包器(Bundlers)")],-1),bt=t("p",null,[t("img",{src:"https://segmentfault.com/img/remote/1460000041651444",alt:" title="}),e(" 打包器负责将所有的输入源文件打包成易于使用的输出格式。打包程序最常见的两个用例是为web应用打包资源和打包成库文件。")],-1),ft=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"描述"),t("th",null,"星数"),t("th",null,"优化了"),t("th",null,"许可")])],-1),kt={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},mt=t("td",null,"行业标准打包器",-1),wt=t("td",null,"60,100",-1),St=t("td",null,"web应用、库",-1),vt=t("td",null,"MIT",-1),Tt={href:"https://rollupjs.org/guide/en/",target:"_blank",rel:"noopener noreferrer"},xt=t("td",null,"针对库打包器",-1),jt=t("td",null,"21,400",-1),Mt=t("td",null,"库",-1),yt=t("td",null,"MIT",-1),It={href:"https://parceljs.org/",target:"_blank",rel:"noopener noreferrer"},Nt=t("td",null,"零配置web构建工具",-1),Vt=t("td",null,"41,000",-1),Jt=t("td",null,"web应用、库",-1),Et=t("td",null,"MIT",-1),Pt=l("<p>像 <strong>webpack</strong> 和 <strong>rollup</strong> 这样的打包工具是现代 <strong>JS</strong> 工具链的 “瑞士军刀”。 它们都具有极强的可扩展性，具有维护良好的插件，覆盖了大多数主要用例。 例如，使用上面列出的任何一个流行的编译器，通过 <strong>webpack</strong> 或 <strong>rollup</strong> 转译 <strong>TS</strong> 代码，都是相对简单的。</p><p>另一方面，<strong>Parcel</strong> 提供了一种几乎为零配置的打包方法。它关注的是简单性而不是可扩展性，并在底层使用 <strong>esbuild</strong> 作为编译器。</p><p>请注意，<strong>swc</strong> 和<strong>esbuild</strong>也都提供了基本的打包功能，与这些打包器相比，它们的功能还不够全，不能包括在这个列表中。</p>",3),At={href:"https://bundlers.tooling.report/",target:"_blank",rel:"noopener noreferrer"},Bt=t("h3",{id:"开发库",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#开发库","aria-hidden":"true"},"#"),e(" 开发库")],-1),Ct=t("p",null,[e("这些工具旨在帮助库作者打包和发布现代的"),t("strong",null,"NPM"),e("包。")],-1),Rt=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"描述"),t("th",null,"星数"),t("th",null,"编译器"),t("th",null,"打包器"),t("th",null,"许可")])],-1),qt={href:"https://tsup.egoist.sh/",target:"_blank",rel:"noopener noreferrer"},Wt=t("td",null,"由esbuild支持的快速TS库打包器",-1),Lt=t("td",null,"1,800",-1),Dt=t("td",null,"esbuild",-1),Gt=t("td",null,"rollup",-1),Ot=t("td",null,"MIT",-1),Ft={href:"https://tsdx.io/",target:"_blank",rel:"noopener noreferrer"},Kt=t("td",null,"用于TS包开发的零配置CLI",-1),Xt=t("td",null,"9,500",-1),zt=t("td",null,"babel",-1),Ht=t("td",null,"rollup",-1),Qt=t("td",null,"MIT",-1),Ut={href:"https://github.com/developit/microbundle",target:"_blank",rel:"noopener noreferrer"},Yt=t("td",null,"用于微小模块的零配置打包器",-1),Zt=t("td",null,"6,800",-1),$t=t("td",null,"babel",-1),te=t("td",null,"rollup",-1),ee=t("td",null,"MIT",-1),ne={href:"https://vitejs.dev",target:"_blank",rel:"noopener noreferrer"},oe=t("td",null,"40,000",-1),le=t("td",null,"esbuild",-1),se=t("td",null,"rollup",-1),re=t("td",null,"MIT",-1),de=t("td",null,null,-1),_e={href:"https://github.com/preconstruct/preconstruct",target:"_blank",rel:"noopener noreferrer"},he=t("td",null,"在 monorepos 中轻松开发和构建代码",-1),ue=t("td",null,"720",-1),ie=t("td",null,"babel",-1),ce=t("td",null,"rollup",-1),ae=t("td",null,"MIT",-1),pe={href:"https://github.com/unjs/unbuild",target:"_blank",rel:"noopener noreferrer"},ge=t("td",null,"统一的javascript构建系统",-1),be=t("td",null,"440",-1),fe=t("td",null,"esbuild",-1),ke=t("td",null,"rollup",-1),me=t("td",null,"MIT",-1),we=l('<p>如果你在2022年开发一个新的库，你可能会想使用这些更高级的工具来简化你的工作流程。</p><ul><li>如果你有一个TS包，并且想利用 <strong>esbuild</strong> 提供的极快的构建速度，那么 <strong>tsupp</strong> 是一个很好的选择。</li><li>如果您有一个TS包，并且需要一些额外的功能，那么 <strong>tsdx</strong> 是一个很好的选择。</li><li>如果你有一个TS或JS包，那么<strong>microbundle</strong>也是一个不错的选择。</li><li><strong>Vite</strong>主要是一个构建前端web应用程序的工具，但它也是一个可靠的全方位选择，还包括对输出库的支持。</li></ul><p>我个人倾向于对所有新的TS包使用<strong>tsup</strong>，主要是因为一旦你体验了100倍的快速构建，就很难再考虑切换回其他版本了。</p><h4 id="更多资讯" tabindex="-1"><a class="header-anchor" href="#更多资讯" aria-hidden="true">#</a> 更多资讯</h4>',4),Se={href:"https://www.typescriptlang.org/docs/handbook/project-references.html",target:"_blank",rel:"noopener noreferrer"},ve=t("strong",null,"TS monorepos",-1),Te=t("strong",null,"tsc",-1),xe=t("strong",null,".d.ts",-1),je=t("strong",null,"emitDeclarationOnly: true",-1),Me=t("strong",null,"tsup",-1),ye={href:"https://github.com/NotionX/react-notion-x",target:"_blank",rel:"noopener noreferrer"},Ie=t("p",null,[e("发布现代 "),t("strong",null,"NPM"),e(" 包是一个微妙的话题，远远超出了本文的范围。 有关 ESM、commonjs、导出等的更多信息，请参阅：")],-1),Ne={href:"https://www.the-guild.dev/blog/support-nodejs-esm",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://github.com/sindresorhus/meta/discussions/15",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",target:"_blank",rel:"noopener noreferrer"},Ee=t("h3",{id:"web-app-开发",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#web-app-开发","aria-hidden":"true"},"#"),e(" Web app 开发")],-1),Pe=t("p",null,"这些高级工具和框架旨在帮助开发人员构建现代web应用程序，而无需担心所有细节。",-1),Ae=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"描述"),t("th",null,"星数"),t("th",null,"编译器"),t("th",null,"打包器"),t("th",null,"框架")])],-1),Be={href:"https://nextjs.org/",target:"_blank",rel:"noopener noreferrer"},Ce=t("td",null,"用于生产的 React 框架",-1),Re=t("td",null,"84,000",-1),qe=t("td",null,"swc",-1),We=t("td",null,"webpack",-1),Le=t("td",null,"react",-1),De={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},Ge=t("td",null,"直观的 Vue 框架",-1),Oe=t("td",null,"39,000",-1),Fe=t("td",null,"esbuild",-1),Ke=t("td",null,"rollup",-1),Xe=t("td",null,"vue",-1),ze={href:"https://parceljs.org/",target:"_blank",rel:"noopener noreferrer"},He=t("td",null,"零配置web构建工具",-1),Qe=t("td",null,"41,000",-1),Ue=t("td",null,"swc",-1),Ye=t("td",null,"custom",-1),Ze=t("td",null,"react vue",-1),$e={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},tn=t("td",null,"下一代前端工具",-1),en=t("td",null,"40,000",-1),nn=t("td",null,"esbuild",-1),on=t("td",null,"rollup",-1),ln=t("td",null,"react vue svelte",-1),sn={href:"https://www.snowpack.dev/",target:"_blank",rel:"noopener noreferrer"},rn=t("td",null,"ESM 驱动的前端构建工具",-1),dn=t("td",null,"20,000",-1),_n=t("td",null,"esbuild",-1),hn=t("td",null,"custom",-1),un=t("td",null,"react vue svelte",-1),cn={href:"https://create-react-app.dev/",target:"_blank",rel:"noopener noreferrer"},an=t("td",null,"通过命令设置现代 Web 应用程序",-1),pn=t("td",null,"94,000",-1),gn=t("td",null,"babel",-1),bn=t("td",null,"webpack",-1),fn=t("td",null,"react",-1),kn={href:"https://kit.svelte.dev/",target:"_blank",rel:"noopener noreferrer"},mn=t("td",null,"构建 Svelte 应用程序的最快方法",-1),wn=t("td",null,"7,700",-1),Sn=t("td",null,"esbuild",-1),vn=t("td",null,"rollup",-1),Tn=t("td",null,"svelte",-1),xn=t("p",null,[e("使用"),t("strong",null,"swc"),e("和"),t("strong",null,"esbuild"),e("构建的项目数量大致相同。"),t("strong",null,"webpack"),e("和"),t("strong",null,"rollup"),e("的情况也是如此。")],-1),jn=t("strong",null,"React",-1),Mn={href:"https://nextjs.org/",target:"_blank",rel:"noopener noreferrer"},yn=t("strong",null,"Next.js",-1),In={href:"https://vercel.com/login?next=%2Fdashboard",target:"_blank",rel:"noopener noreferrer"},Nn=t("strong",null,"Vue",-1),Vn={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://parceljs.org/",target:"_blank",rel:"noopener noreferrer"},En=t("h2",{id:"总结",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),e(" 总结")],-1),Pn=t("p",null,"在过去的10年里，现代web开发已经有了显著的发展。今天的开发人员很幸运，能够拥有如此广泛的令人惊叹的、维护良好的工具可供选择。",-1),An=t("p",null,[e("希望这篇文章能够帮助您分析当前 "),t("strong",null,"JS/TS"),e(" 开发工具领域中最重要的方面，并帮助您做出更明智的决策。")],-1);function Bn(Cn,Rn){const n=r("ExternalLinkIcon");return d(),_("div",null,[u,t("p",null,[e("原文："),t("a",i,[e("https://transitivebullsh.it/javascript-dev-tools-in-2022"),o(n)])]),c,t("table",null,[a,t("tbody",null,[t("tr",null,[t("td",null,[t("a",p,[e("tsc"),o(n)])]),g,b,f,k,m,w]),t("tr",null,[t("td",null,[t("a",S,[e("esbuild"),o(n)])]),v,T,x,j,M,y]),t("tr",null,[t("td",null,[t("a",I,[e("swc"),o(n)])]),N,V,J,E,P,A]),t("tr",null,[t("td",null,[t("a",B,[e("babel"),o(n)])]),C,R,q,W,L,D])])]),G,t("p",null,[e("请注意，"),O,e("和"),F,e("都不进行类型检查。他们只是尽可能快速和有效地将代码转换成所需的输出格式。目前，如果你正在使用"),K,e("，你几乎总是需要将官方的"),X,e("编译器作为你的工具链的一部分，以保证你能最大限度地利用"),z,e("的静态类型检查。值得一提的是，"),H,e("的作者 "),Q,e(" 正致力于将 "),t("a",U,[e("tsc移植到Go中"),o(n)]),e("，以消除在许多情况下对"),Y,e("的需求，因为"),Z,e("的编译速度往往是大多数工具链中的瓶颈。")]),$,t("p",null,[tt,e("和"),et,e("都是非常优秀的、非常快的开源 "),nt,e(" 编译器。它们的性能相当("),t("a",ot,[e("参考性能比较"),o(n)]),e(")，并被一些世界上最大的公司经常用于生产环境。")]),lt,st,t("ul",null,[t("li",null,[t("a",rt,[e("Vercel and Next.js"),o(n)])]),t("li",null,[t("a",dt,[e("Deno’s linter, formatter, and docs"),o(n)])]),t("li",null,[t("a",_t,[e("Parcel"),o(n)])])]),ht,t("ul",null,[t("li",null,[t("p",null,[t("a",ut,[e("Vite"),o(n)])])]),t("li",null,[t("p",null,[t("a",it,[e("Nuxt.js"),o(n)])])]),t("li",null,[t("p",null,[t("a",ct,[e("tsup"),o(n)])]),at])]),pt,gt,bt,t("table",null,[ft,t("tbody",null,[t("tr",null,[t("td",null,[t("a",kt,[e("Webpack"),o(n)])]),mt,wt,St,vt]),t("tr",null,[t("td",null,[t("a",Tt,[e("Rollup"),o(n)])]),xt,jt,Mt,yt]),t("tr",null,[t("td",null,[t("a",It,[e("Parcel"),o(n)])]),Nt,Vt,Jt,Et])])]),Pt,t("p",null,[e("要了解这些打包器的更详细的比较，请查看 "),t("a",At,[e("tooling.report"),o(n)]),e("。")]),Bt,Ct,t("table",null,[Rt,t("tbody",null,[t("tr",null,[t("td",null,[t("a",qt,[e("tsup"),o(n)])]),Wt,Lt,Dt,Gt,Ot]),t("tr",null,[t("td",null,[t("a",Ft,[e("tsdx"),o(n)])]),Kt,Xt,zt,Ht,Qt]),t("tr",null,[t("td",null,[t("a",Ut,[e("microbundle"),o(n)])]),Yt,Zt,$t,te,ee]),t("tr",null,[t("td",null,[t("a",ne,[e("Vite"),o(n)])]),oe,le,se,re,de]),t("tr",null,[t("td",null,[t("a",_e,[e("preconstruct"),o(n)])]),he,ue,ie,ce,ae]),t("tr",null,[t("td",null,[t("a",pe,[e("unbuild"),o(n)])]),ge,be,fe,ke,me])])]),we,t("p",null,[e("这些工具中的大多数目前没有为利用 "),t("a",Se,[e("composite project references"),o(n)]),e(" 的 "),ve,e(" 提供很好的支持。 目前，我对这种情况的建议是使用 "),Te,e(" 进行类型检查和生成 "),xe,e(" 类型（使用 "),je,e("）和 "),Me,e(" 来编译每个子包中的代码。 有关此方法的示例，请查看 "),t("a",ye,[e("react-notion-x"),o(n)]),e(" monorepo项目（我的 OSS 项目之一）。")]),Ie,t("ul",null,[t("li",null,[t("a",Ne,[e("要支持 Node.js ESM 需要什么？"),o(n)])]),t("li",null,[t("a",Ve,[e("发布"),o(n)]),e("和"),t("a",Je,[e("使用"),o(n)]),e("点击预览 ESM 包")])]),Ee,Pe,t("table",null,[Ae,t("tbody",null,[t("tr",null,[t("td",null,[t("a",Be,[e("Next.js"),o(n)])]),Ce,Re,qe,We,Le]),t("tr",null,[t("td",null,[t("a",De,[e("Nuxt.js"),o(n)])]),Ge,Oe,Fe,Ke,Xe]),t("tr",null,[t("td",null,[t("a",ze,[e("Parcel"),o(n)])]),He,Qe,Ue,Ye,Ze]),t("tr",null,[t("td",null,[t("a",$e,[e("Vite"),o(n)])]),tn,en,nn,on,ln]),t("tr",null,[t("td",null,[t("a",sn,[e("Snowpack"),o(n)])]),rn,dn,_n,hn,un]),t("tr",null,[t("td",null,[t("a",cn,[e("Create React App"),o(n)])]),an,pn,gn,bn,fn]),t("tr",null,[t("td",null,[t("a",kn,[e("SvelteKit"),o(n)])]),mn,wn,Sn,vn,Tn])])]),xn,t("p",null,[e("如果你打算在2022年使用"),jn,e("开发一个新的网页应用，那么我强烈推荐使用"),t("a",Mn,[yn,o(n)]),e("。它拥有最好的支持，最活跃的社区，并与世界领先的现代web应用部署平台"),t("a",In,[e("Vercel"),o(n)]),e("紧密集成。")]),t("p",null,[e("如果你正在使用"),Nn,e("开发一个新的web应用程序，那么"),t("a",Vn,[e("nuxt.js"),o(n)]),e("和Vite都是很好的选择。")]),t("p",null,[e("如果你想要更轻的东西，那就试一试 "),t("a",Jn,[e("Parcel"),o(n)]),e("。🤗")]),En,Pn,An])}const Wn=s(h,[["render",Bn],["__file","awesome-build.html.vue"]]);export{Wn as default};