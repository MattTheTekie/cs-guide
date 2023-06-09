import{_ as o,r as l,o as p,c as u,b as t,w as e,a as c,d as a,e as n}from"./app-3d979d38.js";const i={},k=c(`<h1 id="viewbox基础" tabindex="-1"><a class="header-anchor" href="#viewbox基础" aria-hidden="true">#</a> viewbox基础</h1><p>这个页面是一个关于 SVG { viewport，viewbox，coordinates }的教程。</p><h2 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> Viewport</h2><p>视窗</p><h2 id="视窗作为用户坐标" tabindex="-1"><a class="header-anchor" href="#视窗作为用户坐标" aria-hidden="true">#</a> 视窗作为用户坐标</h2><p>viewBox 属性用于指定用户坐标。</p><p>下面是 viewBox 的语法:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>spec</span> <span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该规范是一个字符串，包含以下值，以空格分隔:</p><ul><li>及 是左上角的坐标</li><li>及 是 x 坐标和 y 坐标的范围，它们不能是负的</li></ul><p>任何坐标位于 viewBox 之外的绘图都不会显示。</p><p>如果 viewBox 属性不存在，则坐标与 viewport 相同。</p><p>[参见 SVG: Viewport ]</p><p>下面是一些例子。</p><h3 id="设置坐标原点" tabindex="-1"><a class="header-anchor" href="#设置坐标原点" aria-hidden="true">#</a> 设置坐标原点</h3><p>在这里，我们移动坐标，所以绘图区域的左上角是{30,0}。</p><p>这是一个以{30,0}为中心，半径为20的圆。</p>`,17),r=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("30 0 100 100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("30"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("20"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),d=a("h3",{id:"设置坐标宽度和高度",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#设置坐标宽度和高度","aria-hidden":"true"},"#"),n(" 设置坐标宽度和高度")],-1),v=a("p",null,"在这里，我们将 viewBox 的 x 和 y 范围都设置为50，并在中间画一个半径为25的圆。",-1),m=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 50 50"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),h=c(`<p>您可以看到 viewBox 填充了视区，尽管 viewBox 的宽度为50，而 viewport 的宽度为100。</p><p>默认情况下:</p><ol><li>默认情况下，viewBox 将按比例缩放以适应视区。保持长宽比(不变形，不拉伸).(这可能会留下空白的两边。)</li><li>视框将以视区为中心</li></ol><p>技术细节。假设 viewport width 和 height 为{ pX，pY } ，viewBox width 和 height 为{ bX，bY }。现在，有两个比率: pX/bX 和 pY/bY。无论哪个小，都将是比例因子。</p><h3 id="控制-viewport-viewbox-映射-preserveaspectratio-属性" tabindex="-1"><a class="header-anchor" href="#控制-viewport-viewbox-映射-preserveaspectratio-属性" aria-hidden="true">#</a> 控制 viewport/viewBox 映射: “ preserveAspectRatio”属性</h3><p>可以使用 preserveAspectRatio 属性控制 viewport 中 viewBox 的精确缩放和位置。</p><p>当 viewport 和 viewBox 具有相同的宽度和高度时，就没有问题了。</p><p>当 viewport 和 viewBox 有不同的宽度和高度时，会出现以下情况:</p><ol><li>对于每个 x 和 y 尺寸，viewBox 可以非均匀缩放(长宽比不保留)</li><li>将 viewBox 缩放均匀，然后缩小，以适应</li><li>viewBox 可以均匀缩放和剪裁(这样部分就不会显示)</li></ol><p>如果 viewBox 是均匀缩放的，那么也会出现对齐问题。也就是 x 维空间中的 lignn 到{ top，middle，bottom } ，y 维空间中的 lignn 到{ top，middle，bottom }。</p><p>SVG 提供了一个非常方便的属性 preserveAspectRatio。你只需要告诉它你想要上面的哪种情况，你不需要做任何关于缩放和定位的数学运算。</p><h3 id="不要保留纵横比" tabindex="-1"><a class="header-anchor" href="#不要保留纵横比" aria-hidden="true">#</a> 不要保留纵横比</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>preserveAspectRatio=&quot;none&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这意味着不要保留长宽比，要根据尺寸进行调整。</p><p>比较:</p>`,15),g=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 50 100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"preserveAspectRatio"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("none"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),x=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 50 100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),b=c('<h3 id="保留高宽比" tabindex="-1"><a class="header-anchor" href="#保留高宽比" aria-hidden="true">#</a> 保留高宽比</h3><p>为了保持纵横比，使用以下方法:</p><p>“ alignment <em>spec meet</em> or _ slice”</p><p>调整规范必须是:</p><ul><li><code>xMinYMin</code></li><li><code>xMinYMid</code></li><li><code>xMinYMax</code></li><li><code>xMidYMin</code></li><li>(预设)</li><li><code>xMidYMax</code></li><li><code>xMaxYMin</code></li><li><code>xMaxYMid</code></li><li><code>xMaxYMax</code></li></ul><p>满足或片必须是其中之一:</p><ul><li>(默认情况下)意味着缩小以适应。(所以在视区的两侧可能有空白区域)</li><li>意味着剪辑。(所以部分图纸被切断)</li></ul><h3 id="preserveaspectratio-示例-使用-meet" tabindex="-1"><a class="header-anchor" href="#preserveaspectratio-示例-使用-meet" aria-hidden="true">#</a> preserveAspectRatio 示例，使用“ meet”</h3><p>下面是同样的图形，有3种不同的“ preserveAspectRatio”设置。全都符合(默认)。</p><p>Viewport 和 viewBox 具有相同的高度。只是宽度不同。视区宽度为100px，而 viewBox 宽度为50px。</p>',10),w=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 50 100"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token attr-name"},"preserveAspectRatio"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("xMinYMid"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),q=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 50 100"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token attr-name"},"preserveAspectRatio"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("xMidYMid"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),_=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 50 100"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token attr-name"},"preserveAspectRatio"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("xMaxYMid"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("25"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),y=a("h3",{id:"带-slice-的-preserveaspectratio-示例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#带-slice-的-preserveaspectratio-示例","aria-hidden":"true"},"#"),n(" 带“ slice”的 preserveAspectRatio 示例")],-1),M=a("p",null,"这里是同样的绘图与3个不同的设置“ preserveAspectRatio”。所有与片。",-1),B=a("p",null,"Viewport 和 viewBox 具有相同的高度。只是宽度不同。视窗宽度为100px，而 viewBox 宽度为200px。",-1),S=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 200 100"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token attr-name"},"preserveAspectRatio"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("xMinYMid slice"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),R=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 200 100"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token attr-name"},"preserveAspectRatio"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("xMidYMid slice"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),V=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 200 100"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token attr-name"},"preserveAspectRatio"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("xMaxYMid slice"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("50"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),f=a("h2",{id:"嵌套-svg",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#嵌套-svg","aria-hidden":"true"},"#"),n(" 嵌套 SVG")],-1),J=a("p",null,"您可以将 SVG 嵌入到 SVG 中。这是有用的，当你想有一个区域的图形和另一个区域的标题，图例等。",-1),j=a("p",null,"例如，假设要绘制一个图 y = x ^ 2。要绘制的范围是{ x，0,10}和{ y，0,10}。因此，您可以创建一个高度和宽度为10的视图框。但是，你也需要一个区域来显示图表的标题。",-1),A=a("p",null,"通常，您需要缩放和定位所有绘图坐标，以便为标题留出空间。但是您可以在主 SVG 视图框中有一个嵌套的 SVG 标记。在内部的 SVG 中，您只需为绘图的坐标指定一个视框尺寸和位置。这样，您就不必重新计算绘图的坐标。",-1),F=a("p",null,'嵌套 SVG 的语法只是2个额外的属性，x 和 y: < SVG x = " val" y = " val" > 。X 和 y 指定内部 SVG 的 viewport 的左上角的位置。',-1),Q=a("p",null,"下面是一个例子:",-1),L=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("20"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("20"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("80"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("80"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"viewBox"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0 0 100 100"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("rect")]),n(),a("span",{class:"token attr-name"},"x"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"y"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("0"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"fill"),a("span",{class:"token punctuation"},":"),n("green"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"stroke"),a("span",{class:"token punctuation"},":"),n("blue"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"stroke-width"),a("span",{class:"token punctuation"},":"),n("5")]),a("span",{class:"token punctuation"},'"')])]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),K=a("p",null,"在上面的示例中，SVG 视图框与视图端口相同，边长为100。它有一个内部 SVG，边长为80，原点为{20,20}。内部的 SVG 有一个边长为100的视图框。(所以，你不必重新评价你的观点)它画一个长度为100的正方形。",-1),I=a("h3",{id:"使用者坐标单位",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用者坐标单位","aria-hidden":"true"},"#"),n(" 使用者坐标单位")],-1),Y=a("p",null,"视框，用户坐标的单位大小",-1);function U(C,E){const s=l("CodeDemo");return p(),u("div",null,[k,t(s,{id:"code-demo-58",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXPLMlPLnfIrgHxjAwUDBaAgCMco2cXk2SRnFiXnpCokQ2SBipMrgSwQowhIG4EY+iB1+kBbgLRSLQBhMiK0"},{default:e(()=>[r]),_:1}),d,v,t(s,{id:"code-demo-67",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXPLMlPLnfIrgHwDBQMFUxCKUbKLybNJzixKzklVSAZJGZkCVSZXwlhFMIY+SKE+0A4grVQLAC1QImk="},{default:e(()=>[m]),_:1}),h,t(s,{id:"code-demo-136",type:"normal",code:"eJw9jk0KwjAQha8yzAUahWykCnoE19nIODQDNSnJkCri3Z0gdvV+eB+8N0Z9zHjAsbYJVrlrPAbcORcQIssUdYtNeL3kp2UHDryDX70Urlwan+vCpNebSrZJyokDnkIaSQrNDNTBvTeAXuZ8R8u/GvpwsAem+PkCWDktZw=="},{default:e(()=>[g]),_:1}),t(s,{id:"code-demo-139",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXPLMlPLnfIrgHwDBQMFUwMFiLBdTJ5NcmZRck6qQjJI0sgUKJhcCWSZgqSLYEL6IIX6QFuAtFItAGKRIrM="},{default:e(()=>[x]),_:1}),b,t(s,{id:"code-demo-225",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXPLMlPLnfIrgHwDBQMFUwMFsHBMXkFRanFqUVmqY3FBanJJUGJJZj5QTYVvZl6kb2YKSIVdTJ5NcmZRck6qQjJIv5Ep0LjkSiDLFGRwEUxIH6RQH+gQIK1UCwDUIzA6"},{default:e(()=>[w]),_:1}),t(s,{id:"code-demo-228",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXPLMlPLnfIrgHwDBQMFUwMFsHBMXkFRanFqUVmqY3FBanJJUGJJZj5QTYVvZkokEINU2MXk2SRnFiXnpCokg/QbmQKNS64EskxBBhfBhPRBCvWBDgHSSrUA0a0wMA=="},{default:e(()=>[q]),_:1}),t(s,{id:"code-demo-231",type:"normal",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjQwiFFSyEjNTM8ogXPLMlPLnfIrgHwDBQMFUwMFsHBMXkFRanFqUVmqY3FBanJJUGJJZj5QTYVvYkWkb2YKSIVdTJ5NcmZRck6qQjJIv5Ep0LjkSiDLFGRwEUxIH6RQH+gQIK1UCwDUmTA8"},{default:e(()=>[_]),_:1}),y,M,B,t(s,{id:"code-demo-243",type:"normal",code:"eJw9jkEKwjAQRa8yzAU6Cm6kCrrvxp2QjUyHZiCmJQlpRby7idKu5v3h8flvtOnp8IhtzAPM2id7MrgjMghWdLBpi1llvo5LyQQEeyL4/Y2fgkQJWS5xEk63R9KxSEun/t5pD9EpS/XOxresgZ0A15p/Lb8KHiqFFZpqNmVQufj5Amb/Mr8="},{default:e(()=>[S]),_:1}),t(s,{id:"code-demo-246",type:"normal",code:"eJw9jsEKwjAMhl8l5AUWBS8yBb178Sb0IllYA3Ubbekm4rubKu4Q8v3h4ycv9PkRcI9tKj3M2mV/cLghcghetPd5jUVlPo+LZQKCLRF8726YoiSJRU5pEs7Xe9bRpOWi3c0GUlCW6h3d0LJGDgJca361/DTcVYp/aKrZ2EO28f0BZEMytQ=="},{default:e(()=>[R]),_:1}),t(s,{id:"code-demo-249",type:"normal",code:"eJw9jkEKwjAQRa8yzAU6Cm6kCrrvxp2QTZkOzUBsSxLSiHh3E8Wu5v3h8fkvtPHh8IhtSCOsOkR7MrgjMghWdLRxi0llvc65ZAKCPRF8/2ZavATxSS5hEY63PupcpNz1+d7pAMEpS/XOZmpZPTsBrjW/Wn4WPFTyf2iq2ZRB5eL7A2eDMsE="},{default:e(()=>[V]),_:1}),f,J,j,A,F,Q,t(s,{id:"code-demo-270",type:"normal",code:"eJxtjs0KAjEMhF8l5C5bBUHqz8Hn6EmNbbHuQjfuuojvbloNKHgIyYSZj3lg4GtCi5t+8DDGE4etw7kxDiFQ9IFV7lwLUF13eS2KYdJDc6ufWFVDpHHflYgBA0Iq86EJL9ORK1B537h/NaDnKZGoc0zJ+kzUruWXuwvZQ7qRilmF2KUkmnf1RrrLpRufL37/S90="},{default:e(()=>[L]),_:1}),K,I,Y])}const D=o(i,[["render",U],["__file","3.viewbox.html.vue"]]);export{D as default};