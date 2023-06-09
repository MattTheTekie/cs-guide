import{_ as e,r as o,o as c,c as l,d as n,e as s,b as t,a as p}from"./app-3d979d38.js";const u={},i=n("h1",{id:"xml解析器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xml解析器","aria-hidden":"true"},"#"),s(" XML解析器")],-1),k={href:"https://www.jc2182.com/xml/xml-jiaocheng.html",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"XMLPullParser",-1),d=p(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current</span><span class="token punctuation">&gt;</span></span>
  
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>city</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2643743<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>London<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>coord</span> <span class="token attr-name">lon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-0.12574<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>51.50853<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>country</span><span class="token punctuation">&gt;</span></span>GB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>country</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sun</span> <span class="token attr-name">rise</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2013-10-08T06:13:56<span class="token punctuation">&quot;</span></span> <span class="token attr-name">set</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2013-10-08T17:21:45<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>city</span><span class="token punctuation">&gt;</span></span>
  
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>temperature</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>289.54<span class="token punctuation">&quot;</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>289.15<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>290.15<span class="token punctuation">&quot;</span></span> <span class="token attr-name">unit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>kelvin<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>humidity</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>77<span class="token punctuation">&quot;</span></span> <span class="token attr-name">unit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pressure</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1025<span class="token punctuation">&quot;</span></span> <span class="token attr-name">unit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hPa<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xml-解析" tabindex="-1"><a class="header-anchor" href="#xml-解析" aria-hidden="true">#</a> XML-解析</h2><p>在下一步中，我们将创建XMLPullParser对象，但是为了创建该对象，我们将首先创建XmlPullParserFactory对象，然后调用其newPullParser()方法创建XMLPullParser。其语法如下-</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">private</span> <span class="token class-name">XmlPullParserFactory</span> xmlFactoryObject <span class="token operator">=</span> <span class="token class-name">XmlPullParserFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">XmlPullParser</span> myparser <span class="token operator">=</span> xmlFactoryObject<span class="token punctuation">.</span><span class="token function">newPullParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下一步涉及为XmlPullParser指定包含XML的文件。它可以是文件，也可以是流。在我们的例子中它是一个流，其语法如下-</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  myparser<span class="token punctuation">.</span><span class="token function">setInput</span><span class="token punctuation">(</span>stream<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后一步是解析XML。XML文件包含事件，名称，文本，AttributesValue等，因此XMLPullParser具有用于解析XML文件的每个组件的单独功能。其语法如下-</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">int</span> event <span class="token operator">=</span> myParser<span class="token punctuation">.</span><span class="token function">getEventType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>event <span class="token operator">!=</span> <span class="token class-name">XmlPullParser</span><span class="token punctuation">.</span><span class="token constant">END_DOCUMENT</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
     <span class="token class-name">String</span> name<span class="token operator">=</span>myParser<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token class-name">XmlPullParser</span><span class="token punctuation">.</span><span class="token constant">START_TAG</span><span class="token operator">:</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
  
        <span class="token keyword">case</span> <span class="token class-name">XmlPullParser</span><span class="token punctuation">.</span><span class="token constant">END_TAG</span><span class="token operator">:</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;temperature&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           temperature <span class="token operator">=</span> myParser<span class="token punctuation">.</span><span class="token function">getAttributeValue</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>             
     event <span class="token operator">=</span> myParser<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                     
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法getEventType返回发生的事件的类型。例如：Document start，tag start等。getName方法返回标签的名称，并且由于我们只对温度感兴趣，因此我们仅在条件语句中检查是否有温度标签，则调用getAttributeValue方法返回给我们。温度标签的值。除了这些方法之外，此类还提供了其他方法来更好地解析XML文件。这些方法在下面列出-</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><strong>getAttributeCount()</strong></td><td>此方法只返回当前开始标记的属性数。</td></tr><tr><td><strong>getAttributeName（int index）</strong></td><td>此方法返回由索引值指定的属性的名称。</td></tr><tr><td><strong>getColumnNumber()</strong></td><td>此方法返回从0开始的当前列号。</td></tr><tr><td><strong>getDepth()</strong></td><td>此方法返回返回元素的当前深度。</td></tr><tr><td><strong>getLineNumber()</strong></td><td>返回当前行号，从1开始。</td></tr><tr><td><strong>getNamespace()</strong></td><td>此方法返回当前元素的名称空间URI。</td></tr><tr><td><strong>getPrefix()</strong></td><td>此方法返回当前元素的前缀。</td></tr><tr><td><strong>getName()</strong></td><td>此方法返回标签的名称。</td></tr><tr><td><strong>getText()</strong></td><td>此方法返回该特定元素的文本。</td></tr><tr><td><strong>isWhitespace()</strong></td><td>此方法检查当前的TEXT事件是否仅包含空格字符。</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>这是一个演示XML DOM分析器用法的示例。它创建一个基本的应用程序，使您可以解析XML。 要试验该示例，您可以在实际设备或仿真器上运行它。</p>`,12),m={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"修改src/MainActivity.java文件以添加必要的代码。",-1),g=n("li",null,"修改res/layout/activity_main以添加相应的XML组件",-1),b=n("li",null,"在assets/file.xml创建一个新的XML文件",-1),y=n("li",null,"运行该应用程序以启动Android模拟器并验证在该应用程序中所做更改的结果。",-1),q=p(`<p>以下是修改后的主要活动文件src/com.jc2182.demo/MainActivity.java的内容。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
  
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>
  
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span></span><span class="token class-name">TextureView</span><span class="token punctuation">.</span><span class="token class-name">SurfaceTextureListener</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">TextView</span></span><span class="token punctuation">;</span>
  
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token class-name">Document</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token class-name">Element</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token class-name">Node</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token class-name">NodeList</span></span><span class="token punctuation">;</span>
  
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
  
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span></span><span class="token class-name">DocumentBuilder</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span></span><span class="token class-name">DocumentBuilderFactory</span></span><span class="token punctuation">;</span>
  
  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainActivity</span> <span class="token keyword">extends</span> <span class="token class-name">Activity</span> <span class="token punctuation">{</span>
      <span class="token class-name">TextView</span> tv1<span class="token punctuation">;</span>
  
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span><span class="token punctuation">;</span>
          tv1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">TextView</span><span class="token punctuation">)</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>textView1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
              <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token function">getAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token string">&quot;file.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
              <span class="token class-name">DocumentBuilderFactory</span> dbFactory <span class="token operator">=</span> <span class="token class-name">DocumentBuilderFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token class-name">DocumentBuilder</span> dBuilder <span class="token operator">=</span> dbFactory<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token class-name">Document</span> doc <span class="token operator">=</span> dBuilder<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
              <span class="token class-name">Element</span> element<span class="token operator">=</span>doc<span class="token punctuation">.</span><span class="token function">getDocumentElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              element<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
              <span class="token class-name">NodeList</span> nList <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;employee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
              <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nList<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
                  <span class="token class-name">Node</span> node <span class="token operator">=</span> nList<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getNodeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span><span class="token constant">ELEMENT_NODE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      <span class="token class-name">Element</span> element2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">)</span> node<span class="token punctuation">;</span>
                      tv1<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>tv1<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;\\nName : &quot;</span> <span class="token operator">+</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> element2<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                      tv1<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>tv1<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;Surname : &quot;</span> <span class="token operator">+</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&quot;surname&quot;</span><span class="token punctuation">,</span> element2<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                      tv1<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>tv1<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;-----------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
  
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
  
      <span class="token punctuation">}</span>
  
      <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> tag<span class="token punctuation">,</span> <span class="token class-name">Element</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">NodeList</span> nodeList <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">Node</span> node <span class="token operator">=</span> nodeList<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> node<span class="token punctuation">.</span><span class="token function">getNodeValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是res/layout/activity_main.xml文件的内容-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/tools<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">tools:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
          <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/textView1<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是assets/file.xml文件的内容-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>records</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>employee</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Sairamkrishna<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>surname</span><span class="token punctuation">&gt;</span></span>Mammahe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>surname</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>salary</span><span class="token punctuation">&gt;</span></span>50000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>salary</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>employee</span><span class="token punctuation">&gt;</span></span>
  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>employee</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Gopal <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>surname</span><span class="token punctuation">&gt;</span></span>Varma<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>surname</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>salary</span><span class="token punctuation">&gt;</span></span>60000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>salary</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>employee</span><span class="token punctuation">&gt;</span></span>
  
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>employee</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Raja<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>surname</span><span class="token punctuation">&gt;</span></span>Hr<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>surname</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>salary</span><span class="token punctuation">&gt;</span></span>70000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>salary</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>employee</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>records</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们尝试运行刚刚修改的应用程序。我假设您在进行环境设置时已创建了AVD。要从Android Studio运行该应用，请打开您项目的活动文件之一，然后工具栏中单击“运行”图标。Android studio将应用程序安装在您的AVD上并启动它，如果设置和应用程序一切正常，它将显示在“模拟器”窗口下面-</p><p><img src="https://www.jc2182.com/images/android/xml.png" alt=""></p>`,8);function h(w,x){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[n("a",k,[s("XML"),t(a)]),s("表示可扩展标记语言。XML是一种非常流行的格式，通常用于在Internet上共享数据。本章说明如何解析XML文件并从中提取必要的信息。Android提供了三种类型的XML解析器，分别是DOM，SAX和XMLPullParser。在所有这些之中，android推荐"),r,s("，因为它高效且易于使用。因此，我们将使用XMLPullParser来解析XML。第一步是识别XML数据中您感兴趣的字段。例如。在下面给出的XML中，我们仅对获取温度感兴趣。")]),d,n("ol",null,[n("li",null,[s("您将使用Android Studio创建一个Android应用程序，并将其命名为Demo，位于com.jc2182.demo包下，如"),n("a",m,[s("Hello World示例"),t(a)]),s("一章中所述。")]),v,g,b,y]),q])}const _=e(u,[["render",h],["__file","xml.html.vue"]]);export{_ as default};
