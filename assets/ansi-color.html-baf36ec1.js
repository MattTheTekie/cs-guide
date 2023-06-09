import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const p={},c=t(`<h1 id="java打印彩色文字" tabindex="-1"><a class="header-anchor" href="#java打印彩色文字" aria-hidden="true">#</a> java打印彩色文字</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>yzq<span class="token punctuation">.</span>util</span><span class="token punctuation">;</span>


<span class="token keyword">enum</span> <span class="token class-name">ColorEnum</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 黑色
     */</span>
    <span class="token function">BLACK</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 红色
     */</span>
    <span class="token function">RED</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 绿色
     */</span>
    <span class="token function">GREEN</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 黄色
     */</span>
    <span class="token function">YELLOW</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 蓝色
     */</span>
    <span class="token function">BLUE</span><span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 粉红色
     */</span>
    <span class="token function">PINK</span><span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 青色
     */</span>
    <span class="token function">CYAN</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">WHITE</span><span class="token punctuation">(</span><span class="token number">37</span><span class="token punctuation">)</span><span class="token punctuation">,</span>


    <span class="token function">bgBLACK</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 红色
     */</span>
    <span class="token function">bgRED</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 绿色
     */</span>
    <span class="token function">bgGREEN</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 黄色
     */</span>
    <span class="token function">bgYELLOW</span><span class="token punctuation">(</span><span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 蓝色
     */</span>
    <span class="token function">bgBLUE</span><span class="token punctuation">(</span><span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 粉红色
     */</span>
    <span class="token function">bgPINK</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 青色
     */</span>
    <span class="token function">bgCYAN</span><span class="token punctuation">(</span><span class="token number">46</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">bgWHITE</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">lightRed</span><span class="token punctuation">(</span><span class="token number">91</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> code<span class="token punctuation">;</span>

    <span class="token class-name">ColorEnum</span><span class="token punctuation">(</span><span class="token keyword">int</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ColorUtil</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">RESET</span> <span class="token operator">=</span> <span class="token string">&quot;\\033[0m&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span> color<span class="token punctuation">,</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//\\033[4;36m  cyan underline</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[%s;%sm%s%s%n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> color<span class="token punctuation">.</span>code<span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token constant">RESET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span> color<span class="token punctuation">,</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[%s;%sm%s%s%n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span> color<span class="token punctuation">.</span>code<span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token constant">RESET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span> foregroundColor<span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span> bgColor<span class="token punctuation">,</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[%s;%s;%sm%s%s%n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span> foregroundColor<span class="token punctuation">.</span>code<span class="token punctuation">,</span> bgColor<span class="token punctuation">.</span>code<span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token constant">RESET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 红色
     *
     * <span class="token keyword">@param</span> <span class="token parameter">str</span>  str
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> 是否下划线
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">red</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">green</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">GREEN</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">GREEN</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">yellow</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">blue</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">BLUE</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">BLUE</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">cyan</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">CYAN</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">cyan</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">CYAN</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">pink</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">PINK</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">PINK</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">black</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printUnderline</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bgGreen</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span><span class="token punctuation">.</span>bgGREEN<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bgRed</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span><span class="token punctuation">.</span>bgRED<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bgYellow</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span><span class="token punctuation">.</span>bgYELLOW<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bgBlue</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span>bgBLUE<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bgPink</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span><span class="token punctuation">.</span>bgPINK<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bgCyan</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">CYAN</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bgWhite</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span><span class="token punctuation">.</span>bgWHITE<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">lightWhite</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printBg</span><span class="token punctuation">(</span><span class="token class-name">ColorEnum</span><span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span> <span class="token class-name">ColorEnum</span><span class="token punctuation">.</span>lightRed<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[c];function e(l,i){return s(),a("div",null,o)}const k=n(p,[["render",e],["__file","ansi-color.html.vue"]]);export{k as default};
