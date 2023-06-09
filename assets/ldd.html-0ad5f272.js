import{_ as l,o as e,c as i,a as d}from"./app-3d979d38.js";const t={},s=d(`<h1 id="ldd-查看程序依赖库" tabindex="-1"><a class="header-anchor" href="#ldd-查看程序依赖库" aria-hidden="true">#</a> ldd 查看程序依赖库</h1><p>ldd</p><p>: 作用：用来查看程式运行所需的共享库,常用来解决程式因缺少某个库文件而不能运行的一些问题。</p><p>示例：查看test程序运行所依赖的库:</p><pre><code>/opt/app/todeav1/test$ldd test
libstdc++.so.6 =&gt; /usr/lib64/libstdc++.so.6 (0x00000039a7e00000)
libm.so.6 =&gt; /lib64/libm.so.6 (0x0000003996400000)
libgcc_s.so.1 =&gt; /lib64/libgcc_s.so.1 (0x00000039a5600000)
libc.so.6 =&gt; /lib64/libc.so.6 (0x0000003995800000)
/lib64/ld-linux-x86-64.so.2 (0x0000003995400000)
</code></pre><ul><li>第一列：程序需要依赖什么库</li><li>第二列: 系统提供的与程序需要的库所对应的库</li><li>第三列：库加载的开始地址</li></ul><p>通过上面的信息，我们可以得到以下几个信息：</p><ol><li>通过对比第一列和第二列，我们可以分析程序需要依赖的库和系统实际提供的，是否相匹配</li><li>通过观察第三列，我们可以知道在当前的库中的符号在对应的进程的地址空间中的开始位置</li></ol><p>如果依赖的某个库找不到，通过这个命令可以迅速定位问题所在；</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>原理： ldd不是个可执行程式，而只是个shell脚本； ldd显示可执行模块的dependency的工作原理，其实质是通过ld-linux.so（elf动态库的装载器）来实现的。ld-linux.so模块会先于executable模块程式工作，并获得控制权，因此当上述的那些环境变量被设置时，ld-linux.so选择了显示可执行模块的dependency。</p></div>`,10),o=[s];function c(n,a){return e(),i("div",null,o)}const r=l(t,[["render",c],["__file","ldd.html.vue"]]);export{r as default};
