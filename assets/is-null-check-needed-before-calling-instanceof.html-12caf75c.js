import{_ as l,r,o as c,c as o,d as e,e as n,b as s,a as t}from"./app-3d979d38.js";const i={},d=t('<h1 id="在调用-instanceof-前需要进行null检查吗" tabindex="-1"><a class="header-anchor" href="#在调用-instanceof-前需要进行null检查吗" aria-hidden="true">#</a> 在调用 instanceof 前需要进行null检查吗</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>null instanceof SomeClass 会返回 null 还是抛出 NullPointerException 异常</p><h3 id="答案一" tabindex="-1"><a class="header-anchor" href="#答案一" aria-hidden="true">#</a> 答案一</h3>',4),h={href:"http://docs.oracle.com/javase/specs/jls/se7/html/jls-15.html#jls-15.20.2",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在运行时，如果该instanceof运算符的关系表达式（RelationExpression）不为 null，且这个引用可以被成功转型（ §15.16），不抛出ClassCastException，则结果为true；
 否则结果为false。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答案二" tabindex="-1"><a class="header-anchor" href="#答案二" aria-hidden="true">#</a> 答案二</h3><pre><code>public class IsInstanceOfTest {

    public static void main(final String[] args) {

        String s;

        s = &quot;&quot;;

        System.out.println((s instanceof String));
        System.out.println(String.class.isInstance(s));

        s = null;

        System.out.println((s instanceof String));
        System.out.println(String.class.isInstance(s));
    }
}
</code></pre><p>打印出</p><pre><code>true
true
false
false
</code></pre><h3 id="原文链接" tabindex="-1"><a class="header-anchor" href="#原文链接" aria-hidden="true">#</a> 原文链接</h3>`,6),f={href:"http://stackoverflow.com/questions/2950319/is-null-check-needed-before-calling-instanceof",target:"_blank",rel:"noopener noreferrer"};function p(m,_){const a=r("ExternalLinkIcon");return c(),o("div",null,[d,e("p",null,[n("在调用 instanceof 前不要进行null检查 null instanceof SomeClass 会返回 null 在 Java Language Specification 中 "),e("a",h,[n("http://docs.oracle.com/javase/specs/jls/se7/html/jls-15.html#jls-15.20.2"),s(a)])]),u,e("p",null,[e("a",f,[n("http://stackoverflow.com/questions/2950319/is-null-check-needed-before-calling-instanceof"),s(a)])])])}const x=l(i,[["render",p],["__file","is-null-check-needed-before-calling-instanceof.html.vue"]]);export{x as default};
