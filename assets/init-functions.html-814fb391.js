import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const p={},o=t(`<h1 id="初始化执行操作" tabindex="-1"><a class="header-anchor" href="#初始化执行操作" aria-hidden="true">#</a> 初始化执行操作</h1><p>通常的我们的项目开发中，经常会遇到那种在服务一启动就需要自动执行一些业务代码的情况。比如将数据库中的配置信息或者数据字典之类的缓存到redis，或者在服务启动的时候将一些配置化的定时任务开起来。关于spring mvc或者springboot如何在项目启动的时候就执行一些代码</p><h2 id="postconstruct注解" tabindex="-1"><a class="header-anchor" href="#postconstruct注解" aria-hidden="true">#</a> <code>@PostConstruct</code>注解</h2><p>从Java EE5规范开始，Servlet中增加了两个影响Servlet生命周期的注解，@PostConstruct和@PreDestroy，这两个注解被用来修饰一个非静态的void（）方法。@PostConstruct会在所在类的构造函数执行之后执行，在init()方法执行之前执行。(@PreDestroy注解的方法会在这个类的destory()方法执行之后执行。) @PostConstruct 不是spring提供的而是Java自己的注解。</p><p>Java中该注解的说明：@PostConstruct该注解被用来修饰一个非静态的void（）方法。被@PostConstruct修饰的方法会在服务器加载Servlet的时候运行，并且只会被服务器执行一次。PostConstruct注释用于需要依赖注入完成后才能执行任何初始化的方法上。 在类投入使用之前，必须调用此方法</p><p>在使用spring框架时，在一个类内，如果有构造器（Constructor ），有@PostConstruct，还有@Autowired，他们的先后执行顺序为Constructor &gt;&gt; @Autowired &gt;&gt; @PostConstruct。在类加载的时候，为当前类初始化一些数据，那么可以使用@PostConstruct注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span> <span class="token comment">// 注意 这里必须有</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StartAllJobInit</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JobInfoService</span> jobInfoService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JobTaskUtil</span> jobTaskUtil<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostConstruct</span> <span class="token comment">// 构造函数之后执行</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;容器启动后执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">startJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">JobInfoBO</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> jobInfoService<span class="token punctuation">.</span><span class="token function">findList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">JobInfoBO</span> jobinfo <span class="token operator">:</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">.</span><span class="token function">getStartWithrun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;任务{}未设置自动启动。&quot;</span><span class="token punctuation">,</span> jobinfo<span class="token punctuation">.</span><span class="token function">getJobName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    jobInfoService<span class="token punctuation">.</span><span class="token function">updateJobStatus</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">BasicsConstantManual</span><span class="token punctuation">.</span><span class="token constant">BASICS_SYS_JOB_STATUS_STOP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;任务{}设置了自动启动。&quot;</span><span class="token punctuation">,</span> jobinfo<span class="token punctuation">.</span><span class="token function">getJobName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    jobTaskUtil<span class="token punctuation">.</span><span class="token function">addOrUpdateJob</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    jobInfoService<span class="token punctuation">.</span><span class="token function">updateJobStatus</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">BasicsConstantManual</span><span class="token punctuation">.</span><span class="token constant">BASICS_SYS_JOB_STATUS_STARTING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SchedulerException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;执行定时任务出错，任务名称 {} &quot;</span><span class="token punctuation">,</span> jobinfo<span class="token punctuation">.</span><span class="token function">getJobName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现commandlinerunner接口并重写run-方法" tabindex="-1"><a class="header-anchor" href="#实现commandlinerunner接口并重写run-方法" aria-hidden="true">#</a> 实现CommandLineRunner接口并重写run()方法</h2><p>其实有两个接口ApplicationRunner,CommandLineRunner</p><p>这两个接口中有一个run方法，只需要实现这个方法即可。这两个接口的不同之处在于：ApplicationRunner中run方法的参数为ApplicationArguments，而CommandLineRunner接口中run方法的参数为String数组。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意：一定要有@Component这个注解。要不然SpringBoot扫描不到这个类,* 是不会执行。</p><p>@Order注解 如果有多个实现类，而需要他们按一定顺序执行的话，可以在实现类上加上@Order注解。@Order(value=整数值)。SpringBoot会按照@Order中的value值从小到大依次执行。</p></div><p>例子</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span> <span class="token comment">// 注意 这里必须有</span>
<span class="token comment">//@Order(2) 如果有多个类需要启动后执行 order注解中的值为启动的顺序</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StartAllJobInit</span> <span class="token keyword">implements</span> <span class="token class-name">CommandLineRunner</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JobInfoService</span> jobInfoService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JobTaskUtil</span> jobTaskUtil<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">JobInfoBO</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> jobInfoService<span class="token punctuation">.</span><span class="token function">findList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">JobInfoBO</span> jobinfo <span class="token operator">:</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">.</span><span class="token function">getStartWithrun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;任务{}未设置自动启动。&quot;</span><span class="token punctuation">,</span> jobinfo<span class="token punctuation">.</span><span class="token function">getJobName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    jobInfoService<span class="token punctuation">.</span><span class="token function">updateJobStatus</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">BasicsConstantManual</span><span class="token punctuation">.</span><span class="token constant">BASICS_SYS_JOB_STATUS_STOP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;任务{}设置了自动启动。&quot;</span><span class="token punctuation">,</span> jobinfo<span class="token punctuation">.</span><span class="token function">getJobName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    jobTaskUtil<span class="token punctuation">.</span><span class="token function">addOrUpdateJob</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    jobInfoService<span class="token punctuation">.</span><span class="token function">updateJobStatus</span><span class="token punctuation">(</span>jobinfo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">BasicsConstantManual</span><span class="token punctuation">.</span><span class="token constant">BASICS_SYS_JOB_STATUS_STARTING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SchedulerException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;执行定时任务出错，任务名称 {} &quot;</span><span class="token punctuation">,</span> jobinfo<span class="token punctuation">.</span><span class="token function">getJobName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用监听器" tabindex="-1"><a class="header-anchor" href="#使用监听器" aria-hidden="true">#</a> 使用监听器</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
 

<span class="token doc-comment comment">/**
 * 初始化常量的监听器
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * 当spring装配好配置后，就去数据库读constants
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>等待解决<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://docs.spring.io/spring-boot/docs/2.7.0/reference/htmlsingle/#features.spring-application.application-events-and-listeners<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 *
 * <span class="token keyword">@author</span> yanni
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConstantsInitListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApplicationContextInitializedEvent</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Ordered</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Log</span> log <span class="token operator">=</span> <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> initSql <span class="token operator">=</span> <span class="token string">&quot;select config_value from tb_blog_config where config_field = &#39;init&#39;&quot;</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Ordered</span><span class="token punctuation">.</span><span class="token constant">HIGHEST_PRECEDENCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContextInitializedEvent</span> applicationContextInitializedEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConfigurableEnvironment</span> environment <span class="token operator">=</span> applicationContextInitializedEvent<span class="token punctuation">.</span><span class="token function">getApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取数据库连接配置</span>
        <span class="token class-name">String</span> dataSourceUrl <span class="token operator">=</span> environment<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> dataSourceUsername <span class="token operator">=</span> environment<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> dataSourcePassword <span class="token operator">=</span> environment<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 如果有为空的配置，终止执行</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtil</span><span class="token punctuation">.</span><span class="token function">hasEmpty</span><span class="token punctuation">(</span>dataSourceUrl<span class="token punctuation">,</span> dataSourceUsername<span class="token punctuation">,</span> dataSourcePassword<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;database not cononnected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;org.postgresql.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">assert</span> dataSourceUrl <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>dataSourceUrl<span class="token punctuation">,</span> dataSourceUsername<span class="token punctuation">,</span> dataSourcePassword<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Entity</span> init <span class="token operator">=</span> <span class="token class-name">SqlExecutor</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> initSql<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">EntityHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>init <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">SqlExecutor</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span><span class="token class-name">SqlConstant</span><span class="token punctuation">.</span>initAdminSql <span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token class-name">SqlExecutor</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> <span class="token class-name">SqlConstant</span><span class="token punctuation">.</span>insertConfigDataSql<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token class-name">SqlExecutor</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span><span class="token class-name">SqlConstant</span><span class="token punctuation">.</span>initTagSql <span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token class-name">SqlExecutor</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span><span class="token class-name">SqlConstant</span><span class="token punctuation">.</span>initCateSql <span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token class-name">SqlExecutor</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span><span class="token class-name">SqlConstant</span><span class="token punctuation">.</span>initLinkSql <span class="token punctuation">)</span><span class="token punctuation">;</span>
               log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;执行sql成功!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;数据已经存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 获取sys_config表的数据</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> <span class="token operator">|</span> <span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; 读取数据库constants配置信息出错：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token class-name">DbUtil</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<code>resources/META-INF/spring.factories</code>写下</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>org.springframework.context.ApplicationListener=\\
com.site.blog.config.listener.ConstantsInitListener
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以在启动前写入sql</p>`,18),c=[o];function e(i,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","init-functions.html.vue"]]);export{k as default};