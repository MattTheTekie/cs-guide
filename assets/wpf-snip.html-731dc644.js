import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const p={},e=t(`<h1 id="wpf代码片段" tabindex="-1"><a class="header-anchor" href="#wpf代码片段" aria-hidden="true">#</a> wpf代码片段</h1><h2 id="打开文件对话框" tabindex="-1"><a class="header-anchor" href="#打开文件对话框" aria-hidden="true">#</a> 打开文件对话框</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>openFileDialog1<span class="token punctuation">.</span><span class="token function">ShowDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> DialogResult<span class="token punctuation">.</span>OK<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                label1<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">&quot;图片路径：&quot;</span><span class="token operator">+</span>openFileDialog1<span class="token punctuation">.</span>FileName<span class="token punctuation">;</span>
                imgpath <span class="token operator">=</span> openFileDialog1<span class="token punctuation">.</span>FileName<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片转换" tabindex="-1"><a class="header-anchor" href="#图片转换" aria-hidden="true">#</a> 图片转换</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//imgpath是输入图片的路径</span>
<span class="token class-name">Bitmap</span> bt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Bitmap</span><span class="token punctuation">(</span>imgpath<span class="token punctuation">)</span><span class="token punctuation">;</span>
bt<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token string">&quot;c:\\\\1.bmp&quot;</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span>Drawing<span class="token punctuation">.</span>Imaging<span class="token punctuation">.</span>ImageFormat<span class="token punctuation">.</span>Bmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
 MessageBox<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token string">&quot;格式转换成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取拖入文件的位置" tabindex="-1"><a class="header-anchor" href="#获取拖入文件的位置" aria-hidden="true">#</a> 获取拖入文件的位置</h2><p>要设置<code>allowDrop</code>为true</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>   <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Form1_DragEnter</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">DragEventArgs</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span>Effect <span class="token operator">=</span> DragDropEffects<span class="token punctuation">.</span>Copy<span class="token punctuation">;</span>       <span class="token comment">//设置拖放操作中目标放置类型为复制</span>
            <span class="token class-name">String<span class="token punctuation">[</span><span class="token punctuation">]</span></span> str_Drop <span class="token operator">=</span> <span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>e<span class="token punctuation">.</span>Data<span class="token punctuation">.</span><span class="token function">GetData</span><span class="token punctuation">(</span>DataFormats<span class="token punctuation">.</span>FileDrop<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//检索数据格式相关联的数据</span>
            MessageBox<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span>str_Drop<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用简单的json配置文件" tabindex="-1"><a class="header-anchor" href="#使用简单的json配置文件" aria-hidden="true">#</a> 使用简单的json配置文件</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Newtonsoft<span class="token punctuation">.</span>Json</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>IO</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Linq</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * 需要添加引用Newtonsoft.Json.dl
 */</span>

<span class="token keyword">namespace</span> <span class="token namespace">KeqingNiuza<span class="token punctuation">.</span>RealtimeNotes<span class="token punctuation">.</span>Models</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonConfigHelper</span> <span class="token punctuation">{</span>

        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> configDic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">string</span></span> Conf <span class="token operator">=</span> <span class="token string">&quot;NoteConfig.json&quot;</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 读取配置信息</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>returns</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>returns</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ReadConfig</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>Conf<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment">//如果不存在就创建file文件夹</span>
            <span class="token punctuation">{</span>
                <span class="token class-name">FileStream</span> f <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>Conf<span class="token punctuation">)</span><span class="token punctuation">;</span>
                f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name"><span class="token keyword">string</span></span> s <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span>Conf<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                configDic <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DeserializeObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
                configDic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>configDic <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> configDic<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> configDic<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 添加配置信息</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">WriteConfig</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>configDic <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                configDic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            configDic<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">string</span></span> s <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token function">SerializeObject</span><span class="token punctuation">(</span>configDic<span class="token punctuation">)</span><span class="token punctuation">;</span>
            File<span class="token punctuation">.</span><span class="token function">WriteAllText</span><span class="token punctuation">(</span>Conf<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 删除配置信息</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DeleteConfig</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>configDic <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> configDic<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                configDic<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">string</span></span> s <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token function">SerializeObject</span><span class="token punctuation">(</span>configDic<span class="token punctuation">)</span><span class="token punctuation">;</span>
                File<span class="token punctuation">.</span><span class="token function">WriteAllText</span><span class="token punctuation">(</span>Conf<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","wpf-snip.html.vue"]]);export{k as default};