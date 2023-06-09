import{_ as a,r as c,o as n,c as o,d as e,e as p,b as t,a as r}from"./app-3d979d38.js";const i="/cs-guide/assets/191f0001d4fe202a29e1-40bd838c.png",d="/cs-guide/assets/191f0001d6e9b63b2b25-2a985c09.png",g="/cs-guide/assets/19190001edad07f39b6e-2f280347.png",l="/cs-guide/assets/191f0001e5f6b8e7ec92-0d24fb05.png",f="/cs-guide/assets/19190001efa19a3a4d0a-17b1dfee.png",_="/cs-guide/assets/19210001cbfbc8c17b56-ca329b2d.png",b="/cs-guide/assets/191e0001f8be740419ee-7ffd9b70.png",m="/cs-guide/assets/191f0001e9e0273378ad-37f1eb4a.png",u="/cs-guide/assets/19210001d1e69085b570-f9403af2.png",h={},S=r('<h1 id="前端—css面试题" tabindex="-1"><a class="header-anchor" href="#前端—css面试题" aria-hidden="true">#</a> 前端—css面试题</h1><p>小海dedede 2017-03-17 16:31:18</p><p>1、CSS 选择符有哪些？</p><p><img src="'+i+'" alt="191f0001d4fe202a29e1.png"></p><p>2、CSS 优先级的选择过程？</p><p>优先级复合就近原则，同权重的情况下有限选择最近的属性。</p><p>载入样式的话是以最后载入的定位为准。</p><p>优先级：</p><p>!important &gt; id &gt; class &gt; tag（important要优先于内联样式）</p><p>3、阐述一下CSS3的新增伪类。</p><p><img src="'+d+'" alt="191f0001d6e9b63b2b25.png"></p><p>4、如何居中 div？如何居中一个浮动元素？如何让绝对定位的div居中？</p><p>div居中：给div一个宽度，然后添加margin: 0 auto;属性即可。</p><p>浮动元素居中：</p><p><img src="'+g+'" alt="19190001edad07f39b6e.png"></p><p>绝对定位的div居中：</p><p><img src="'+l+'" alt="191f0001e5f6b8e7ec92.png"></p><p>5、属性display 有哪些值？说明他们的作用。</p><p><img src="'+f+'" alt="19190001efa19a3a4d0a.png"></p><p>6、position 的值 relative 和 absolute 定位原理？</p><p><img src="'+_+'" alt="19210001cbfbc8c17b56.png"></p><p>7、用纯CSS 创建一个三角形的过程？</p><p><img src="'+b+'" alt="191e0001f8be740419ee.png"></p><p>8、li 与 li 之间有看不见的空白间隔如何形成的？相应的解决办法？</p><p><img src="'+m+'" alt="191f0001e9e0273378ad.png"></p><p>9、为什么要初始化CSS样式？</p><p>因为浏览器的兼容性问题，不同的浏览器对某些标签有自己的默认值，如果没有实现css的初始化，也就是没有解决浏览器的兼容性问题，那么会造成页面在不同浏览器下显示差异的问题。</p><p>10、CSS3 有哪些新特性？</p><p><img src="'+u+'" alt="19210001d1e69085b570.png"></p>',29),v={href:"https://www.toutiao.com/search/?keyword=CSS",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.toutiao.com/search/?keyword=%E7%A7%91%E6%8A%80",target:"_blank",rel:"noopener noreferrer"};function C(k,x){const s=c("ExternalLinkIcon");return n(),o("div",null,[S,e("ul",null,[e("li",null,[e("a",v,[p("CSS"),t(s)])]),e("li",null,[e("a",w,[p("科技"),t(s)])])])])}const N=a(h,[["render",C],["__file","css-interview.html.vue"]]);export{N as default};
