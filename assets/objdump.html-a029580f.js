import{_ as e,o as i,c as d,a as o}from"./app-3d979d38.js";const a={},r=o(`<h1 id="objdump-二进制文件分析" tabindex="-1"><a class="header-anchor" href="#objdump-二进制文件分析" aria-hidden="true">#</a> objdump 二进制文件分析</h1><p>objdump工具用来显示二进制文件的信息，就是以一种可阅读的格式让你更多地了解二进制文件可能带有的附加信息。</p><h2 id="常用参数说明" tabindex="-1"><a class="header-anchor" href="#常用参数说明" aria-hidden="true">#</a> 常用参数说明</h2><ul><li>-f 显示文件头信息</li><li>-D 反汇编所有section (-d反汇编特定section)</li><li>-h 显示目标文件各个section的头部摘要信息</li><li>-x 显示所有可用的头信息，包括符号表、重定位入口。-x 等价于 -a -f -h -r -t 同时指定。</li><li>-i 显示对于 -b 或者 -m 选项可用的架构和目标格式列表。</li><li>-r 显示文件的重定位入口。如果和-d或者-D一起使用，重定位部分以反汇编后的格式显示出来。</li><li>-R 显示文件的动态重定位入口，仅仅对于动态目标文件有意义，比如某些共享库。</li><li>-S 尽可能反汇编出源代码，尤其当编译的时候指定了-g这种调试参数时，效果比较明显。隐含了-d参数。</li><li>-t 显示文件的符号表入口。类似于nm -s提供的信息</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>查看本机目标结构（使用大端还是小端存储）:</p><pre><code>$objdump -i
</code></pre><p>反汇编程序:</p><pre><code>$objdump -d main.o
</code></pre><p>显示符号表入口:</p><pre><code>$objdump  -t main.o
</code></pre><p>希望显示可用的简洁帮助信息，直接输入objdump即可；（objdump -H)</p>`,12),c=[r];function l(t,n){return i(),d("div",null,c)}const h=e(a,[["render",l],["__file","objdump.html.vue"]]);export{h as default};