import{_ as r,r as i,o as t,c as s,d as e,e as d,b as l,a}from"./app-3d979d38.js";const c={},v=a(`<h1 id="maven和gradle" tabindex="-1"><a class="header-anchor" href="#maven和gradle" aria-hidden="true">#</a> maven和gradle</h1><h2 id="mvn命令" tabindex="-1"><a class="header-anchor" href="#mvn命令" aria-hidden="true">#</a> mvn命令</h2><p>maven 命令的格式为 mvn [plugin-name]:[goal-name]，可以接受的参数如下，</p><p>-D 指定参数，如 -Dmaven.test.skip=true 跳过单元测试；</p><p>-P 指定 Profile 配置，可以用于区分环境；</p><p>-e 显示maven运行出错的信息；</p><p>-o 离线执行命令,即不去远程仓库更新包；</p><p>-X 显示maven允许的debug信息；</p><p>-U 强制去远程更新snapshot的插件或依赖，默认每天只更新一次。</p><p>常用maven命令 创建maven项目：mvn archetype:create 指定 group： -DgroupId=packageName</p><p>指定 artifact：-DartifactId=projectName</p><p>创建web项目：-DarchetypeArtifactId=maven-archetype-webapp</p><p>创建maven项目：mvn archetype:generate 验证项目是否正确：mvn validate maven 打包：mvn package 只打jar包：mvn jar:jar 生成源码jar包：mvn source:jar 产生应用需要的任何额外的源代码：mvn generate-sources 编译源代码： mvn compile 编译测试代码：mvn test-compile 运行测试：mvn test 运行检查：mvn verify 清理maven项目：mvn clean 生成eclipse项目：mvn eclipse:eclipse 清理eclipse配置：mvn eclipse:clean 生成idea项目：mvn idea:idea 安装项目到本地仓库：mvn install 发布项目到远程仓库：mvn:deploy 在集成测试可以运行的环境中处理和发布包：mvn integration-test 显示maven依赖树：mvn dependency:tree 显示maven依赖列表：mvn dependency:list 下载依赖包的源码：mvn dependency:sources 安装本地jar到本地仓库：mvn install:install-file -DgroupId=packageName -DartifactId=projectName -Dversion=version -Dpackaging=jar -Dfile=path web项目相关命令 启动tomcat：mvn tomcat:run 启动jetty：mvn jetty:run 运行打包部署：mvn tomcat:deploy 撤销部署：mvn tomcat:undeploy 启动web应用：mvn tomcat:start 停止web应用：mvn tomcat:stop 重新部署：mvn tomcat:redeploy 部署展开的war文件：mvn war:exploded tomcat:exploded</p><h2 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> maven</h2><p>配置jdk版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;properties&gt;
        &lt;maven.compiler.source&gt;17&lt;/maven.compiler.source&gt;
        &lt;maven.compiler.target&gt;17&lt;/maven.compiler.target&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
    &lt;/properties&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maven下载地址" tabindex="-1"><a class="header-anchor" href="#maven下载地址" aria-hidden="true">#</a> maven下载地址</h3>`,17),p={href:"https://archive.apache.org/dist/maven/maven-3/",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="maven-打包" tabindex="-1"><a class="header-anchor" href="#maven-打包" aria-hidden="true">#</a> maven 打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -Dmaven.test.skip=true

mvn package -DskipTests 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The easiest way to setup the Maven Wrapper for your project is to use the Maven Wrapper Plugin with its provided wrapper goal. To add or update all the necessary Maven Wrapper files to your project execute the following command:</p><p>注意国内一些原因,下载wrapper太慢,不推荐使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
 

mvn wrapper:wrapper
# 更新版本
mvn wrapper:wrapper -Dmaven=3.9.0


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Normally you instruct users to install a specific version of Apache Maven, put it on the PATH and then run the mvn command like the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>But now, with a Maven Wrapper setup, you can instruct users to run wrapper scripts:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./mvnw clean install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or on Windows</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvnw.cmd clean install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A normal Maven build will be executed, with the one important change that if the user doesn&#39;t have the necessary version of Maven specified in .mvn/wrapper/maven-wrapper.properties it will be downloaded for the user first, installed and then used.</p><h2 id="gradle命令" tabindex="-1"><a class="header-anchor" href="#gradle命令" aria-hidden="true">#</a> gradle命令</h2><h3 id="更新gradle" tabindex="-1"><a class="header-anchor" href="#更新gradle" aria-hidden="true">#</a> 更新gradle</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>跳过test
./gradlew build <span class="token parameter variable">-x</span> <span class="token builtin class-name">test</span>

./gradlew wrapper --gradle-version<span class="token operator">=</span><span class="token number">8.0</span>.1 --distribution-type<span class="token operator">=</span>bin

./gradlew tasks
<span class="token comment"># Downloading https://services.gradle.org/distributions/gradle-8.0-bin.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function o(u,h){const n=i("ExternalLinkIcon");return t(),s("div",null,[v,e("p",null,[e("a",p,[d("https://archive.apache.org/dist/maven/maven-3/"),l(n)])]),m])}const b=r(c,[["render",o],["__file","mvn.html.vue"]]);export{b as default};