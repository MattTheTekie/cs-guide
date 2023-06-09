import{_ as p,r as o,o as i,c,d as n,e as s,b as t,a as e}from"./app-3d979d38.js";const l={},r=e('<h1 id="监听器" tabindex="-1"><a class="header-anchor" href="#监听器" aria-hidden="true">#</a> 监听器</h1><p>大家都知道，在 Spring 框架中事件和监听无处不在，打通了 Spring 框架的任督二脉，事件和监听也是 Spring 框架必学的核心知识之一。</p><p>一般来说，我们很少会使用到应用程序事件，但我们也不要忘了它们的存在，比如说在 Spring 框架内部都使用了各种不同的事件来处理不同的任务。</p><p>毫无疑问，在 Spring Boot 框架中，事件和监听也得到了发扬光大，除了常用的 Spring Framework 事件（例如：ContextRefreshedEvent）之外，Spring Boot 在启动过程中还发送一系列其他的应用程序事件。</p><h2 id="spring-boot-启动事件顺序" tabindex="-1"><a class="header-anchor" href="#spring-boot-启动事件顺序" aria-hidden="true">#</a> <strong>Spring Boot 启动事件顺序</strong></h2><p><strong>1、ApplicationStartingEvent</strong></p><p>这个事件在 Spring Boot 应用运行开始时，且进行任何处理之前发送（除了监听器和初始化器注册之外）。</p><p><strong>2、ApplicationEnvironmentPreparedEvent</strong></p><p>这个事件在当已知要在上下文中使用 Spring 环境（Environment）时，在 Spring 上下文（context）创建之前发送。</p><p><strong>3、ApplicationContextInitializedEvent</strong></p><p>这个事件在当 Spring 应用上下文（ApplicationContext）准备好了，并且应用初始化器（ApplicationContextInitializers）已经被调用，在 bean 的定义（bean definitions）被加载之前发送。</p><p><strong>4、ApplicationPreparedEvent</strong></p><p>这个事件是在 Spring 上下文（context）刷新之前，且在 bean 的定义（bean definitions）被加载之后发送。</p><p><strong>5、ApplicationStartedEvent</strong></p>',14),u={href:"https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247484366&idx=1&sn=7dc94038861fe9e10cdf132ffc83092f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},d=n("strong",null,"application/ command-line runners",-1),k=n("p",null,[n("strong",null,"6、AvailabilityChangeEvent")],-1),v=n("p",null,"这个事件紧随上个事件之后发送，状态：ReadinessState.CORRECT，表示应用已处于活动状态。",-1),g=n("p",null,[n("strong",null,"7、ApplicationReadyEvent")],-1),h={href:"https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247484366&idx=1&sn=7dc94038861fe9e10cdf132ffc83092f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"application/ command-line runners",-1),_=n("p",null,[n("strong",null,"8、AvailabilityChangeEvent")],-1),b=n("p",null,"这个事件紧随上个事件之后发送，状态：ReadinessState.ACCEPTING_TRAFFIC，表示应用可以开始准备接收请求了。",-1),f=n("p",null,[n("strong",null,"9、ApplicationFailedEvent")],-1),S=n("p",null,"这个事件在应用启动异常时进行发送。",-1),x=n("hr",null,null,-1),A=n("p",null,"上面所介绍的这些事件列表仅包括绑定到 SpringApplication 的 SpringApplicationEvents 事件，除了这些事件以外，以下事件也会在 ApplicationPreparedEvent 之后和 ApplicationStartedEvent 之前发送：",-1),E=n("strong",null,"WebServerInitializedEvent",-1),w={href:"https://cloud.tencent.com/product/cvm?from=10680",target:"_blank",rel:"noopener noreferrer"},C=n("li",null,[n("strong",null,"ContextRefreshedEvent"),s(" 这个上下文刷新事件是在 Spring 应用上下文（ApplicationContext）刷新之后发送。")],-1),y=n("hr",null,null,-1),z=n("h2",{id:"自定义启动事件监听器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义启动事件监听器","aria-hidden":"true"},"#"),s(),n("strong",null,"自定义启动事件监听器")],-1),B=n("p",null,"既然我们知道了 Spring Boot 在启动过程中的各个事件，那么我们就可以在每个环节来处理一些我们想做的事情，只需要自定义一个监听器来监听某个事件就可以了。",-1),I=n("p",null,"比如我们想在上面的第 8 步，即应用启动完成可以接收请求了，我们简单输出一个成功标识。",-1),q=n("p",null,"Spring Boot 基础的构建这里就不介绍了，如果你对 Spring Boot 还不是很熟悉，或者只是会简单的使用，那还是建议你深入学习下吧，推荐这个 Spring Boot 学习仓库，欢迎 Star 关注：",-1),j={href:"https://github.com/javastacks/spring-boot-best-practice",target:"_blank",rel:"noopener noreferrer"},R=e(`<h4 id="_1、新建监听器" tabindex="-1"><a class="header-anchor" href="#_1、新建监听器" aria-hidden="true">#</a> <strong>1、新建监听器</strong></h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>availability<span class="token punctuation">.</span></span><span class="token class-name">AvailabilityChangeEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>availability<span class="token punctuation">.</span></span><span class="token class-name">ReadinessState</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationListener</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 来源微信公众号：Java技术栈
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavastackListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AvailabilityChangeEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">AvailabilityChangeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;监听到事件：&quot;</span> <span class="token operator">+</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ReadinessState</span><span class="token punctuation">.</span><span class="token constant">ACCEPTING_TRAFFIC</span> <span class="token operator">==</span> event<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;应用启动完成，可以请求了……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><p>新建一个自定义监听器，实现了 ApplicationListener 接口，泛型 AvailabilityChangeEvent 表示仅仅监听 AvailabilityChangeEvent 事件。</p><p>因第 8 步的事件和第 6 步的事件同名，我们可以根据事件的状态来区分到底是哪一个环节的事件 。</p><h4 id="_2、注册监听器" tabindex="-1"><a class="header-anchor" href="#_2、注册监听器" aria-hidden="true">#</a> <strong>2、注册监听器</strong></h4><p><strong>注册监听器有两种方式：</strong></p><p>1、在资源目录中的 META-INF/spring.factories 文件中自动注册：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span>ApplicationListener</span><span class="token operator">=</span>\\
<span class="token class-name"><span class="token namespace">cn<span class="token punctuation">.</span>javastack<span class="token punctuation">.</span>springboot<span class="token punctuation">.</span>features<span class="token punctuation">.</span>listener<span class="token punctuation">.</span></span>JavastackListener</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><p>2、如果是监听 Spring 应用上下文（ApplicationContext）创建之后的事件，可以直接在监听器上使用 @Component 注解即可，否则需要使用第一种方法的自动注册，因为 ApplicationContext 并未创建，这时的 Bean 是不能被加载的。</p><h4 id="_3、应用启动" tabindex="-1"><a class="header-anchor" href="#_3、应用启动" aria-hidden="true">#</a> <strong>3、应用启动</strong></h4><p>下面来看下启动日志：</p><p><img src="https://ask.qcloudimg.com/http-save/yehe-1344757/6b5tu95qiz.png?imageView2/2/w/1620" alt="img"></p><p>可以看到同时输出了第 6 步和 8 步的监听日志，但只输出第 8 步的启动完成日志，自定义监听实现成功。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> <strong>总结</strong></h2><p>了解了 Spring Boot 启动过程中的各个事件及监听机制，大家可以依葫芦画瓢实现 Spring Boot 启动过程中的各个自定义操作，比如说在启动过程上实现动态注册、移除 Bean 等。</p>`,17),M={href:"https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247484366&idx=1&sn=7dc94038861fe9e10cdf132ffc83092f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},L=n("strong",null,"application/ command-line runners",-1);function F(N,T){const a=o("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[s("这个事件是在 Spring 上下文（context）刷新之后，且在 "),n("a",u,[d,t(a)]),s(" 被调用之前发送。")]),k,v,g,n("p",null,[s("这个事件在任何 "),n("a",h,[m,t(a)]),s(" 调用之后发送。")]),_,b,f,S,x,A,n("ul",null,[n("li",null,[E,s(" 这个 Web "),n("a",w,[s("服务器"),t(a)]),s("初始化事件在 WebServer 启动之后发送，对应的还有 ServletWebServerInitializedEvent（Servlet Web 服务器初始化事件）、ReactiveWebServerInitializedEvent（响应式 Web 服务器初始化事件）。")]),C]),y,z,B,I,q,n("blockquote",null,[n("p",null,[n("a",j,[s("https://github.com/javastacks/spring-boot-best-practice"),t(a)])])]),R,n("p",null,[s("一般来说，不建议使用事件和监听器来实现比较耗时和繁重的任务，这样会影响应用程序的正常启动，考虑使用 Spring Boot 的 "),n("a",M,[L,t(a)]),s(" 来进行实现。")])])}const O=p(l,[["render",F],["__file","application-listener.html.vue"]]);export{O as default};
