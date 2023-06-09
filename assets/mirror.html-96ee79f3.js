import{_ as e,r as p,o as i,c as o,d as n,e as s,b as t,a as l}from"./app-3d979d38.js";const c={},u=n("h1",{id:"一些技巧",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一些技巧","aria-hidden":"true"},"#"),s(" 一些技巧")],-1),r=n("h3",{id:"安卓rom",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安卓rom","aria-hidden":"true"},"#"),s(" 安卓rom")],-1),d={href:"https://evolution-x.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://download.pixelexperience.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://arrowos.net/download",target:"_blank",rel:"noopener noreferrer"},m={href:"https://lineageos.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://havoc-os.com/download",target:"_blank",rel:"noopener noreferrer"},g={href:"https://crdroid.net/begonia/9",target:"_blank",rel:"noopener noreferrer"},h={href:"https://forum.xda-developers.com/",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#镜像","aria-hidden":"true"},"#"),s(" 镜像")],-1),y={href:"https://stackoverflow.com/questions/2785485/is-there-a-unique-android-device-id",target:"_blank",rel:"noopener noreferrer"},q={href:"https://libraries.io/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.finclip.com/downloads/?activeTab=assistant",target:"_blank",rel:"noopener noreferrer"},w={href:"https://developer.android.com/build/migrate-to-kotlin-dsl",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.an.rustfisher.com/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://juejin.cn/post/7219234932735934524#comment",target:"_blank",rel:"noopener noreferrer"},R={href:"https://juejin.cn/post/6895299152226615309",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.jetpackcompose.app/compose-catalog",target:"_blank",rel:"noopener noreferrer"},L=n("h2",{id:"配置国内镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置国内镜像","aria-hidden":"true"},"#"),s(" 配置国内镜像")],-1),O={href:"https://doc.nju.edu.cn/books/35f4a/page/gradle",target:"_blank",rel:"noopener noreferrer"},I=l(`<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>
settingsEvaluated <span class="token punctuation">{</span> settings <span class="token operator">-&gt;</span>
    settings<span class="token punctuation">.</span>dependencyResolutionManagement <span class="token punctuation">{</span>
        repositories <span class="token punctuation">{</span>
            maven <span class="token punctuation">{</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/public&quot;</span></span>
        <span class="token punctuation">}</span>
        google <span class="token punctuation">{</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/google&quot;</span></span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/public&quot;</span></span>
        <span class="token punctuation">}</span>
        google <span class="token punctuation">{</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/google&quot;</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    buildscript <span class="token punctuation">{</span>
        repositories <span class="token punctuation">{</span>
            maven <span class="token punctuation">{</span>
                url <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/public&quot;</span></span>
            <span class="token punctuation">}</span>
            google <span class="token punctuation">{</span>
                url <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/google&quot;</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>
<span class="token keyword">def</span> repoConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    all <span class="token punctuation">{</span> ArtifactRepository repo <span class="token operator">-&gt;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>repo <span class="token keyword">instanceof</span> <span class="token class-name">MavenArtifactRepository</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">def</span> url <span class="token operator">=</span> repo<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;maven.org&#39;</span><span class="token punctuation">)</span><span class="token operator">||</span>url<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;maven.apache.org&quot;</span></span><span class="token punctuation">)</span> <span class="token operator">||</span> url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;https://jcenter.bintray.com/&#39;</span><span class="token punctuation">)</span><span class="token operator">||</span>url<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;dl.google.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                println <span class="token interpolation-string"><span class="token string">&quot;gradle init: (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) removed&quot;</span></span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)已被移除&quot;</span></span><span class="token punctuation">)</span>
                remove repo
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// maven { url &#39;http://mirrors.cloud.tencent.com/nexus/repository/maven-public/&#39; }</span>
    maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/central&#39;</span> <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/jcenter&#39;</span> <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/google&#39;</span> <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/gradle-plugin&#39;</span> <span class="token punctuation">}</span>
    maven<span class="token punctuation">{</span>
        url <span class="token interpolation-string"><span class="token string">&quot;https://jitpack.io&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

allprojects <span class="token punctuation">{</span>
    buildscript <span class="token punctuation">{</span>
        repositories repoConfig
    <span class="token punctuation">}</span>
    repositories repoConfig
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>gradle<span class="token punctuation">.</span>projectsLoaded <span class="token punctuation">{</span>
    rootProject<span class="token punctuation">.</span>allprojects <span class="token punctuation">{</span>
        buildscript <span class="token punctuation">{</span>
            repositories <span class="token punctuation">{</span>
                <span class="token keyword">def</span> JCENTER_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span>
                <span class="token keyword">def</span> GOOGLE_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/google&#39;</span>
                <span class="token keyword">def</span> NEXUS_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/central&#39;</span>
                all <span class="token punctuation">{</span> ArtifactRepository repo <span class="token operator">-&gt;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>repo <span class="token keyword">instanceof</span> <span class="token class-name">MavenArtifactRepository</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">def</span> url <span class="token operator">=</span> repo<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;https://jcenter.bintray.com/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">JCENTER_URL</span></span><span class="token string">.&quot;</span></span>
                            <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;buildscript </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">JCENTER_URL</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
                            remove repo
                        <span class="token punctuation">}</span>
                        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;https://dl.google.com/dl/android/maven2/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">GOOGLE_URL</span></span><span class="token string">.&quot;</span></span>
                            <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;buildscript </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">GOOGLE_URL</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
                            remove repo
                        <span class="token punctuation">}</span>
                        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;https://repo1.maven.org/maven2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">REPOSITORY_URL</span></span><span class="token string">.&quot;</span></span>
                            <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;buildscript </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">REPOSITORY_URL</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
                            remove repo
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                jcenter <span class="token punctuation">{</span>
                    url JCENTER_URL
                <span class="token punctuation">}</span>
                google <span class="token punctuation">{</span>
                    url GOOGLE_URL
                <span class="token punctuation">}</span>
                maven <span class="token punctuation">{</span>
                    url NEXUS_URL
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        repositories <span class="token punctuation">{</span>
            <span class="token keyword">def</span> JCENTER_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span>
            <span class="token keyword">def</span> GOOGLE_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/google&#39;</span>
            <span class="token keyword">def</span> NEXUS_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/central&#39;</span>
            all <span class="token punctuation">{</span> ArtifactRepository repo <span class="token operator">-&gt;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>repo <span class="token keyword">instanceof</span> <span class="token class-name">MavenArtifactRepository</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">def</span> url <span class="token operator">=</span> repo<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;https://jcenter.bintray.com/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">JCENTER_URL</span></span><span class="token string">.&quot;</span></span>
                        <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;buildscript </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">JCENTER_URL</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
                        remove repo
                    <span class="token punctuation">}</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;https://dl.google.com/dl/android/maven2/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">GOOGLE_URL</span></span><span class="token string">.&quot;</span></span>
                        <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;buildscript </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">GOOGLE_URL</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
                        remove repo
                    <span class="token punctuation">}</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;https://repo1.maven.org/maven2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">REPOSITORY_URL</span></span><span class="token string">.&quot;</span></span>
                        <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;buildscript </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">REPOSITORY_URL</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
                        remove repo
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            jcenter <span class="token punctuation">{</span>
                url JCENTER_URL
            <span class="token punctuation">}</span>
            google <span class="token punctuation">{</span>
                url GOOGLE_URL
            <span class="token punctuation">}</span>
            maven <span class="token punctuation">{</span>
                url NEXUS_URL
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h2><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>implementation <span class="token function">fileTree</span><span class="token punctuation">(</span>dir<span class="token punctuation">:</span> <span class="token string">&#39;libs&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.jar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">files</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;/commonjar/3rdparty/gson-2.8.5.jar&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">files</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;/commonjar/3rdparty/gson-2.8.5.jar&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">fileTree</span><span class="token punctuation">(</span><span class="token function">mapOf</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;dir&quot;</span></span> to <span class="token interpolation-string"><span class="token string">&quot;libs&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;include&quot;</span></span> to <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;*.jar&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;*.aar&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">fileTree</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;src/main/libs&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">include</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;*.jar&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;*.aar&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./gradlew build --refresh-dependencies
./gradlew app:dependencies --configuration implementation 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量删除apk" tabindex="-1"><a class="header-anchor" href="#批量删除apk" aria-hidden="true">#</a> 批量删除apk</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>要在git bash下用
adb shell &quot;pm list packages ab.yzq | cut -c9- | xargs -n 1 sh /system/bin/pm uninstall&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="kotlin-compose" tabindex="-1"><a class="header-anchor" href="#kotlin-compose" aria-hidden="true">#</a> kotlin compose</h1><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>
<span class="token keyword">import</span> android<span class="token punctuation">.</span>content<span class="token punctuation">.</span>Intent
<span class="token keyword">import</span> android<span class="token punctuation">.</span>os<span class="token punctuation">.</span>Bundle
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>activity<span class="token punctuation">.</span>ComponentActivity
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>activity<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>setContent
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>foundation<span class="token punctuation">.</span>clickable
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>foundation<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>Box
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>foundation<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>fillMaxWidth
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>foundation<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>padding
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>foundation<span class="token punctuation">.</span>lazy<span class="token punctuation">.</span>LazyColumn
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>foundation<span class="token punctuation">.</span>lazy<span class="token punctuation">.</span>items
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>material<span class="token punctuation">.</span>MaterialTheme
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>material<span class="token punctuation">.</span>Scaffold
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>material<span class="token punctuation">.</span>Text
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>material<span class="token punctuation">.</span>TopAppBar
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>Modifier
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>draw<span class="token punctuation">.</span>drawBehind
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>geometry<span class="token punctuation">.</span>Offset
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>Color
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>unit<span class="token punctuation">.</span>dp
<span class="token keyword">import</span> androidx<span class="token punctuation">.</span>compose<span class="token punctuation">.</span>foundation<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>Column
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>yzq<span class="token punctuation">.</span>simpleKt<span class="token punctuation">.</span>simple<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>cat<span class="token punctuation">.</span>CatActivity


<span class="token keyword">class</span> HomeListActivity <span class="token operator">:</span> <span class="token function">ComponentActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>
        setContent <span class="token punctuation">{</span>
            MaterialTheme <span class="token punctuation">{</span>
                <span class="token keyword">val</span> btns <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
                    <span class="token function">MyIntent</span><span class="token punctuation">(</span>
                        <span class="token string-literal singleline"><span class="token string">&quot;main&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal singleline"><span class="token string">&quot;main desc&quot;</span></span><span class="token punctuation">,</span> <span class="token function">Intent</span><span class="token punctuation">(</span>
                            <span class="token keyword">this</span><span class="token punctuation">,</span>
                            MainActivity<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token function">MyIntent</span><span class="token punctuation">(</span>
                        <span class="token string-literal singleline"><span class="token string">&quot;cat activity&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal singleline"><span class="token string">&quot;cat desc&quot;</span></span><span class="token punctuation">,</span> <span class="token function">Intent</span><span class="token punctuation">(</span>
                            <span class="token keyword">this</span><span class="token punctuation">,</span>
                            CatActivity<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>

                    <span class="token punctuation">)</span>
                <span class="token function">Scaffold</span><span class="token punctuation">(</span>topBar <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token function">TopAppBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">Text</span><span class="token punctuation">(</span>
                            <span class="token string-literal singleline"><span class="token string">&quot;首页&quot;</span></span><span class="token punctuation">,</span>
                            color <span class="token operator">=</span> Color<span class="token punctuation">.</span>White<span class="token punctuation">,</span>
                            modifier <span class="token operator">=</span> Modifier<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span>horizontal <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">.</span>dp<span class="token punctuation">)</span>
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">Box</span><span class="token punctuation">(</span>modifier <span class="token operator">=</span> Modifier<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">LazyColumn</span><span class="token punctuation">(</span>content <span class="token operator">=</span> <span class="token punctuation">{</span>

                            <span class="token function">items</span><span class="token punctuation">(</span>btns<span class="token punctuation">)</span> <span class="token punctuation">{</span> col <span class="token operator">-&gt;</span>
                                <span class="token function">Column</span><span class="token punctuation">(</span> modifier <span class="token operator">=</span> Modifier
                                    <span class="token punctuation">.</span><span class="token function">drawBehind</span> <span class="token punctuation">{</span>

                                        <span class="token keyword">val</span> strokeWidth <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">*</span> density
                                        <span class="token keyword">val</span> y <span class="token operator">=</span> size<span class="token punctuation">.</span>height <span class="token operator">-</span> strokeWidth <span class="token operator">/</span> <span class="token number">2</span>

                                        <span class="token function">drawLine</span><span class="token punctuation">(</span>
                                            Color<span class="token punctuation">.</span>LightGray<span class="token punctuation">,</span>
                                            <span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">0f</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                            <span class="token function">Offset</span><span class="token punctuation">(</span>size<span class="token punctuation">.</span>width<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                            strokeWidth
                                        <span class="token punctuation">)</span>
                                    <span class="token punctuation">}</span>
                                    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">.</span>dp<span class="token punctuation">)</span>
                                    <span class="token punctuation">.</span><span class="token function">fillMaxWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                    <span class="token punctuation">.</span><span class="token function">clickable</span> <span class="token punctuation">{</span>
                                        <span class="token function">startActivity</span><span class="token punctuation">(</span>
                                            col<span class="token punctuation">.</span>intent
                                        <span class="token punctuation">)</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                    <span class="token function">Text</span><span class="token punctuation">(</span>text <span class="token operator">=</span> col<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
                                    <span class="token function">Text</span><span class="token punctuation">(</span>text <span class="token operator">=</span> col<span class="token punctuation">.</span>description <span class="token punctuation">,</span>color<span class="token operator">=</span>Color<span class="token punctuation">.</span>LightGray<span class="token punctuation">)</span>
                                <span class="token punctuation">}</span>

                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>


            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token function">MyIntent</span><span class="token punctuation">(</span><span class="token keyword">val</span> title<span class="token operator">:</span> String<span class="token punctuation">,</span><span class="token keyword">val</span> description<span class="token operator">:</span>String<span class="token punctuation">,</span> <span class="token keyword">val</span> intent<span class="token operator">:</span> Intent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package ab.yzq.img.screen

import ab.yzq.img.ScaffoldView
import android.Manifest
import android.content.pm.PackageManager
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.ContextCompat
import androidx.navigation.NavHostController
import com.elvishew.xlog.XLog
import com.hjq.toast.Toaster

@Composable
fun HomeScreen(navHostController: NavHostController) {
    val ctx= LocalContext.current
    val requestPermissionLauncher =
        rememberLauncherForActivityResult(
            ActivityResultContracts.RequestPermission()
        ) { isGranted: Boolean -&gt;
            if (isGranted) {
                // Permission is granted. Continue the action or workflow in your
                // app.
                Toaster.show(&quot;获取权限\${Manifest.permission.READ_EXTERNAL_STORAGE}成功&quot;)
            } else {
                Toaster.show(&quot;获取权限\${Manifest.permission.READ_EXTERNAL_STORAGE}失败&quot;)
                // Explain to the user that the feature is unavailable because the
                // feature requires a permission that the user has denied. At the
                // same time, respect the user&#39;s decision. Don&#39;t link to system
                // settings in an effort to convince the user to change their
                // decision.
            }
        }

    ScaffoldView(title = &quot;首页&quot;, navController = navHostController) {
        LazyColumn(content = {
            item {
                Button(onClick = {

                    when (PackageManager.PERMISSION_GRANTED) {
                        ContextCompat.checkSelfPermission(
                            ctx,
                            Manifest.permission.READ_EXTERNAL_STORAGE
                        ) -&gt; {

                            // Some works that require permission
                            XLog.enableBorder().d(&quot;权限已经获取了&quot;)
                        }
                        else -&gt; {
                            // Asking for permission
                           requestPermissionLauncher.launch(Manifest.permission.READ_EXTERNAL_STORAGE)
                        }
                    }
                }) {
                    Text(text = &quot;hhh&quot;)
                }
            }
        })
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安卓用法" tabindex="-1"><a class="header-anchor" href="#安卓用法" aria-hidden="true">#</a> 安卓用法</h1><p>在其他Fragment中取得PreferenceFragmentCompat组件的设定值(设置界面的配置信息)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SharedPreferences preferences= PreferenceManager.getDefaultSharedPreferences(getContext());
        boolean flag=preferences.getBoolean(&quot;english&quot;,true);
        String random=preferences.getString(&quot;randomNum&quot;,&quot;0000&quot;);
        Set&lt;String&gt; s=preferences.getStringSet(&quot;multi_select_list_preference&quot;,null);
        Log.i(&quot;lee&quot;, &quot;onCreateView: &quot;+flag+random+s);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gradle用法" tabindex="-1"><a class="header-anchor" href="#gradle用法" aria-hidden="true">#</a> gradle用法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>org.gradle.daemon=true
org.gradle.parallel=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭lint和test</p><p>kotlin</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
tasks.configureEach { task -&gt;
    if (task.name.equals(&quot;lint&quot;)) {
        //this is for speed up build
        task.enabled = false
    }
    if (task.name.contains(&quot;Test&quot;)) {
        //this is what you need
        task.enabled = false
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>groovy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
gradle.taskGraph.whenReady {
    tasks.each { task -&gt;
        if (task.name.contains(&quot;test&quot;))
        {
            task.enabled = false
        }
    }
}

或者
tasks.configureEach { task -&gt;
    if (task.name.equals(&quot;lint&quot;)) {
        //this is for speed up build
        task.enabled = false
    }
    if (task.name.contains(&quot;Test&quot;)) {
        //this is what you need
        task.enabled = false
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activity显示返回按钮" tabindex="-1"><a class="header-anchor" href="#activity显示返回按钮" aria-hidden="true">#</a> activity显示返回按钮</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>oncreated中
  ActionBar actionBar = this.getSupportActionBar();
        actionBar.setTitle(&quot;搜索功能&quot;);
        actionBar.setDisplayHomeAsUpEnabled(true);
        
        
        然后
       @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if(item.getItemId() == android.R.id.home)
        {
            finish();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }     
    
    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示返回键" tabindex="-1"><a class="header-anchor" href="#显示返回键" aria-hidden="true">#</a> 显示返回键</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
 //不要使用navController.getGraph() 不然会出现返回键
        appBarConfiguration = AppBarConfiguration.Builder(
           navController.graph
        )
            .build()
        setupActionBarWithNavController(this, navController, appBarConfiguration)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kotlin用法" tabindex="-1"><a class="header-anchor" href="#kotlin用法" aria-hidden="true">#</a> kotlin用法</h2><h3 id="接口实现" tabindex="-1"><a class="header-anchor" href="#接口实现" aria-hidden="true">#</a> 接口实现</h3><p>java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">View<span class="token punctuation">.</span>OnClickListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token class-name">View</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kotlin</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>button.setOnClickListener(object : View.OnClickListener{
    override fun onClick(v: View?) {
       
    }
})
     button.setOnClickListener {
     
     }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fragment生命周期" tabindex="-1"><a class="header-anchor" href="#fragment生命周期" aria-hidden="true">#</a> fragment生命周期</h2><p>onActivityCreated被弃用 应该使用onViewCreated</p><h2 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h2><p>Cannot access &#39;androidx.core.app.OnMultiWindowModeChangedProvider&#39; which is a supertype of &#39;cn.neoclub.uki.party.CreatePartyActivity&#39;. Check your module classpath for missing or conflicting dependencies.</p><p>加入activity-ktx即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  // https://mvnrepository.com/artifact/androidx.activity/activity-ktx
   implementation(&quot;androidx.activity:activity-ktx:1.7.0&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compose实现下边框" tabindex="-1"><a class="header-anchor" href="#compose实现下边框" aria-hidden="true">#</a> compose实现下边框</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
 .drawBehind {

                        val strokeWidth = 1 * density
                        val y = size.height - strokeWidth / 2

                        drawLine(
                            Color.LightGray,
                            Offset(0f, y),
                            Offset(size.width, y),
                            strokeWidth
                        )
                    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态添加组件" tabindex="-1"><a class="header-anchor" href="#动态添加组件" aria-hidden="true">#</a> 动态添加组件</h2><h3 id="flowlayout" tabindex="-1"><a class="header-anchor" href="#flowlayout" aria-hidden="true">#</a> flowlayout</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>androidx.constraintlayout.widget.ConstraintLayout</span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/constraintLayout<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res-auto<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>androidx.constraintlayout.helper.widget.Flow</span>
      <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@+id/flow<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0dp<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">app:</span>flow_wrapMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chain<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">app:</span>layout_constraintBottom_toBottomOf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">app:</span>layout_constraintEnd_toEndOf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">app:</span>layout_constraintStart_toStartOf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>androidx.constraintlayout.widget.ConstraintLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kotlin</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>   <span class="token function">onCreated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">val</span> btns <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
            <span class="token function">NavIntent</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;打电话&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">val</span> intent <span class="token operator">=</span> <span class="token function">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
                    action <span class="token operator">=</span> Intent<span class="token punctuation">.</span>ACTION_DIAL
                    <span class="token keyword">data</span> <span class="token operator">=</span> Uri<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;tel:18856967709&quot;</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">NavIntent</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;share&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;des&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">val</span> sendIntent<span class="token operator">:</span> Intent <span class="token operator">=</span> <span class="token function">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
                action <span class="token operator">=</span> Intent<span class="token punctuation">.</span>ACTION_SEND
                <span class="token function">putExtra</span><span class="token punctuation">(</span>Intent<span class="token punctuation">.</span>EXTRA_TEXT<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;This is my text to send.&quot;</span></span><span class="token punctuation">)</span>
                type <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;text/plain&quot;</span></span>
            <span class="token punctuation">}</span>

            <span class="token keyword">val</span> shareIntent <span class="token operator">=</span> Intent<span class="token punctuation">.</span><span class="token function">createChooser</span><span class="token punctuation">(</span>sendIntent<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token function">startActivity</span><span class="token punctuation">(</span>shareIntent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">NavIntent</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;分享富文本&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">val</span> contentUri <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;hhttt&quot;</span></span>
            <span class="token keyword">val</span> share <span class="token operator">=</span> Intent<span class="token punctuation">.</span><span class="token function">createChooser</span><span class="token punctuation">(</span><span class="token function">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
                action <span class="token operator">=</span> Intent<span class="token punctuation">.</span>ACTION_SEND
                <span class="token function">putExtra</span><span class="token punctuation">(</span>Intent<span class="token punctuation">.</span>EXTRA_TEXT<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;https://developer.android.com/training/sharing/&quot;</span></span><span class="token punctuation">)</span>

                <span class="token comment">// (Optional) Here you&#39;re setting the title of the content</span>
                <span class="token function">putExtra</span><span class="token punctuation">(</span>Intent<span class="token punctuation">.</span>EXTRA_TITLE<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;Introducing content previews&quot;</span></span><span class="token punctuation">)</span>

                <span class="token comment">// (Optional) Here you&#39;re passing a content URI to an image to be displayed</span>
                <span class="token keyword">data</span> <span class="token operator">=</span> Uri<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>contentUri<span class="token punctuation">)</span>
                flags <span class="token operator">=</span> Intent<span class="token punctuation">.</span>FLAG_GRANT_READ_URI_PERMISSION
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token function">startActivity</span><span class="token punctuation">(</span>share<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">NavIntent</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;get share appas&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">val</span> apps<span class="token operator">=</span>  FileUtil<span class="token punctuation">.</span><span class="token function">getShareApps</span><span class="token punctuation">(</span><span class="token function">requireContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            apps<span class="token punctuation">.</span><span class="token function">forEach</span> <span class="token punctuation">{</span>
                XLog<span class="token punctuation">.</span><span class="token function">enableBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        btns<span class="token punctuation">.</span><span class="token function">forEachIndexed</span> <span class="token punctuation">{</span> index<span class="token punctuation">,</span> i <span class="token operator">-&gt;</span>
            <span class="token keyword">val</span> btn <span class="token operator">=</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token function">requireContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            btn<span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
                text <span class="token operator">=</span> i<span class="token punctuation">.</span>title
                isAllCaps <span class="token operator">=</span> <span class="token boolean">false</span>
                id<span class="token operator">=</span>View<span class="token punctuation">.</span><span class="token function">generateViewId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            btn<span class="token punctuation">.</span><span class="token function">setOnClickListener</span> <span class="token punctuation">{</span> i<span class="token punctuation">.</span><span class="token function">evt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
            activityIntentBinding<span class="token punctuation">.</span>intentBtnGroup<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>btn<span class="token punctuation">,</span>index<span class="token punctuation">)</span>
            activityIntentBinding<span class="token punctuation">.</span>intentFlow<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48);function T(A,S){const a=p("ExternalLinkIcon");return i(),o("div",null,[u,r,n("p",null,[n("a",d,[s("https://evolution-x.org/"),t(a)]),n("a",k,[s("https://download.pixelexperience.org/"),t(a)]),n("a",v,[s("https://arrowos.net/download"),t(a)])]),n("p",null,[n("a",m,[s("https://lineageos.org/"),t(a)]),n("a",b,[s("https://havoc-os.com/download"),t(a)])]),n("p",null,[n("a",g,[s("https://crdroid.net/begonia/9"),t(a)]),s(" (红米note8pro)")]),n("p",null,[s("论坛["),n("a",h,[s("https://forum.xda-developers.com/"),t(a)]),s("]")]),f,n("p",null,[n("a",y,[s("https://stackoverflow.com/questions/2785485/is-there-a-unique-android-device-id"),t(a)]),n("a",q,[s("https://libraries.io/"),t(a)]),n("a",x,[s("https://www.finclip.com/downloads/?activeTab=assistant"),t(a)]),n("a",w,[s("https://developer.android.com/build/migrate-to-kotlin-dsl"),t(a)]),n("a",_,[s("https://www.an.rustfisher.com/"),t(a)]),n("a",C,[s("https://juejin.cn/post/7219234932735934524#comment"),t(a)])]),n("p",null,[s("gradle用法 "),n("a",R,[s("https://juejin.cn/post/6895299152226615309"),t(a)]),n("a",E,[s("https://www.jetpackcompose.app/compose-catalog"),t(a)])]),L,n("p",null,[n("a",O,[s("https://doc.nju.edu.cn/books/35f4a/page/gradle"),t(a)]),s(" 第一种")]),I])}const N=e(c,[["render",T],["__file","mirror.html.vue"]]);export{N as default};
