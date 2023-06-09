import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},p=t(`<h1 id="postgres技巧" tabindex="-1"><a class="header-anchor" href="#postgres技巧" aria-hidden="true">#</a> postgres技巧</h1><h2 id="spring使用postgres" tabindex="-1"><a class="header-anchor" href="#spring使用postgres" aria-hidden="true">#</a> spring使用postgres</h2><p>在安装好了PostgreSQL之后，下面我们尝试一下在Spring Boot中使用PostgreSQL数据库。</p><p>第一步：创建一个基础的Spring Boot项目（如果您还不会，可以参考这篇文章：快速入门）</p><p>第二步：在pom.xml中引入访问PostgreSQL需要的两个重要依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.postgresql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>postgresql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里postgresql是必须的，spring-boot-starter-data-jpa的还可以替换成其他的数据访问封装框架，比如：MyBatis等，具体根据你使用习惯来替换依赖即可。因为已经是更上层的封装，所以基本使用与之前用MySQL是类似的，所以你也可以参考之前MySQL的文章进行配置，但数据源部分需要根据下面的部分配置。</p><p>第三步：在配置文件中为PostgreSQL数据库配置数据源、以及JPA的必要配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring.datasource.url=jdbc:postgresql://localhost:5432/test
spring.datasource.username=postgres
spring.datasource.password=123456
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.properties.hibernate.hbm2ddl.auto=create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步：创建用户信息实体，映射user_info表（最后完成可在pgAdmin中查看）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第五步：创建用户信息实体的增删改查</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserInfoRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">UserInfo</span> <span class="token function">findByName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">UserInfo</span> <span class="token function">findByNameAndAge</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;from UserInfo u where u.name=:name&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">UserInfo</span> <span class="token function">findUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第六步：创建单元测试，尝试一下增删改查操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserInfoRepository</span> userRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建10条记录</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;AAA&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;BBB&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;CCC&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;DDD&quot;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;EEE&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;FFF&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;GGG&quot;</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;HHH&quot;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;III&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;JJJ&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试findAll, 查询所有记录</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> userRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试findByName, 查询姓名为FFF的User</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> userRepository<span class="token punctuation">.</span><span class="token function">findByName</span><span class="token punctuation">(</span><span class="token string">&quot;FFF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试findUser, 查询姓名为FFF的User</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> userRepository<span class="token punctuation">.</span><span class="token function">findUser</span><span class="token punctuation">(</span><span class="token string">&quot;FFF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试findByNameAndAge, 查询姓名为FFF并且年龄为60的User</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;FFF&quot;</span><span class="token punctuation">,</span> userRepository<span class="token punctuation">.</span><span class="token function">findByNameAndAge</span><span class="token punctuation">(</span><span class="token string">&quot;FFF&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试删除姓名为AAA的User</span>
        userRepository<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>userRepository<span class="token punctuation">.</span><span class="token function">findByName</span><span class="token punctuation">(</span><span class="token string">&quot;AAA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试findAll, 查询所有记录, 验证上面的删除是否成功</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> userRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把单元测试跑起来：</p><h2 id="修改自增的id" tabindex="-1"><a class="header-anchor" href="#修改自增的id" aria-hidden="true">#</a> 修改自增的id</h2><h3 id="postgresql主键自增" tabindex="-1"><a class="header-anchor" href="#postgresql主键自增" aria-hidden="true">#</a> postgresql主键自增</h3><h3 id="一、创建表时设置主键自增" tabindex="-1"><a class="header-anchor" href="#一、创建表时设置主键自增" aria-hidden="true">#</a> 一、创建表时设置主键自增</h3><p>1、mysql主键自增使用AUTO_INCREMENT关键字，postgresql自增使用SERIAL关键字</p><p>2、postgresql创建表</p><p>语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb_ins
<span class="token punctuation">(</span>
id <span class="token keyword">serial</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
name <span class="token keyword">VARCHAR</span><span class="token punctuation">,</span>
age <span class="token keyword">VARCHAR</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、postgresql向表中插入数据 注意values里必须是单引号</p><p>在pg中的sql，单引号用来标识实际的值，双引号用来标识表名（table name）或列名（column name）等数据库中存在的值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb_ins<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;小红&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb_ins<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span> <span class="token string">&#39;小1&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;小红&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb_ins<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span> <span class="token string">&#39;小2&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;小红&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb_ins<span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span> <span class="token string">&#39;小3&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;小红&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、postgresql查询表中数据 级的查询前要先改编码<code>chcp 936</code>不然会乱码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb_ins<span class="token punctuation">;</span>

test<span class="token operator">=</span><span class="token comment"># select * from tb_ins;</span>
 id <span class="token operator">|</span> name <span class="token operator">|</span> age
<span class="token comment">----+------+------</span>
  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span> 小红
  <span class="token number">2</span> <span class="token operator">|</span> 小<span class="token number">1</span>  <span class="token operator">|</span> 小红
  <span class="token number">3</span> <span class="token operator">|</span> 小<span class="token number">2</span>  <span class="token operator">|</span> 小红
  <span class="token number">4</span> <span class="token operator">|</span> 小<span class="token number">3</span>  <span class="token operator">|</span> 小红
<span class="token punctuation">(</span><span class="token number">4</span> <span class="token keyword">rows</span><span class="token punctuation">)</span>

test<span class="token operator">=</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上查询验证自增关键字SERIAL是可用的</p><h3 id="二、修改menu表id字段为主键自增" tabindex="-1"><a class="header-anchor" href="#二、修改menu表id字段为主键自增" aria-hidden="true">#</a> 二、修改menu表id字段为主键自增</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM pg_class c WHERE c.relkind = &#39;S&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过上面的sql文可以查到postgresql内所有的sequence序列名。</p></div><p>1、在PostgreSQL当中，我们实现ID自增首先创建一个关联序列，以下sql语句是创建一个序列：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> SEQUENCE menu_id_seq <span class="token keyword">START</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>序列名称是menu_id_seq，起始数为1。</p><p>2、然后在字段默认值里设 <code>nextval(&#39;menu_id_seq&#39;::regclass)</code>即可。</p><p><img src="https://img2020.cnblogs.com/blog/2203909/202102/2203909-20210203110131791-2075873613.png" alt="res"></p><p>或者</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> SEQUENCE menu_id_seq <span class="token keyword">START</span> 你当前id的最大<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">public</span><span class="token punctuation">.</span>menu <span class="token keyword">ALTER</span> <span class="token keyword">COLUMN</span> id <span class="token keyword">SET</span> <span class="token keyword">DEFAULT</span> nextval<span class="token punctuation">(</span><span class="token string">&#39;menu_id_seq&#39;</span>::regclass<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、修改id的自增起始数" tabindex="-1"><a class="header-anchor" href="#三、修改id的自增起始数" aria-hidden="true">#</a> 三、修改id的自增起始数</h3><p>把当前最大的id做为当前的id自增起始数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> setval<span class="token punctuation">(</span><span class="token string">&#39;gx_history_id_seq&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> gx_history<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>也可以使用下面的语句生成自增的id</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> test <span class="token punctuation">(</span>id <span class="token keyword">int</span>  GENERATED <span class="token keyword">BY</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">AS</span> <span class="token keyword">IDENTITY</span> <span class="token punctuation">(</span>cache <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> info <span class="token keyword">text</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在navicat中要把虚拟类型改为<code>GENERATED BY DEFAULT AS IDENTITY</code></p></div><h2 id="关于时区" tabindex="-1"><a class="header-anchor" href="#关于时区" aria-hidden="true">#</a> 关于时区</h2><h3 id="使用时区" tabindex="-1"><a class="header-anchor" href="#使用时区" aria-hidden="true">#</a> 使用时区</h3><p>postgresql的timestamp等于mysql的datetime postgres的timestamptz等于mysql的timestamp</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">private</span> <span class="token class-name">Instant</span> createTime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>数组库设置create_time为<code>timestamptz</code></p><h3 id="不使用时区" tabindex="-1"><a class="header-anchor" href="#不使用时区" aria-hidden="true">#</a> 不使用时区</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">private</span> <span class="token class-name">LocalDatetime</span> createTime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>数组库设置create_time为<code>timestamp</code></p>`,50),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","pgsql-tips.html.vue"]]);export{r as default};
