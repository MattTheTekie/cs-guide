import{_ as p,r as o,o as l,c,d as a,e as n,b as t,a as e}from"./app-3d979d38.js";const u={},i=e(`<h1 id="android-安卓-样式和主题" tabindex="-1"><a class="header-anchor" href="#android-安卓-样式和主题" aria-hidden="true">#</a> Android （安卓）样式和主题</h1><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一个<strong>样式</strong>资源定义了用户界面的格式和外观。样式可以应用于单个View（从布局文件中）或整个Activity或应用程序（从清单文件中）。</p></div><p>与Android事件管理相关的以下三个概念-</p><h2 id="定义样式" tabindex="-1"><a class="header-anchor" href="#定义样式" aria-hidden="true">#</a> 定义样式</h2><p>在XML资源中定义了一种样式，该样式与指定布局的XML分开。此XML文件位于项目的res/values/目录下，并将<code>&lt;resources&gt;</code>作为根节点，这是样式文件所必需的。XML文件的名称是任意的，但必须使用.xml扩展名。您可以使用<code>&lt;style&gt;</code>标签为每个文件定义多种样式，但是每种样式都有其名称，该名称可以唯一地标识样式。Android样式属性使用<code>&lt;item&gt;</code>标记设置，如下所示-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CustomFontStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:layout_width<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>fill_parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:layout_height<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>wrap_content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:capitalize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>characters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:typeface<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>monospace<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:textSize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>12pt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:textColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#00FF00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>/&gt; 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>&lt;item&gt;</code>的值可以是关键字字符串，十六进制颜色，对另一种资源类型的引用或其他值，具体取决于style属性。</p></blockquote><h2 id="使用样式" tabindex="-1"><a class="header-anchor" href="#使用样式" aria-hidden="true">#</a> 使用样式</h2><p>定义样式后，可以使用style属性在XML布局文件中使用它，如下所示：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fill_parent<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fill_parent<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vertical<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/text_id<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/CustomFontStyle<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/hello_world<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r={href:"https://www.jc2182.com/andriod/andriod-style-example.html",target:"_blank",rel:"noopener noreferrer"},d=e(`<h2 id="样式继承" tabindex="-1"><a class="header-anchor" href="#样式继承" aria-hidden="true">#</a> 样式继承</h2><p>Android支持样式继承的方式与网页设计中级联样式表的方式非常相似。您可以使用它继承现有样式的属性，然后仅定义要更改或添加的属性。要实现自定义主题，请创建或编辑MyAndroidApp/res/values/themes.xml并添加以下内容-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     ...
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyCustomTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:style/Theme<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:textColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#ffff0000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
     ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在您的AndroidManifest.xml中，将主题应用于您要设置样式的活动-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span>
     <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.myapp.MyActivity<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">...</span>
     <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/MyCustomTheme<span class="token punctuation">&quot;</span></span>
     <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您的新主题将应用于您的活动，并且文本现在变为鲜红色。</p><p><img src="https://www.jc2182.com/images/android/styleandtheme1.png" alt=""></p><h2 id="将颜色应用于主题属性" tabindex="-1"><a class="header-anchor" href="#将颜色应用于主题属性" aria-hidden="true">#</a> 将颜色应用于主题属性</h2><p>然后，可以通过将<code>&lt;item&gt;</code>元素添加到自定义主题，将颜色资源应用于某些主题属性，例如窗口背景和主文本颜色。这些属性在styles.xml文件中定义。例如，要将自定义颜色应用于窗口背景，请在MyAndroidApp/res/values/styles.xml文件中定义的自定义主题中添加以下两个<code>&lt;item&gt;</code>元素：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     ...
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyCustomTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:windowBackground<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@color/my_custom_color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:colorBackgroundCacheHint<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@color/my_custom_color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
     ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用带有按钮的自定义9-patch" tabindex="-1"><a class="header-anchor" href="#使用带有按钮的自定义9-patch" aria-hidden="true">#</a> 使用带有按钮的自定义9-Patch</h2><p>九块可绘制对象是一种特殊的图像，可以在保持视觉完整性的同时在宽度和高度上缩放。9-Patch是指定Android按钮外观的最常用方法，尽管可以使用任何可绘制类型。</p><p>创建九个补丁按钮的步骤</p><ol><li>将此位图另存为/res/drawable/my_nine_patch.9.png</li><li>定义新样式</li><li>将新按钮样式应用于自定义主题的buttonStyle属性</li></ol><p>定义新样式</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyCustomButton<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:Widget.Button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:background<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@drawable/my_nine_patch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
     ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>套用主题</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
     ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyCustomTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>...</span><span class="token punctuation">&gt;</span></span>
           ...
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:buttonStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@style/MyCustomButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
     ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="android-主题" tabindex="-1"><a class="header-anchor" href="#android-主题" aria-hidden="true">#</a> Android 主题</h2><p>希望您了解样式的概念，所以现在让我们尝试了解什么是主题。主题不过是应用于整个活动或应用程序而不是单个视图的Android样式。因此，将样式用作主题时，活动或应用程序中的每个视图都将应用其支持的每个样式属性。例如，您可以将相同的CustomFontStyle样式用作Activity的主题，然后该Activity内的所有文本将具有绿色等宽字体。要为应用程序的所有活动设置主题，请打开AndroidManifest.xml文件，然后编辑<code>&lt;application&gt;</code>标记，以包含带有样式名称的android:theme属性。例如-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/CustomFontStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，如果要将主题仅应用到应用程序中的一个Activity，则将android：theme属性仅添加到<code>&lt;activity&gt;</code>标签。例如-</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/CustomFontStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Android定义了许多默认主题，您可以直接使用它们，也可以使用parent属性继承它们，如下所示：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CustomTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:Theme.Light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),k={href:"https://www.jc2182.com/andriod/andriod-theme-example.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<h2 id="样式调色板" tabindex="-1"><a class="header-anchor" href="#样式调色板" aria-hidden="true">#</a> 样式调色板</h2><p>布局设计可以基于它们的颜色实现，例如，以下设计基于它们的颜色（蓝色）</p><p><img src="https://www.jc2182.com/images/android/styleandtheme4.jpg" alt=""></p><p>上面的布局是基于style.xml文件设计的，其中放置在res/values/</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AppTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:Theme.Material<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:color/primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@color/primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:color/primaryDark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@color/primary_dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:colorAccent/primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@color/accent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认样式和主题" tabindex="-1"><a class="header-anchor" href="#默认样式和主题" aria-hidden="true">#</a> 默认样式和主题</h2><p>Android平台提供了可在您的应用程序中使用的大量样式和主题。您可以在R.style类中找到所有可用样式的引用。要使用此处列出的样式，请将样式名称中的所有下划线都替换为句点。例如，您可以将Theme_NoTitleBar主题与“@android：style/Theme.NoTitleBar”一起应用。您可以查看以下Android样式和主题的源代码-</p>`,7),g={href:"https://android.googlesource.com/platform/frameworks/base/+/refs/heads/master/core/res/res/values/styles.xml",target:"_blank",rel:"noopener noreferrer"},v={href:"https://android.googlesource.com/platform/frameworks/base/+/refs/heads/master/core/res/res/values/themes.xml",target:"_blank",rel:"noopener noreferrer"};function h(q,b){const s=o("ExternalLinkIcon");return l(),c("div",null,[i,a("p",null,[a("a",r,[n("查看安卓样式示例"),t(s)])]),d,a("p",null,[n("要了解与Android主题相关的概念，可以查看"),a("a",k,[n("主题演示示例"),t(s)]),n("。")]),m,a("ul",null,[a("li",null,[a("a",g,[n("Android样式（styles.xml）"),t(s)])]),a("li",null,[a("a",v,[n("Android主题（themes.xml）"),t(s)])])])])}const y=p(u,[["render",h],["__file","styles.html.vue"]]);export{y as default};