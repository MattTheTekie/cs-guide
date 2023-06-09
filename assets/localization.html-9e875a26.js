import{_ as e,r as o,o as i,c as l,d as n,e as a,b as u,a as s}from"./app-3d979d38.js";const p={},d=s(`<h1 id="本地化" tabindex="-1"><a class="header-anchor" href="#本地化" aria-hidden="true">#</a> 本地化</h1><p>android应用程序可以在许多不同地区的许多设备上运行。为了使您的应用程序更具交互性，您的应用程序应该以适合于将使用您的应用程序的语言环境的方式来处理文本，数字，文件等。将字符串更改为不同语言的方式称为本地化在本章中，我们将说明，如何根据不同的区域来本地化应用程序等。我们将本地化应用程序中使用的字符串，并以相同的方式本地化其他内容。</p><h2 id="本地化字符串" tabindex="-1"><a class="header-anchor" href="#本地化字符串" aria-hidden="true">#</a> 本地化字符串</h2><p>为了对应用程序中使用的字符串进行本地化，请在re下创建一个新文件夹，名称为values-local，其中local将替换为该区域。例如，在意大利，values-it文件夹将在res下创建。</p><p>创建完该文件夹后，将strings.xml从默认文件夹到您创建的文件夹中。并更改其内容。例如，我更改了hello_world字符串的值。</p><p><em>意大利，res/values-it/strings.xml</em></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ciao mondo!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>西班牙，res/values-es/strings.xml</em></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hola Mundo!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>法语，res/values-fr/strings.xml</em></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bonjour le monde !<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了这些语言，下表还提供了其他语言的区域代码-</p><table><thead><tr><th>语言</th><th>说明</th></tr></thead><tbody><tr><td><strong>非洲语</strong></td><td>代码：af 文件夹名称：values-af</td></tr><tr><td><strong>阿拉伯语</strong></td><td>代码：ar。文件夹名称：values-ar</td></tr><tr><td><strong>孟加拉语</strong></td><td>代号：bn。文件夹名称：values-bn</td></tr><tr><td><strong>捷克语</strong></td><td>代码：cs 文件夹名称：values-cs</td></tr><tr><td><strong>中文</strong></td><td>代码：zh。文件夹名称：values-zh</td></tr><tr><td><strong>德语</strong></td><td>代号：de。文件夹名称：values-de</td></tr><tr><td><strong>法文</strong></td><td>代码：fr。文件夹名称：values-fr</td></tr><tr><td><strong>日本</strong></td><td>代码：ja。文件夹名称：values-ja</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>要试验此示例，可以在实际设备或仿真器中运行它。</p>`,15),c={href:"https://www.jc2182.com/andriod/android-hello-world.html",target:"_blank",rel:"noopener noreferrer"},r=n("li",null,"修改res/layout/activity_main以添加相应的XML组件",-1),v=n("li",null,"修改res/values/string.xml以添加必要的字符串组件",-1),m=n("li",null,"运行该应用程序以启动Android模拟器并验证在该应用程序中所做更改的结果。",-1),g=s(`<p>以下是修改后的主要活动文件src/com.jc2182.demo/MainActivity.java的内容。该文件可以包括每个基本生命周期方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jc2182<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>
  
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Activity</span></span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class MainActivity extends Activity {</p><pre><code>  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
  }
</code></pre><p>}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

以下是res/layout/activity_main.xml文件的内容-

\`\`\`xml

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot; android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;TextView
        android:text=&quot;本地化示例&quot;
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/textview&quot;
        android:textSize=&quot;35dp&quot;
        android:layout_alignParentTop=&quot;true&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/textView&quot;
        android:layout_width=&quot;198dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/textview&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:text=&quot;蝴蝶教程&quot;
        android:textColor=&quot;#ff7aff24&quot;
        android:textSize=&quot;35dp&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/button&quot;
        android:layout_width=&quot;94dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_below=&quot;@+id/imageView&quot;
        android:layout_centerHorizontal=&quot;true&quot;
        android:text=&quot;下载&quot; /&gt;

    &lt;ImageView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:id=&quot;@+id/imageView&quot;
        android:src=&quot;@drawable/logo&quot;
        android:background=&quot;#11EE22bb&quot;
        android:layout_below=&quot;@+id/textView&quot;
        android:layout_centerHorizontal=&quot;true&quot; /&gt;

    &lt;ProgressBar
        android:id=&quot;@+id/progressBar&quot;
        style=&quot;?android:attr/progressBarStyleLarge&quot;
        android:layout_width=&quot;272dp&quot;
        android:layout_height=&quot;362dp&quot;
        android:layout_below=&quot;@+id/button&quot;
        android:layout_alignStart=&quot;@+id/textview&quot;
        android:layout_alignLeft=&quot;@+id/textview&quot;
        android:layout_alignEnd=&quot;@+id/textView&quot;
        android:layout_alignRight=&quot;@+id/textView&quot;
        android:layout_alignParentBottom=&quot;true&quot;
        android:layout_marginEnd=&quot;-30dp&quot;
        android:layout_marginRight=&quot;-30dp&quot;
        android:layout_marginBottom=&quot;7dp&quot;
        android:progressDrawable=&quot;@drawable/circular_progress_bar&quot; /&gt;

&lt;/RelativeLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是res/values/strings.xml文件的内容-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello_world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hindi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>तितली ट्यूटोरियल<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>marathi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>बटरफ्लाय ट्यूटोरियल<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arabic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>البرنامج التعليمي الفراشة<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>english<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Butterfly tutorial<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们尝试运行刚刚修改的应用程序。我假设您在进行环境设置时已创建了AVD。要从Android Studio运行该应用，请打开您项目的活动文件之一，然后工具栏中单击“运行”图标。Android studio将应用程序安装在您的AVD上并启动它，如果设置和应用程序一切正常，它将显示在“模拟器”窗口下面-</p><p><img src="https://www.jc2182.com/images/android/localtion1.png" alt=""></p>`,10);function k(q,b){const t=o("ExternalLinkIcon");return i(),l("div",null,[d,n("ol",null,[n("li",null,[a("您将使用Android Studio创建一个Android应用程序，并将其命名为Demo，位于com.jc2182.demo包下，如"),n("a",c,[a("Hello World示例"),u(t)]),a("一章中所述。")]),r,v,m]),g])}const _=e(p,[["render",k],["__file","localization.html.vue"]]);export{_ as default};
