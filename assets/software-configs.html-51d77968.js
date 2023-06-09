import{_ as t,o as d,c as a,a as r}from"./app-3d979d38.js";const e={},n=r(`<h1 id="配置文件路径" tabindex="-1"><a class="header-anchor" href="#配置文件路径" aria-hidden="true">#</a> 配置文件路径</h1><h2 id="chrome配置" tabindex="-1"><a class="header-anchor" href="#chrome配置" aria-hidden="true">#</a> chrome配置</h2><p>chrome 69.0.3497.81 在 chrome://flags/ 下 禁用 Omnibox UI Hide Steady-State URL Scheme and Trivial Subdomains 重启 chrome 就显示完整 URL 了</p><h2 id="jetbrains" tabindex="-1"><a class="header-anchor" href="#jetbrains" aria-hidden="true">#</a> jetbrains</h2><p>jetbrains系列,自己配,不解释</p><h2 id="blender" tabindex="-1"><a class="header-anchor" href="#blender" aria-hidden="true">#</a> blender</h2><p>blender配置路径 <code>C:\\Users\\yanni\\AppData\\Roaming\\Blender Foundation\\Blender\\2.91\\config</code><br> vscode配置文件路径<code>C:\\Users\\yanni\\AppData\\Roaming\\Code\\User</code></p><h3 id="windows路径" tabindex="-1"><a class="header-anchor" href="#windows路径" aria-hidden="true">#</a> windows路径</h3><p>默认安装路径 <code>C:\\Users\\yanni\\AppData\\Local\\Programs</code></p><h2 id="win10开始菜单路径" tabindex="-1"><a class="header-anchor" href="#win10开始菜单路径" aria-hidden="true">#</a> win10开始菜单路径</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>C<span class="token punctuation">:</span>\\ProgramData\\Microsoft\\Windows\\Start Menu
C<span class="token punctuation">:</span>\\Users\\wz\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="程序自启动文件夹" tabindex="-1"><a class="header-anchor" href="#程序自启动文件夹" aria-hidden="true">#</a> 程序自启动文件夹</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>所有用户
C<span class="token punctuation">:</span>\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp
你的用户
C<span class="token punctuation">:</span>\\Users\\你的用户名\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>程序安装目录</th><th>%ProgramFiles%</th><th>C:\\Program Files</th></tr></thead><tbody><tr><td>程序安装目录32位</td><td>%PROGRAMFILES(X86)%</td><td>C:\\Program Files (x86)</td></tr><tr><td>公用文件夹</td><td>%CommonProgramFiles%</td><td>C:\\Program Files\\Common Files</td></tr><tr><td>公用文件夹32位</td><td>%COMMONPROGRAMFILES(x86)%</td><td>C:\\Program Files (x86)\\Common Files</td></tr><tr><td>用户目录</td><td>%HOMEPATH%</td><td>C:\\Users\\用户名</td></tr><tr><td>用户目录</td><td>%USERPROFILE%</td><td>C:\\Users\\用户名</td></tr><tr><td>用户程序目录</td><td>%APPDATA%</td><td>C:\\Users\\Administrator\\AppData\\Roaming</td></tr><tr><td>所有用户目录</td><td>%ALLUSERSPROFILE%</td><td>C:\\ProgramData</td></tr><tr><td>临时文件</td><td>%TEMP%</td><td>C:\\Users\\用户名\\AppData\\Local\\Temp</td></tr><tr><td>本地程序数据</td><td>%LOCALAPPDATA%</td><td>C:\\Users\\用户名\\AppData\\Local</td></tr><tr><td></td><td>%PROGRAMDATA%</td><td>C:\\ProgramData</td></tr><tr><td>字体目录</td><td>%WINDIR%\\FONTS</td><td>C:\\Windows\\Fonts</td></tr><tr><td>输入法目录</td><td>%WINDIR%\\IME</td><td>C:\\Windows\\IME</td></tr><tr><td>桌面</td><td>%USERPROFILE%\\桌面</td><td>C:\\Users\\Administrator\\Desktop</td></tr><tr><td>收藏夹</td><td>%USERPROFILE%\\Favorites</td><td>C:\\Users\\Administrator\\Favorites</td></tr><tr><td>快速启动</td><td>%APPDATA%\\Microsoft\\Internet Explorer\\Quick Launch</td><td>C:\\Users\\Administrator\\AppData\\Roaming\\Microsoft\\Internet Explorer\\Quick Launch</td></tr><tr><td>开始菜单</td><td></td><td>C:\\Users\\Administrator\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu</td></tr><tr><td>开始菜单“启动”项</td><td></td><td>C:\\Users\\Administrator\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</td></tr><tr><td>公共目录</td><td>%PUBLIC%</td><td>C:\\Users\\Public</td></tr></tbody></table>`,14),s=[n];function i(o,c){return d(),a("div",null,s)}const l=t(e,[["render",i],["__file","software-configs.html.vue"]]);export{l as default};
