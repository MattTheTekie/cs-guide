import{_ as i,r as t,o as l,c as r,d as n,e,b as s,a as d}from"./app-3d979d38.js";const o={},c=n("h1",{id:"打包注意事项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打包注意事项","aria-hidden":"true"},"#"),e(" 打包注意事项")],-1),p=n("h2",{id:"教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#教程","aria-hidden":"true"},"#"),e(" 教程")],-1),u={href:"https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android",target:"_blank",rel:"noopener noreferrer"},v={href:"https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey",target:"_blank",rel:"noopener noreferrer"},m=d(`<h2 id="生成签名证书" tabindex="-1"><a class="header-anchor" href="#生成签名证书" aria-hidden="true">#</a> 生成签名证书</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>keytool <span class="token parameter variable">-genkey</span> <span class="token parameter variable">-alias</span> testalias <span class="token parameter variable">-keyalg</span> RSA <span class="token parameter variable">-keysize</span> <span class="token number">2048</span> <span class="token parameter variable">-validity</span> <span class="token number">36500</span> <span class="token parameter variable">-keystore</span> test.keystore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中:</p><ul><li>testalias是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字</li><li>test.keystore是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径</li><li>36500是证书的有效期，表示100年有效期，单位天，建议时间设置长一点，避免证书过期</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Enter keystore password:  //输入证书文件密码，输入完成回车  
Re-enter new password:   //再次输入证书文件密码，输入完成回车  
What is your first and last name?  
  [Unknown]:  //输入名字和姓氏，输入完成回车  
What is the name of your organizational unit?  
  [Unknown]:  //输入组织单位名称，输入完成回车  
What is the name of your organization?  
  [Unknown]:  //输入组织名称，输入完成回车  
What is the name of your City or Locality?  
  [Unknown]:  //输入城市或区域名称，输入完成回车  
What is the name of your State or Province?  
  [Unknown]:  //输入省/市/自治区名称，输入完成回车  
What is the two-letter country code for this unit?  
  [Unknown]:  //输入国家/地区代号（两个字母），中国为CN，输入完成回车  
Is CN=XX, OU=XX, O=XX, L=XX, ST=XX, C=XX correct?  
  [no]:  //确认上面输入的内容是否正确，输入y，回车  

Enter key password for &lt;testalias&gt;  
        (RETURN if same as keystore password):  //确认证书密码与证书文件密码一样（HBuilder|HBuilderX要求这两个密码一致），直接回车就可以
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看证书信息" tabindex="-1"><a class="header-anchor" href="#查看证书信息" aria-hidden="true">#</a> 查看证书信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>keytool <span class="token parameter variable">-list</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-keystore</span> test.keystore  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用android-studio生成证书" tabindex="-1"><a class="header-anchor" href="#使用android-studio生成证书" aria-hidden="true">#</a> 使用android studio生成证书</h3><p>菜单栏-&gt;build-&gt;generate signed apk 生成一个jks证书</p><h2 id="分离abi-分开64位和32位" tabindex="-1"><a class="header-anchor" href="#分离abi-分开64位和32位" aria-hidden="true">#</a> 分离abi(分开64位和32位)</h2><p>在build.gradle添加</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>
 defaultConfig<span class="token punctuation">{</span>

     splits <span class="token punctuation">{</span>
         abi <span class="token punctuation">{</span>
             enable <span class="token boolean">true</span>
             
    <span class="token comment">// 排除不必要的架构</span>
 exclude <span class="token string">&#39;x86&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;arm64-v8a&#39;</span>
  <span class="token comment">// 重置包含的目录</span>
 <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 设置包含，调用前需要先用 reset 将默认清除</span>
 include <span class="token string">&#39;armeabi-v7a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x86&#39;</span>
 
 <span class="token comment">// 是否打出包含全部的apk</span>
 universalApk <span class="token boolean">true</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>`,13),b={href:"https://ask.dcloud.net.cn/article/35627",target:"_blank",rel:"noopener noreferrer"};function h(k,g){const a=t("ExternalLinkIcon");return l(),r("div",null,[c,p,n("ul",null,[n("li",null,[e("安卓离线打包教程 "),n("a",u,[e("https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android"),s(a)])]),n("li",null,[e("关于appkey的问题 "),n("a",v,[e("https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey"),s(a)])])]),m,n("ul",null,[n("li",null,[e("uni-app运行环境版本和编译器版本不一致的问题"),n("a",b,[e("https://ask.dcloud.net.cn/article/35627"),s(a)])])])])}const y=i(o,[["render",h],["__file","build-apps.html.vue"]]);export{y as default};
