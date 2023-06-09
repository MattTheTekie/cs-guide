import{_ as c,f as i,r as a,o as p,c as r,b as e,u as d,w as u,d as n,e as s,a as m}from"./app-3d979d38.js";const k=n("h1",{id:"边框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#边框","aria-hidden":"true"},"#"),s(" 边框")],-1),b=m(`<p>Borders vs. outlines 边界border和轮廓outline很相似。然而轮廓在以下方面与边界不同</p><ul><li>轮廓不占据空间，他们在元素内容之外绘制</li><li>根据规范，轮廓不必为矩形，尽管通常是矩形。</li></ul><p>语法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* style */</span>
<span class="token property">border</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>

<span class="token comment">/* width | style */</span>
<span class="token property">border</span><span class="token punctuation">:</span> 2px dotted<span class="token punctuation">;</span>

<span class="token comment">/* style | color */</span>
<span class="token property">border</span><span class="token punctuation">:</span> outset #f33<span class="token punctuation">;</span>

<span class="token comment">/* width | style | color */</span>
<span class="token property">border</span><span class="token punctuation">:</span> medium dashed green<span class="token punctuation">;</span>

<span class="token comment">/* Global values */</span>
<span class="token property">border</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token property">border</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
<span class="token property">border</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("I have a border, an outline, AND a box shadow! Amazing, isn't it?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0.5rem outset pink"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"outline"),n("span",{class:"token punctuation"},":"),s(" 0.5rem solid khaki"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" 0 0 0 2rem skyblue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 12px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font"),n("span",{class:"token punctuation"},":"),s(" bold 1rem sans-serif"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 2rem"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 1rem"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"outline-offset"),n("span",{class:"token punctuation"},":"),s(" 0.5rem"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y={__name:"border.html",setup(_){let t=i([{border:"2px solid red"},{border:"2px dashed cyan"},{border:"1rem solid yellow"},{border:"2px solid yellow"},{border:"thick double rgb(50, 161, 206)"},{border:"4mm ridge rgba(211,220,50,.6)"}]);return(g,w)=>{const o=a("CssDemo"),l=a("CodeDemo");return p(),r("div",null,[k,e(o,{"css-list":d(t)},null,8,["css-list"]),b,e(l,{id:"code-demo-25",type:"normal",code:"eJw9j71uwzAMhF+F1dLFbpsAXdSgRYAuXfoEWZhKjgnLlCHJaX6Qdw/NOIEm8TveHc+mLX0w1qwc7T9/oMW9B4RtTM6nCpAhjiUQ+wrWv99KDpBbdPH/CdY9noh3FVDm5wJUvlavk82GTWX+chZb+cJ5wzA7Wnh7eU++n1yzLzAQdx8TnlMePMdADroWO1IusfUtViT6lirrjtsw+lkyJdQJHY3ZwmI5HHTeRC5WaHCw0B3kXGefqFHcY9oRW/XTwYDOyVXicJ/M5erYNFL63lHQRS69XAFyQGuD"},{default:u(()=>[v,h]),_:1})])}}},x=c(y,[["__file","border.html.vue"]]);export{x as default};
