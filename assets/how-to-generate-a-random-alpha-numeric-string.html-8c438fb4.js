const t=JSON.parse('{"key":"v-616841af","path":"/cs-tips/java-tip/stackoverflow/how-to-generate-a-random-alpha-numeric-string.html","title":"如何产生一个随机的字母数字串作为 session 的唯一标识符?","lang":"zh-CN","frontmatter":{"description":"如果允许产生的随机字符串是可猜测的(随机字符串比较都短,或者使用有缺陷的随机数生成器),进而导致攻击者可能会劫持到会话的,可以使用一个相对简单随机数生成代码,如下所示: ```java public class RandomString { private static final char[] symbols; static { StringBuil...","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/cs-tips/java-tip/stackoverflow/how-to-generate-a-random-alpha-numeric-string.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"如何产生一个随机的字母数字串作为 session 的唯一标识符?"}],["meta",{"property":"og:description","content":"如果允许产生的随机字符串是可猜测的(随机字符串比较都短,或者使用有缺陷的随机数生成器),进而导致攻击者可能会劫持到会话的,可以使用一个相对简单随机数生成代码,如下所示: ```java public class RandomString { private static final char[] symbols; static { StringBuil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-25T04:34:06.000Z"}],["meta",{"property":"article:author","content":"yzqdev"}],["meta",{"property":"article:modified_time","content":"2023-05-25T04:34:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何产生一个随机的字母数字串作为 session 的唯一标识符?\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-25T04:34:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yzqdev\\",\\"url\\":\\"http://www.yzqdev.top\\"}]}"]]},"headers":[],"git":{"createdTime":1684989246000,"updatedTime":1684989246000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"cs-tips/java-tip/stackoverflow/how-to-generate-a-random-alpha-numeric-string.md","localizedDate":"2023年5月25日","autoDesc":true}');export{t as data};