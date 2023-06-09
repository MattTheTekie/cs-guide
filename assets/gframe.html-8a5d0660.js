import{_ as d,r as t,o as n,c as l,d as o,e,b as i,a as c}from"./app-3d979d38.js";const s={},r=c('<h1 id="gf教程" tabindex="-1"><a class="header-anchor" href="#gf教程" aria-hidden="true">#</a> gf教程</h1><h2 id="打包静态文件" tabindex="-1"><a class="header-anchor" href="#打包静态文件" aria-hidden="true">#</a> 打包静态文件</h2><p>把静态文件放在public文件夹,必须在<code>main.go</code>(或者其他入口文件)添加<code>_ &quot;myapp/packed&quot;</code>然后<code>gf build(包含--pack)</code> 然后在入口文件添加<code>s.AddStaticPath(&quot;/atools&quot;, &quot;public&quot;)</code>,到时候就可以通过<code>http://localhost:8000/atools</code>访问到静态文件</p>',3),p=o("code",null,"main.go",-1),_=o("code",null,'_ "myapp/packed"',-1),u=o("code",null,"gf build(包含--pack)",-1),g=o("strong",null,[e("直接"),o("code",null,"gf build(包含--pack)"),e("是不行的")],-1),h={href:"https://goframe.org/pages/viewpage.action?pageId=1114148",target:"_blank",rel:"noopener noreferrer"},f=o("code",null,"gf build",-1),m=c("<p><code>gf build</code>打包过程如下:</p><ol><li><code>gf build(包含--pack)</code>会先在<code>packed</code>文件夹生成一个<code>build_pack_data.go</code>文件</li><li>然后执行<code>go build main.go</code>,因为我们在<code>main.go</code>添加了<code>_ &quot;myapp/packed&quot;</code>,所以资源文件就打包进去了,没加这行代码,就没打包进去</li><li>生成可执行文件</li></ol>",2);function b(k,q){const a=t("ExternalLinkIcon");return n(),l("div",null,[r,o("p",null,[e("必须在"),p,e("(或者其他入口文件)添加"),_,e("然后"),u,e(","),g,e(". (其实资源管理章节里说了,"),o("a",h,[e("https://goframe.org/pages/viewpage.action?pageId=1114148"),i(a)]),e(",但是如果先看的是"),f,e("文档就可能会忽视掉这一点)")]),m])}const v=d(s,[["render",b],["__file","gframe.html.vue"]]);export{v as default};