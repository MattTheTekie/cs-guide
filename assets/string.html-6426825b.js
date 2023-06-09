import{_ as s,o as n,c as e,a}from"./app-3d979d38.js";const l={},i=a(`<h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1><p>​</p><p>PowerShell字符串是具有<code>System.String</code>类型的对象。它是一种表示字符序列的数据类型，可以是文字常量或某种变量。</p><p>可以在PowerShell中使用单引号或双引号来定义字符串。这两个字符串都是使用相同的<code>System.String</code>对象类型创建的。</p><h2 id="_1-示例" tabindex="-1"><a class="header-anchor" href="#_1-示例" aria-hidden="true">#</a> 1.示例</h2><p>**示例1：**此示例描述如何在字符串中使用单引号：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\&gt;<span class="token variable">$String1</span>=<span class="token string">&#39;It is a Single Quoted String&#39;</span>  
<span class="token function">PS</span> C:\\&gt;<span class="token variable">$String1</span>  
It is a Single Quoted String
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**示例2：**此示例描述如何在字符串中使用双引号：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\&gt; <span class="token variable">$String2</span>=<span class="token string">&quot;It is a double Quoted String&quot;</span>  
<span class="token function">PS</span> C:\\&gt; <span class="token variable">$String2</span>  
It is a double Quoted String
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-串联" tabindex="-1"><a class="header-anchor" href="#_2-串联" aria-hidden="true">#</a> 2.串联</h2><p>字符串的连接使用加号执行。</p><p><strong>示例1：</strong> 下面的示例描述如何连接两个字符串变量：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\&gt; <span class="token variable">$s1</span>=<span class="token string">&quot;XN&quot;</span>  
<span class="token function">PS</span> C:\\&gt; <span class="token variable">$s2</span>=<span class="token string">&quot;TUTOR&quot;</span>  
<span class="token function">PS</span> C:\\&gt; <span class="token variable">$s1</span><span class="token operator">+</span><span class="token variable">$s2</span>
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中最后一条命令的输出将显示为：<code>XNTUTOR</code></p><p>**示例2：**也可以使用join运算符来连接字符串。下面的示例描述如何使用此运算符：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\&gt; <span class="token variable">$s1</span><span class="token punctuation">,</span><span class="token variable">$s2</span> <span class="token operator">-join</span> <span class="token string">&quot;.COM&quot;</span>
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>本示例的输出将显示为：<code>XN.COMTUTOR</code></p><p>**示例3：**也可以使用方法<code>concat()</code>来连接字符串。下面的示例描述如何使用此方法：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$s1</span>=<span class="token string">&quot;Power&quot;</span>  
<span class="token function">PS</span> C:\\&gt; <span class="token variable">$s2</span>=<span class="token string">&quot;Shell&quot;</span>  
<span class="token function">PS</span> C:\\&gt; <span class="token namespace">[System.String]</span>::Concat<span class="token punctuation">(</span><span class="token variable">$s1</span><span class="token punctuation">,</span><span class="token variable">$s2</span><span class="token punctuation">)</span>
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此示例的输出也将显示为：<code>PowerShell</code></p><h2 id="_3-子串" tabindex="-1"><a class="header-anchor" href="#_3-子串" aria-hidden="true">#</a> 3.子串</h2><p><code>SubString</code>是一种方法，它接受两个重载参数并返回较长字符串的一部分。 这两个参数都是数值，并用逗号(<code>,</code>)分隔。第一参数是开始值，第二个表示想从开始位置向往右的字符数量。</p><p>**示例：**下面的示例跳过前三个字符，并从给定的字符串返回下一个七个字符。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\&gt; <span class="token variable">$s1</span>=<span class="token string">&quot;Windows PowerShell&quot;</span>  
<span class="token function">PS</span> C:\\&gt; <span class="token variable">$s1</span><span class="token punctuation">.</span>SubString<span class="token punctuation">(</span>3<span class="token punctuation">,</span>7<span class="token punctuation">)</span>
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中的第二个命令显示以下输出：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>dows Po
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-字符串格式" tabindex="-1"><a class="header-anchor" href="#_4-字符串格式" aria-hidden="true">#</a> 4.字符串格式</h2><p>字符串格式化是在字符串中插入一些字符或字符串的过程。 我们可以使用<code>-f</code>运算符来格式化字符串。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$s1</span>=<span class="token string">&quot;Windows PowerShell&quot;</span>  
<span class="token variable">$s2</span>=<span class="token string">&quot;XNTUTOR&quot;</span>  
<span class="token variable">$formattedString</span> = <span class="token string">&quot;{0} {1}....&quot;</span> <span class="token operator">-</span>f <span class="token variable">$s1</span><span class="token punctuation">,</span><span class="token variable">$s2</span>  
<span class="token variable">$formattedString</span>
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面示例代码，得到以下结果：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>Windows PowerShell XNTUTOR<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-字符替换" tabindex="-1"><a class="header-anchor" href="#_5-字符替换" aria-hidden="true">#</a> 5.字符替换</h2><p><code>replace()</code>方法接受两个参数，并用于替换字符串中的字符。 **示例：**在下面的示例中，我们将给定字符串中的字符<code>P</code>替换为<code>S</code>。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\&gt; <span class="token variable">$s1</span>=<span class="token string">&quot;Windows Powerxhell&quot;</span>  
<span class="token function">PS</span> C:\\&gt; <span class="token variable">$s1</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;S&quot;</span><span class="token punctuation">)</span>
Shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中的第二个命令显示以下输出：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>indows Sowerxhell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),t=[i];function o(p,d){return n(),e("div",null,t)}const r=s(l,[["render",o],["__file","string.html.vue"]]);export{r as default};
