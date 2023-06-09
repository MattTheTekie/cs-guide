import{_ as p,r as c,o as u,c as i,b as s,w as e,d as a,e as n,a as o}from"./app-3d979d38.js";const k={},r=a("h1",{id:"svg文本",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#svg文本","aria-hidden":"true"},"#"),n(" svg文本")],-1),d=a("p",null,"这个页面是关于 SVG 文本元素的教程。",-1),h=a("h2",{id:"文本元素",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#文本元素","aria-hidden":"true"},"#"),n(" 文本元素")],-1),g=a("p",null,"文本元素用于添加文本。",-1),m=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("dog"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),v=a("p",null,"基本文本示例",-1),b=a("p",null,"{ x，y }属性指定放置文本的坐标。",-1),x=a("p",null,"注意: SVG 中的文本都是图形，就好像字体变成了实际的曲线。当您使用变换，如缩放放大图形，所有文本也将缩放。[参见 SVG: 坐标转换]",-1),_=a("h3",{id:"文本不自动换行",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#文本不自动换行","aria-hidden":"true"},"#"),n(" 文本不自动换行")],-1),q=a("p",null,"文本元素中的文本不会自动换行(不会自动换行)。",-1),y=a("p",null,"不像 HTML，也没有“ pre”元素。",-1),f=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`cat and
dog`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),S=o('<p>换行不会换行</p><h3 id="如何在-svg-文本元素中有换行符" tabindex="-1"><a class="header-anchor" href="#如何在-svg-文本元素中有换行符" aria-hidden="true">#</a> 如何在 SVG 文本元素中有换行符？</h3><p>你不能。</p><p>解决方案:</p><ul><li>对新的文本行使用新的“ text”元素</li><li>使用属性{ x，y，dx，dy }的“ tspan”</li></ul><p>这两种解决方案都要求您手动计算出确切的行高来定位文本元素。</p><h2 id="文本元素锚定位置" tabindex="-1"><a class="header-anchor" href="#文本元素锚定位置" aria-hidden="true">#</a> 文本元素锚定位置</h2><p>当您有一个文本元素时</p>',8),V=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),n(),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),n(),a("span",{class:"token punctuation"},'"'),n(" 50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),n(),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),n(),a("span",{class:"token punctuation"},'"'),n(" 50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},">")]),n(" cat "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),n(),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),w=a("p",null,"确切的锚定位置是第一个字符的基线左下方。",-1),K=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("3"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"fill"),a("span",{class:"token punctuation"},":"),n("red")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("circle")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("dog"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),T=a("h2",{id:"文本对齐",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#文本对齐","aria-hidden":"true"},"#"),n(" 文本对齐")],-1),M=a("p",null,"Text-anchor 可用于设置 text 元素中{ x，y }表示的位置。",-1),A=a("p",null,"可能的值是:",-1),F=a("ul",null,[a("li",null,"(预设)"),a("li",null,[a("code",null,"middle")]),a("li",null,[a("code",null,"end")])],-1),Q=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("3"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"fill"),a("span",{class:"token punctuation"},":"),n("red")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("circle")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"text-anchor"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("middle"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("dog"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),j=a("p",null,"以文本为中心的",-1),J=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("3"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"fill"),a("span",{class:"token punctuation"},":"),n("red")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("circle")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"text-anchor"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("end"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("dog"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),C=o('<p>右对齐</p><h2 id="tspan-元素" tabindex="-1"><a class="header-anchor" href="#tspan-元素" aria-hidden="true">#</a> Tspan 元素</h2><p>Tspan 类似于 HTML 的 span 元素。</p><p>Tspan 元素用于文本元素内部。</p><p>Tspan 用于为文本标记中的单词设置不同的样式，比如粗体文本。</p><p>Tspan 对于在文本元素中包含每一行也很有用。</p><p>您还可以使用 tspan 来调整单词或字母的位置。使用属性 dy 更改相对于当前文本元素的位置的位置。</p><p>Tspan 最有用的属性是{ dx，dy }。它们是相对于字符的正常位置的位置偏移量。</p><p>Tspan 也有绝对定位的属性{ x，y }。</p><p>abc</p>',10),I=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("ab"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("tspan")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"font-weight"),a("span",{class:"token punctuation"},":"),n("bold")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("c"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("tspan")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),R=a("p",null,"使用“ tspan”的粗体字",-1),E=a("p",null,"abc",-1),L=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("ab"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("tspan")]),n(),a("span",{class:"token attr-name"},"dy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("-10"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("c"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("tspan")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),P=a("p",null,"上标使用“ tspan”, 偏移",-1),z=a("h2",{id:"x-和-y-属性的多个值",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#x-和-y-属性的多个值","aria-hidden":"true"},"#"),n(" X 和 y 属性的多个值")],-1),G=a("p",null,"每个属性“ x”和“ y”都可以是一个数字序列。第二个数字是第二个字符的位置，第三个数字是第三个字符的位置等等。",-1),H=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 10 50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100 90 80"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("dog"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),N=o('<p>x y 的多个值</p><h2 id="上标-下标-带基线移位" tabindex="-1"><a class="header-anchor" href="#上标-下标-带基线移位" aria-hidden="true">#</a> 上标，下标，带基线移位</h2><p>Baseline-shift 属性可以与文本元素或 tspan 一起使用，用于向上或向下移动字符。</p><p>可能的值:</p><ul><li><code>baseline</code></li><li><code>sub</code></li><li><code>super</code></li><li>百分比</li><li>长度</li><li><code>inherit</code></li></ul><h2 id="垂直文本" tabindex="-1"><a class="header-anchor" href="#垂直文本" aria-hidden="true">#</a> 垂直文本</h2><p>你可以通过以下方式获得垂直文本:</p>',7),U={href:"http://xahlee.info/js/svg_transformation.html",target:"_blank",rel:"noopener noreferrer"},B=a("li",null,"使用 财产，有价值 (从上到下)",-1),Y=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"transform"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("rotate(-90 50 50)"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("mouse"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),W=a("p",null,"使用变换旋转垂直文本",-1),D=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"writing-mode"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("tb"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("bird"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),X=o('<p>垂直文本 财产</p><p>写入模式的可能值是:</p><ul><li>(从左到右，从上到下)</li><li><code>rl-tb</code></li><li><code>tb-rl</code></li><li><code>lr</code></li><li><code>rl</code></li><li><code>tb</code></li><li><code>inherit</code></li></ul><h3 id="字形-方向-垂直" tabindex="-1"><a class="header-anchor" href="#字形-方向-垂直" aria-hidden="true">#</a> 字形-方向-垂直</h3><p>字形-方向-垂直可以用来有字母定位侧面。</p><p>允许的值是:</p><ul><li><code>auto</code></li><li>。必须是{<code>0</code>, <code>90</code>, <code>180</code>, <code>270</code>}</li><li><code>inherit</code></li></ul>',7),O=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("figure")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("svg_example"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("text")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("20"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("20"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"writing-mode"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("tb"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"glyph-orientation-vertical"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("LOVE"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("text")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),Z=o('<p>垂直文本<code>writing-mode</code>, }(注意: 从2015-08-17开始，Firefox 不支持 也不<code>glyph-orientation-vertical</code>)</p><h2 id="路径上的文本" tabindex="-1"><a class="header-anchor" href="#路径上的文本" aria-hidden="true">#</a> 路径上的文本</h2><p>若要在曲线上显示文本，请使用带有 xlink: href 属性的 textPath 元素，该属性引用先前定义的 path 元素。</p><p>textPath 应该有一个 xlink: href 属性，其值为 path 元素的 id。</p><p>[参见 SVG 路径教程]</p><p>[参见 SVG: Structure Elements ]</p><h2 id="指定文本长度" tabindex="-1"><a class="header-anchor" href="#指定文本长度" aria-hidden="true">#</a> 指定文本长度</h2><p>textLength = “ length”</p><ul><li><code>lengthAdjust = &quot;spacing&quot;</code></li><li><code>lengthAdjust = &quot;spacingspacingAndGlyphs&quot;</code></li></ul><h2 id="文本元素属性" tabindex="-1"><a class="header-anchor" href="#文本元素属性" aria-hidden="true">#</a> 文本元素属性</h2><h2 id="文字样式" tabindex="-1"><a class="header-anchor" href="#文字样式" aria-hidden="true">#</a> 文字样式</h2><p>有关 Font Size，请参见 SVG: Font Size</p><h3 id="字体属性" tabindex="-1"><a class="header-anchor" href="#字体属性" aria-hidden="true">#</a> 字体属性</h3><p>下面的代码与 CSS 代码相同。</p><ul><li><code>font</code></li><li><code>font-family</code></li><li><code>font-size</code></li><li><code>font-size-adjust</code></li><li><code>font-stretch</code></li><li><code>font-style</code></li><li><code>font-variant</code></li><li><code>font-weight</code></li></ul><h3 id="文本属性" tabindex="-1"><a class="header-anchor" href="#文本属性" aria-hidden="true">#</a> 文本属性</h3><p>下面的代码与 CSS 代码相同。</p><ul><li><code>direction</code></li><li><code>letter-spacing</code></li><li><code>text-decoration</code></li><li><code>unicode-bidi</code></li><li><code>word-spacing</code></li></ul><h3 id="文本元素特定属性" tabindex="-1"><a class="header-anchor" href="#文本元素特定属性" aria-hidden="true">#</a> 文本元素特定属性</h3><ul><li><code>alignment-baseline</code></li><li><code>baseline-shift</code></li><li><code>dominant-baseline</code></li><li><code>glyph-orientation-horizontal</code></li><li><code>glyph-orientation-vertical</code></li><li><code>kerning</code></li><li><code>text-anchor</code></li><li><code>writing-mode</code></li></ul><h3 id="视觉媒体的其他属性" tabindex="-1"><a class="header-anchor" href="#视觉媒体的其他属性" aria-hidden="true">#</a> 视觉媒体的其他属性</h3><ul><li>，只适用于最外层的 svg 元素</li><li>的潜在间接值(currentColor)<code>fill</code>, <code>stroke</code>, <code>stop-color</code>, 及 属性。(支持颜色的 SVG 属性允许从 css2扩展颜色规范，以适应任意颜色空间中的颜色定义。请参阅颜色配置文件描述。)</li><li><code>cursor</code></li><li><code>display</code></li><li>，只适用于建立新视图窗口的元素</li><li><code>visibility</code></li></ul>',22);function $(aa,na){const t=c("CodeDemo"),l=c("ExternalLinkIcon");return u(),i("div",null,[r,d,h,g,s(t,{id:"code-demo-12",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXHtYvJsSlIrShQqgCKmIPlKKMMuJT/dRh8kB1KjDzQISCvVAgAPVhxS"},{default:e(()=>[m]),_:1}),v,b,x,_,q,y,s(t,{id:"code-demo-33",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXHtYvJsSlIrShQqgCIg6UogbQqSSE4sUUjMS4nJS8lPt9EHqQGp1QcaCKSVagEHCB9y"},{default:e(()=>[f]),_:1}),S,s(t,{id:"code-demo-69",type:"normal",code:"eJyrVsooyc1RslKyKUmtKFGoULBViFFSMDUAEpVIbDuF5MQSBRt9sCK7mDylWgDMnA/M"},{default:e(()=>[V]),_:1}),w,s(t,{id:"code-demo-75",type:"normal",code:"eJw9jk0KhTAMhK9ScoH6eLiR6km6a2NbiAo1+IN4d1OkrmaSzBfmgsgTQQdm3YLak+fYW/g1jQUVMYXIdRzsbFzKjlC5Q5ZtibizuizmL7rySSh+TERdRi+g0S9XPjAerD680oNfgtHlVjJaqojC/QD1RTD6"},{default:e(()=>[K]),_:1}),T,M,A,F,s(t,{id:"code-demo-104",type:"normal",code:"eJw9jkEKwzAMBL9idC9OKb0Ety/xpdiqLVAScESbUPr3SITktKuVZtEPqgwMPYT5U9yXstRHhGvXRXAVqVQ5xmccQ6KWGF1aNLzbSVoP19TcVGdZGdW/iblvmBUMfuesQXARd+InbfHlNaY6Wc9AOTMqmacSvO0M9fqhKvw3wvA5Lw=="},{default:e(()=>[Q]),_:1}),j,s(t,{id:"code-demo-110",type:"normal",code:"eJw9jtEKwjAMRX+l5F06EV9G9Uv6Im1sCrGDLuiG+O8mjO3p3tzkXPIFkhfDCGF+F/epWegW4TwMERxhLST7eI8tpNoTo0uLhlc7SevuupqL6iwro/pnZR47ZgWD3zhrEFzEHfhBW3x6tEST9WAzLE8leFsY5/U9Vfj9ARPDN/c="},{default:e(()=>[J]),_:1}),C,s(t,{id:"code-demo-143",type:"normal",code:"eJw1jc0KgCAQhF9F9h7VoUtYT+KlH1PBNHBJJXr3VqHTx87Mzjyg8bQwAg+3YtHsqCcBfdcJYFoapfE/Z+E4yoQskVLsTByKsawcw7U4FjBbSerhHTaxfo+rtztlNt7WzEykklLW0iIR3g/o5CtJ"},{default:e(()=>[I]),_:1}),R,E,s(t,{id:"code-demo-152",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXHtYvJsSlIrShQqgCIg6UogbQqSSEyyKSkuSMxTSAEJ6RqCxJJt9MFidkAaqAmkWR9oA5BWqgUALWIkPA=="},{default:e(()=>[L]),_:1}),P,z,G,s(t,{id:"code-demo-164",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXHtYvJsSlIrShQqgCIGCoYGCqYgRZUQeQVLAwULkKqU/HQbfZA6kHp9oKFAWqkWADjNHmA="},{default:e(()=>[H]),_:1}),N,a("ul",null,[a("li",null,[n("对文本元素使用旋转变换"),a("a",U,[n("坐标变换"),s(l)]),n("]")]),B]),s(t,{id:"code-demo-229",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXHtYvJsSlIrShQqgCKmIPlKGKOkKDGvOC2/KBcoUJRfkliSqqFraaBgCkKaQJ25+aXFqTb6IN0gU/SBVgFppVoAf4Mm9g=="},{default:e(()=>[Y]),_:1}),W,s(t,{id:"code-demo-235",type:"normal",code:"eJw1TEsKgCAQvYrMPrRFm7BO4koUHUgDG9KI7t64cPX+74VI6YAV9HUHUdFR3AzMShkQ0WOINORusibfSDR2lp4/g9SChDlM6XSePbLctlicln3Qh5LfGeH7Abe7I74="},{default:e(()=>[D]),_:1}),X,s(t,{id:"code-demo-307",type:"normal",code:"eJw1jTEOwjAMRa8Sea9aGFFhY0NiY4qEQmsSS2lSJaZNhbg7ztDJ9vtfz19wPHk4Qf8m+0moBm9yPmvIi31iMdPsUcNFh16AWmlkJ+Gh6zQoh2Qd72ftMBZWRcix5tu+rImYgm2mOKIwfgmzfptdExNhYMMUQ7NgYhqMl0bV3e6Pa99WYzW38l4m/P6N3zsq"},{default:e(()=>[O]),_:1}),Z])}const ta=p(k,[["render",$],["__file","3.svg-text.html.vue"]]);export{ta as default};
