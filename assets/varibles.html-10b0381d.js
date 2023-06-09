import{_ as d,o as t,c as e,a as o}from"./app-3d979d38.js";const c={},r=o('<h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1><p>​</p><p>自动变量是存储Windows PowerShell状态的那些变量。这些变量将包含用户和系统的信息，默认变量，运行时变量和PowerShell设置。这些变量可以由Windows PowerShell创建和维护。</p><p>以下是PowerShell中自动变量的列表：</p><table><thead><tr><th>编号</th><th>变量</th><th>描述</th></tr></thead><tbody><tr><td>1</td><td><code>$$</code></td><td>此变量用于表示会话接收到的最后一行中的最后一个令牌。</td></tr><tr><td>2</td><td><code>$?</code></td><td>此变量用于表示最后一个操作的执行状态。如果没有错误，则返回<code>True</code>，否则返回<code>False</code>。</td></tr><tr><td>3</td><td><code>$^</code></td><td>此变量用于表示会话接收到的最后一行中的第一个令牌。</td></tr><tr><td>4</td><td><code>$_</code></td><td>此变量充当<code>$PSItem</code>，它在管道对象中包含当前对象。</td></tr><tr><td>5</td><td><code>$args</code></td><td>此变量包含未声明参数的值的数组，这些值传递给脚本，函数或脚本块。</td></tr><tr><td>6</td><td><code>$ConsoleFileName</code></td><td>此变量用于表示控制台文件的路径，该文件最近在会话中使用。</td></tr><tr><td>7</td><td><code>$Error</code></td><td>此变量用于包含代表最新错误的错误对象数组。</td></tr><tr><td>8</td><td><code>$Event</code></td><td>此变量用于包含<code>PSEventArgs</code>的对象。<code>PSEventArgs</code>是用于表示正在处理的事件的对象。</td></tr><tr><td>9</td><td><code>$EventSubscriber</code></td><td>此变量用于包含PSEventSubscriber的对象。该对象包含正在处理的事件的事件订阅者。</td></tr><tr><td>10</td><td><code>$EventArgs</code></td><td>此变量用于包含一个对象，该对象表示第一个事件的参数。</td></tr><tr><td>11</td><td><code>$false</code></td><td>此变量用于表示<code>False</code>。</td></tr><tr><td>12</td><td><code>$foreach</code></td><td>此变量用于包含<code>ForEach</code>循环的枚举数。该变量仅在执行<code>ForEach</code>循环时存在。并在循环完成后删除。</td></tr><tr><td>13</td><td><code>$Home</code></td><td>此变量用于表示用户主目录的完整路径</td></tr><tr><td>14</td><td><code>$input</code></td><td>此变量包含一个枚举器，该枚举器枚举传递给该函数的所有输入。它仅适用于脚本块和功能。</td></tr><tr><td>15</td><td><code>$Host</code></td><td>此变量包含一个对象，该对象显示Windows PowerShell的当前主机应用程序。</td></tr><tr><td>16</td><td><code>$IsLinux</code></td><td>如果当前会话在Linux操作系统上运行，则此变量值为<code>$True</code>，否则为<code>$False</code>。</td></tr><tr><td>17</td><td><code>$IsWindows</code></td><td>如果当前会话在Windows操作系统上运行，则此变量值为<code>$True</code>，否则为<code>$False</code>。</td></tr><tr><td>18</td><td><code>$IsMacOS</code></td><td>如果当前会话在MacOS操作系统上运行，则此变量值为<code>$True</code>，否则为<code>$False</code>。</td></tr><tr><td>19</td><td><code>$null</code></td><td>此变量用于表示<code>null</code>值或空值。可以使用它来表示脚本和命令中缺少或未定义的值。</td></tr><tr><td>20</td><td><code>$PID</code></td><td>此变量显示进程的PID，该进程正在托管当前PowerShell的会话。</td></tr><tr><td>21</td><td><code>$PSItem</code></td><td>此变量充当<code>$_</code>，它在管道对象中包含当前对象。</td></tr><tr><td>22</td><td><code>$PSHome</code></td><td>此变量表示Windows PowerShell安装目录的完整路径。</td></tr><tr><td>23</td><td><code>$PSVersionTable</code></td><td>此变量用于表示只读哈希表，该哈希表显示有关当前会话中运行的PowerShell版本的详细信息。</td></tr><tr><td>24</td><td><code>$PWD</code></td><td>此变量用于包含路径对象，该路径对象显示当前目录的完整路径。</td></tr><tr><td>25</td><td><code>$ShellId</code></td><td>此变量用于表示当前Shell的标识符。</td></tr></tbody></table>',5),l=[r];function s(a,n){return t(),e("div",null,l)}const h=d(c,[["render",s],["__file","varibles.html.vue"]]);export{h as default};