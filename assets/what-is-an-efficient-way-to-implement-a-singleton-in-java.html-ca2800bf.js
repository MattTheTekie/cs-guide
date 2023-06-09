const t=JSON.parse('{"key":"v-de85098c","path":"/cs-tips/java-tip/stackoverflow/what-is-an-efficient-way-to-implement-a-singleton-in-java.html","title":"如何创建单例 ？","lang":"zh-CN","frontmatter":{"description":"问题 Java 创建单例有哪些方式 ? 解答 实现单例，从加载方式来看，有两种: 预加载; 懒加载; 先看一下实现单例最简单的方式(预加载): 再来看一下懒加载的方式: 以上方式在单线程的情况可以很好的满足需要，换言之，若是在多线程，还需要作一定的改进,如下所示: 上述代码运用了 Double-Checked Locking idiom (http:/...","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/cs-tips/java-tip/stackoverflow/what-is-an-efficient-way-to-implement-a-singleton-in-java.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"如何创建单例 ？"}],["meta",{"property":"og:description","content":"问题 Java 创建单例有哪些方式 ? 解答 实现单例，从加载方式来看，有两种: 预加载; 懒加载; 先看一下实现单例最简单的方式(预加载): 再来看一下懒加载的方式: 以上方式在单线程的情况可以很好的满足需要，换言之，若是在多线程，还需要作一定的改进,如下所示: 上述代码运用了 Double-Checked Locking idiom (http:/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-25T04:34:06.000Z"}],["meta",{"property":"article:author","content":"yzqdev"}],["meta",{"property":"article:modified_time","content":"2023-05-25T04:34:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何创建单例 ？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-25T04:34:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yzqdev\\",\\"url\\":\\"http://www.yzqdev.top\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解答","slug":"解答","link":"#解答","children":[]}],"git":{"createdTime":1684989246000,"updatedTime":1684989246000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3.02,"words":905},"filePathRelative":"cs-tips/java-tip/stackoverflow/what-is-an-efficient-way-to-implement-a-singleton-in-java.md","localizedDate":"2023年5月25日","autoDesc":true}');export{t as data};