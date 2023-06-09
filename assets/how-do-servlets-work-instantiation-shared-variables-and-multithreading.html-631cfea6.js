import{_ as t,r as n,o as a,c as o,d as e,e as r,b as i,a as l}from"./app-3d979d38.js";const c={},p=l(`<h1 id="servelets如何工作呢" tabindex="-1"><a class="header-anchor" href="#servelets如何工作呢" aria-hidden="true">#</a> servelets如何工作呢?</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>假设，我有一个web服务器可以支持无数的servlets，对于通过这些servlets的信息，我正在获取这些servlets的上下文环境，并设置session变量。 现在，如果有两个或者更多的user用户发送请求到这个服务器，session变量会发生什么变化？session对于所有的user是公共的还是不同的user拥有不同的session。如果用户彼此之间的session是不同的，那么服务器怎么区分辨别不同的用户呢？ 另外一些相似的问题，如果有N个用户访问一个具体的servlets，那么这个servlets是只在第一个用户第一次访问的时候实例化，还是为每一个用户各自实例化呢？</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><h3 id="servletcontext" tabindex="-1"><a class="header-anchor" href="#servletcontext" aria-hidden="true">#</a> ServletContext</h3><p>当servletcontainer（像tomcat）启动的时候，它会部署和加载所有的webapplications，当一个webapplication加载完成后，servletcontainer就会创建一个ServletContext，并且保存在服务器的内存中。这个webapp的web.xml会被解析，web.xml中的每个<code>&lt;servlet&gt;, &lt;filter&gt; and &lt;listener&gt;</code>或者通过注解<code>@WebServlet, @WebFilter and @WebListener</code>，都会被创建一次并且也保存在服务器的内存中。对于所有filter，<code>init()</code>方法会被直接触发，当servletcontainer关闭的时候，它会unload所有的webapplications,触发所有实例化的servlets和filters的<code>destroy()</code>方法,最后，servletcontext和所有的servlets，filter和listener实例都会被销毁。</p><h3 id="httpservletrequest-and-httpservletresponse" tabindex="-1"><a class="header-anchor" href="#httpservletrequest-and-httpservletresponse" aria-hidden="true">#</a> HttpServletRequest and HttpServletResponse</h3><p>servletcontainer 是附属于webserver的，而这个webserver会持续监听一个目标端口的<code>HTTP request</code>请求，这个端口在开发中经常会被设置成8080，而在生产环境会被设置成80。当一个客户端（比如用户的浏览器）发送一个HTTP request，servletcontainer就会创建新的HttpServletRequest对象和HttpServletResponse对象。。。。</p><p>在有filter的情况下，<code>doFilter()</code>方法会被触发。当代码调用<code>chain.doFilter(request, response)</code>时候，请求会经过下一个过滤器filter，如果没有了过滤器，会到达servlet。在servlets的情况下，<code>service()</code>触发，然后根据<code>request.getMethod()</code>确定执行doGet()还是<code>doPost()</code>，如果当前servlet找不到请求的方法，返回405error。</p><p>request对象提供了HTTP请求所有的信息，比如request headers和request body，response对象提供了控制和发送HTTP响应的的能力，并且以你想要的方式，比如设置headers和body。当HTTP响应结束，请求和响应对象会被销毁（实际上，大多数container将会清洗到这些对象的状态然后回收这些事例以重新利用）</p><h3 id="httpsession" tabindex="-1"><a class="header-anchor" href="#httpsession" aria-hidden="true">#</a> httpSession</h3><p>当客户端第一次访问webapp或者通过<code>request.getSession()</code>方法第一次获取httpSession ，servletcontainer 将会创建一个新的HttpSession 对象，产生一个长的唯一的ID标记session（可以通过session.getId()）,并且将这个session存储在server内存中。servletcontainer 同时会在HTTP response的Header中设置<code>Set-Cookie</code>cookie值，其中cookie name为JSESSIONID，cookie value为唯一的长ID值。</p><p>在接下来的连续请求中，客户端浏览器都要cookie通过header带回，然后servletcontainer 会根据cookie中的JSESSIONID 值，获得server内存中的对应的httpSession。</p><p>只要没超过<code>&lt;session-timeout&gt;</code>设定的值，httpSession对象会一直存在，<code>&lt;session-timeout&gt;</code>大小可以在web.xml中设定，默认是30分钟。所以如果连续30分钟之内客户端不再访问webapp，servletcontainer就会销毁对应的session。接下来的request请求即使cookies依旧存在，但是却不再有对应的session了。servletcontainer 会创建新的session。</p><p>另外一方面，session cookie在浏览器端有默认的生命时长，就是只要浏览器一直在运行，所以当浏览器关闭，浏览器端的cookie会被销毁。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li>只要webapp存在，ServletContext 一定会存在。并且ServletContext 是被所有session和request共享的。</li><li>只要客户端用同一个浏览器和webapp交互并且该session没有在服务端超时，HttpSession 就会一直存在。并且在同一个会话中所有请求都是共享的。</li><li>只有当完整的response响应到达，HttpServletRequest 和 HttpServletResponse才不再存活，并且不被共享。</li><li>只要webapp存在，servlet、filter和listener就会存在。他们被所有请求和会话共享。</li><li>只要问题中的对象存在，任何设置在ServletContext, HttpServletRequest 和 HttpSession中的属性就会存在。</li></ul><h3 id="线程安全" tabindex="-1"><a class="header-anchor" href="#线程安全" aria-hidden="true">#</a> 线程安全</h3><p>就是说，你主要关注的是线程安全性。你应该了解到，servlets和filter是被所有请求共享的。这正是Java的美妙之处，它的多线程和不同的线程可以充分利用同样的实例instance，否则对于每一个request请求都要重复创建和调用init()和destroy()开销太大。</p><p>但是你也应该注意到，你不应该把任何请求或会话作用域的数据作为一个servlet或过滤器的实例变量。这样会被其他会话的请求共享，并且那是线程不安全的！下面的例子阐明的这点：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Object</span> thisIsNOTThreadSafe<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> thisIsThreadSafe<span class="token punctuation">;</span>

        thisIsNOTThreadSafe <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// BAD!! Shared among all requests!</span>
        thisIsThreadSafe <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK, this is thread safe.</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stackoverflow链接：</p>`,22),d={href:"http://stackoverflow.com/questions/3106452/how-do-servlets-work-instantiation-shared-variables-and-multithreading",target:"_blank",rel:"noopener noreferrer"};function u(v,h){const s=n("ExternalLinkIcon");return a(),o("div",null,[p,e("p",null,[e("a",d,[r("http://stackoverflow.com/questions/3106452/how-do-servlets-work-instantiation-shared-variables-and-multithreading"),i(s)])])])}const b=t(c,[["render",u],["__file","how-do-servlets-work-instantiation-shared-variables-and-multithreading.html.vue"]]);export{b as default};
