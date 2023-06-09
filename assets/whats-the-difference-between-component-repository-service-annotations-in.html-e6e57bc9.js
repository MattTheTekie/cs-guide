import{_ as r,r as c,o as a,c as i,d as e,e as o,b as t,a as s}from"./app-3d979d38.js";const d={},p=s(`<h1 id="component-repository-service的区别" tabindex="-1"><a class="header-anchor" href="#component-repository-service的区别" aria-hidden="true">#</a> @Component, @Repository, @Service的区别</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>在spring集成的框架中，注解在类上的<code>@Component</code>，<code>@Repository</code>，<code>@Service</code>等注解能否被互换？或者说这些注解有什么区别？</p><h2 id="回答1" tabindex="-1"><a class="header-anchor" href="#回答1" aria-hidden="true">#</a> 回答1</h2><p>引用spring的官方文档中的一段描述：</p><p>在Spring2.0之前的版本中，<code>@Repository</code>注解可以标记在任何的类上，用来表明该类是用来执行与数据库相关的操作（即dao对象），并支持自动处理数据库操作产生的异常</p><p>在Spring2.5版本中，引入了更多的Spring类注解：<code>@Component</code>,<code>@Service</code>,<code>@Controller</code>。<code>Component</code>是一个通用的Spring容器管理的单例bean组件。而<code>@Repository</code>, <code>@Service</code>, <code>@Controller</code>就是针对不同的使用场景所采取的特定功能化的注解组件。</p><p>因此，当你的一个类被<code>@Component</code>所注解，那么就意味着同样可以用<code>@Repository</code>, <code>@Service</code>, <code>@Controller</code>来替代它，同时这些注解会具备有更多的功能，而且功能各异。</p><p>最后，如果你不知道要在项目的业务层采用<code>@Service</code>还是<code>@Component</code>注解。那么，<code>@Service</code>是一个更好的选择。</p><p>就如上文所说的，<code>@Repository</code>早已被支持了在你的持久层作为一个标记可以去自动处理数据库操作产生的异常（译者注：因为原生的java操作数据库所产生的异常只定义了几种，但是产生数据库异常的原因却有很多种，这样对于数据库操作的报错排查造成了一定的影响；而Spring拓展了原生的持久层异常，针对不同的产生原因有了更多的异常进行描述。所以，在注解了<code>@Repository</code>的类上如果数据库操作中抛出了异常，就能对其进行处理，转而抛出的是翻译后的spring专属数据库异常，方便我们对异常进行排查处理）。</p><table><thead><tr><th>注解</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td>@Component</td><td style="text-align:center;">最普通的组件，可以被注入到spring容器进行管理</td></tr><tr><td>@Repository</td><td style="text-align:center;">作用于持久层</td></tr><tr><td>@Service</td><td style="text-align:center;">作用于业务逻辑层</td></tr><tr><td>@Controller</td><td style="text-align:center;">作用于表现层（spring-mvc的注解）</td></tr></tbody></table><h2 id="回答2" tabindex="-1"><a class="header-anchor" href="#回答2" aria-hidden="true">#</a> 回答2</h2><p>这几个注解几乎可以说是一样的：因为被这些注解修饰的类就会被Spring扫描到并注入到Spring的bean容器中。</p><p>这里，有两个注解是不能被其他注解所互换的：</p><ul><li><code>@Controller</code> 注解的bean会被spring-mvc框架所使用。</li><li><code>@Repository</code> 会被作为持久层操作（数据库）的bean来使用</li></ul><p>如果想使用自定义的组件注解，那么只要在你定义的新注解中加上<code>@Component</code>即可：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span> 
<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">&quot;prototype&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ScheduleJob</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，所有被<code>@ScheduleJob</code>注解的类就都可以注入到spring容器来进行管理。我们所需要做的，就是写一些新的代码来处理这个自定义注解（译者注：可以用反射的方法），进而执行我们想要执行的工作。</p><h2 id="回答3" tabindex="-1"><a class="header-anchor" href="#回答3" aria-hidden="true">#</a> 回答3</h2><p><code>@Component</code>就是跟<code>&lt;bean&gt;</code>一样，可以托管到Spring容器进行管理。</p><p>@Service, @Controller , @Repository = {@Component + 一些特定的功能}。这个就意味着这些注解在部分功能上是一样的。</p><p>当然，下面三个注解被用于为我们的应用进行分层：</p><ul><li><code>@Controller</code>注解类进行前端请求的处理，转发，重定向。包括调用Service层的方法</li><li><code>@Service</code>注解类处理业务逻辑</li><li><code>@Repository</code>注解类作为DAO对象（数据访问对象，Data Access Objects），这些类可以直接对数据库进行操作</li></ul><p>有这些分层操作的话，代码之间就实现了松耦合，代码之间的调用也清晰明朗，便于项目的管理；假想一下，如果只用<code>@Controller</code>注解，那么所有的请求转发，业务处理，数据库操作代码都糅合在一个地方，那这样的代码该有多难拓展和维护。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><code>@Component</code>, <code>@Service</code>, <code>@Controller</code>, <code>@Repository</code>是spring注解，注解后可以被spring框架所扫描并注入到spring容器来进行管理</li><li><code>@Component</code>是通用注解，其他三个注解是这个注解的拓展，并且具有了特定的功能</li><li><code>@Repository</code>注解在持久层中，具有将数据库操作抛出的原生异常翻译转化为spring的持久层异常的功能。</li><li><code>@Controller</code>层是spring-mvc的注解，具有将请求进行转发，重定向的功能。</li><li><code>@Service</code>层是业务逻辑层注解，这个注解只是标注该类处于业务逻辑层。</li><li>用这些注解对应用进行分层之后，就能将请求处理，义务逻辑处理，数据库操作处理分离出来，为代码解耦，也方便了以后项目的维护和开发。</li></ul><h2 id="stackoverflow链接" tabindex="-1"><a class="header-anchor" href="#stackoverflow链接" aria-hidden="true">#</a> Stackoverflow链接</h2>`,27),l={href:"http://stackoverflow.com/questions/6827752/whats-the-difference-between-component-repository-service-annotations-in",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"拓展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#拓展","aria-hidden":"true"},"#"),o(" 拓展")],-1),u={href:"http://www.cnblogs.com/JAYIT/p/5593169.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.cnblogs.com/leiOOlei/p/3713779.html",target:"_blank",rel:"noopener noreferrer"};function m(g,b){const n=c("ExternalLinkIcon");return a(),i("div",null,[p,e("p",null,[e("a",l,[o("http://stackoverflow.com/questions/6827752/whats-the-difference-between-component-repository-service-annotations-in"),t(n)])]),h,e("ol",null,[e("li",null,[e("a",u,[o("Spring注解@Component、@Repository、@Service、@Controller区别"),t(n)])]),e("li",null,[e("a",v,[o("Spring注解@Autowired、@Resource区别"),t(n)])])])])}const S=r(d,[["render",m],["__file","whats-the-difference-between-component-repository-service-annotations-in.html.vue"]]);export{S as default};
