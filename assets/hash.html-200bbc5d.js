import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const l={},t=e(`<h1 id="哈希" tabindex="-1"><a class="header-anchor" href="#哈希" aria-hidden="true">#</a> 哈希</h1><p>PowerShell哈希表是一种数据结构，用于存储一个或多个键/值对。也称为字典或关联数组。 在PowerShell中，每个哈希表都有一个哈希表(<code>System.Collections.Hashtable</code>)对象。我们可以在PowerShell中使用<code>Hashtable</code>对象的属性和方法。 哈希表中的键和值也是.NET类型的对象。</p><p>在引入PowerShell版本3.0之后，我们可以使用<code>[ordered]</code>属性在PowerShell中创建一个有序字典(<code>System.Collections.Specialized.OrderedDictionary</code>)。</p><p>有序字典和哈希表之间的主要区别在于字典中的键始终按照我们列出的顺序显示。 但是哈希表中键的顺序不确定。</p><h2 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1.语法</h2><p>以下语句是创建哈希表的语法：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$variable_name</span> = @<span class="token punctuation">{</span> &lt;key1&gt; = &lt;value1&gt; <span class="token punctuation">;</span> &lt; key2&gt; = &lt;value2&gt; <span class="token punctuation">;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">;</span> &lt; keyN&gt; = &lt;valueN&gt;<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下语句是创建有序字典的语法：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$variable_name</span> = <span class="token namespace">[ordered]</span> @<span class="token punctuation">{</span> &lt; key1&gt; = &lt;value1&gt; <span class="token punctuation">;</span> &lt; key2&gt; = &lt;value2&gt; <span class="token punctuation">;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">;</span> &lt; keyN&gt; = &lt;valueN&gt;<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-创建哈希表" tabindex="-1"><a class="header-anchor" href="#_2-创建哈希表" aria-hidden="true">#</a> 2.创建哈希表</h2><p>以下是在PowerShell中创建哈希表的步骤：</p><ul><li>创建一个以<code>@</code>符号开头的哈希表。</li><li>将哈希表括在花括号中。</li><li>输入一个或多个键/值对作为哈希表的数据(内容)。</li><li>要分隔每个值的键，必须使用等号(<code>=</code>)。</li><li>要分隔键/值对，必须使用分号(<code>;</code>)或换行符。</li><li>包含空格的键将它们括在引号中。并且这些值必须是PowerShell的有效表达式。</li><li>要管理或使用哈希表，请将哈希表名分配给变量。</li><li>将有序的哈希表分配给变量时，可以将有序的属性放在<code>@</code>符号之前。</li></ul><p>如果要创建一个空的哈希表，请在PowerShell中键入以下命令：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$variablename</span> = @<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建哈希表时，我们还可以将其添加到哈希表中。以下示例描述了如何使用三个键及其值创建哈希表。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$student</span> = @<span class="token punctuation">{</span> name = <span class="token string">&quot;Maxsu&quot;</span> <span class="token punctuation">;</span> Course = <span class="token string">&quot;数学&quot;</span> <span class="token punctuation">;</span> Age= 25 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-显示哈希表" tabindex="-1"><a class="header-anchor" href="#_3-显示哈希表" aria-hidden="true">#</a> 3.显示哈希表</h2><p>要显示哈希表，请输入存储它的变量的名称。 默认情况下，它显示带有两列的表。 一列用于键，另一列用于键的值。 以下命令显示哈希表的结果：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$Student</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若要显示哈希表的所有键或所有值，请使用点(<code>.</code>)表示法。 下面的示例显示以上示例的所有键：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$Student</span><span class="token punctuation">.</span>keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的示例显示以上示例的所有值：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$Student</span><span class="token punctuation">.</span>values
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>哈希表具有<code>count</code>属性，该属性指示哈希表中键/值对的总数。 在上面的示例中，以下命令将显示键-值对的总数：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\Users\\hema&gt; <span class="token variable">$Student</span><span class="token punctuation">.</span>count
3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个完整的示例，演示了如何创建，初始化和处理哈希表-</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$hash</span> = @<span class="token punctuation">{</span> ID = 1<span class="token punctuation">;</span> Shape = <span class="token string">&quot;Square&quot;</span><span class="token punctuation">;</span> Color = <span class="token string">&quot;Blue&quot;</span><span class="token punctuation">}</span>

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;Print all hashtable keys&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>keys

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;Print all hashtable values&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>values

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;Get ID&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">[</span><span class="token string">&quot;ID&quot;</span><span class="token punctuation">]</span>

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;Get Shape&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>Number

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;print Size&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>Count

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;Add key-value&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">[</span><span class="token string">&quot;Updated&quot;</span><span class="token punctuation">]</span> = <span class="token string">&quot;Now&quot;</span>

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;Add key-value&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">&quot;Created&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Now&quot;</span><span class="token punctuation">)</span>

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;print Size&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>Count

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;Remove key-value&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>Remove<span class="token punctuation">(</span><span class="token string">&quot;Updated&quot;</span><span class="token punctuation">)</span>

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;print Size&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>Count

<span class="token function">write-host</span><span class="token punctuation">(</span><span class="token string">&quot;sort by key&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$hash</span><span class="token punctuation">.</span>GetEnumerator<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">|</span> <span class="token function">Sort-Object</span> <span class="token operator">-</span>Property key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例代码执行结果如下：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>Print all hashtable keys
Color
Shape
ID
Print all hashtable values
Blue
Square
1
Get ID
1
Get Shape
print Size
3
Add key-value
Add key-value
print Size
5
Remove key-value
print Size
4
<span class="token function">sort</span> by key

Name                           Value
<span class="token operator">--</span><span class="token operator">--</span>                           <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
Color                          Blue
Created                        Now
ID                             1
Shape                          Square
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),i=[t];function p(o,c){return s(),a("div",null,i)}const d=n(l,[["render",p],["__file","hash.html.vue"]]);export{d as default};
