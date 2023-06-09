import{_ as o,r as e,o as p,c as i,d as n,e as s,b as t,a as l}from"./app-3d979d38.js";const u={},c=n("h1",{id:"webstorm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webstorm","aria-hidden":"true"},"#"),s(" webstorm")],-1),r=n("h2",{id:"关于webtypes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于webtypes","aria-hidden":"true"},"#"),s(" 关于webtypes")],-1),d={href:"https://juejin.cn/post/6954011748277944333",target:"_blank",rel:"noopener noreferrer"},k=n("h3",{id:"webtypes用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webtypes用法","aria-hidden":"true"},"#"),s(" webtypes用法")],-1),v={href:"https://github.com/JetBrains/web-types/blob/master/examples/",target:"_blank",rel:"noopener noreferrer"},q=l(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://json.schemastore.org/web-types&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;framework&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;js-types-syntax&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VARLET&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;contributions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;vue-components&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;el-affix&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;symbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ElAffix&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fix the element to a specific visible area.&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offset&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offset distance.&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix-attributes&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;number&quot;</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;position of affix.&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix-attributes&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;&#39;top&#39; | &#39;bottom&#39;&quot;</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;top&#39;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;target&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;target container. (CSS selector)&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix-attributes&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;string&quot;</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;z-index&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\`z-index\` of affix&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix-attributes&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;number&quot;</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;triggers when fixed state changed.&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix-events&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;triggers when scrolling.&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix-events&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;customize default content.&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;doc-url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.org/en-US/component/affix.html#affix-slots&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(b,f){const a=e("ExternalLinkIcon");return p(),i("div",null,[c,r,n("p",null,[n("a",d,[s("https://juejin.cn/post/6954011748277944333"),t(a)])]),k,n("p",null,[n("a",v,[s("https://github.com/JetBrains/web-types/blob/master/examples/"),t(a)])]),q])}const y=o(u,[["render",m],["__file","webstorm.html.vue"]]);export{y as default};
