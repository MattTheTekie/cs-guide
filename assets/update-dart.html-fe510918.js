import{_ as c,r as o,o as d,c as p,d as e,e as s,b as n,w as a}from"./app-3d979d38.js";const u={},h=e("h1",{id:"升级dart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#升级dart","aria-hidden":"true"},"#"),s(" 升级dart")],-1),k=e("p",null,[s("注意:如果更新出现错误,就Go inside the flutter/bin folder and delete the cache folder. 然后重新flutter upgrade,让他自己下载dartsdk, 如果无法解压,就安装一下7z->"),e("code",null,"scoop install 7zip")],-1),_={href:"https://storage.flutter-io.cn/dart-archive/channels/stable/release/2.8.3/sdk/dartsdk-windows-x64-release.zip",target:"_blank",rel:"noopener noreferrer"},b={class:"hint-container tip"},v=e("p",{class:"hint-container-title"},"提示",-1),f=e("p",null,[s("下面格式 "),e("code",null,"https://storage.flutter-io.cn/dart-archive/channels/<stable|beta|dev>/release/<version>/sdk/dartsdk-<platform>-<architecture>-release.zip")],-1),g=e("p",null,"例子",-1),m={href:"https://storage.flutter-io.cn/dart-archive/channels/stable/release/2.7.2/sdk/dartsdk-windows-ia32-release.zip",target:"_blank",rel:"noopener noreferrer"},w={href:"https://storage.flutter-io.cn/dart-archive/channels/stable/release/2.1.1/sdk/dartsdk-macos-x64-release.zip",target:"_blank",rel:"noopener noreferrer"},x={href:"https://storage.flutter-io.cn/dart-archive/channels/beta/release/2.8.0-20.11.beta/sdk/dartsdk-linux-x64-release.zip",target:"_blank",rel:"noopener noreferrer"},z={href:"https://storage.flutter-io.cn/dart-archive/channels/dev/release/2.9.0-1.0.dev/sdk/dartsdk-linux-x64-release.zip",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"flutter更新地址",-1),B={href:"https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_3.3.5-stable.zip",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"升级dart到2-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#升级dart到2-12","aria-hidden":"true"},"#"),s(" 升级dart到2.12")],-1),A=e("ul",null,[e("li",null,"@required改为required"),e("li",null,"可以为null的类型使用string?修饰")],-1),C=e("h2",{id:"组件被废弃",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#组件被废弃","aria-hidden":"true"},"#"),s(" 组件被废弃")],-1),R=e("p",null,"FlatButton被TextButton替代",-1),T=e("p",null,"this is c++ demo code",-1),N=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[e("pre",{class:"language-cpp"},[e("code",null,[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),s(),e("span",{class:"token string"},"<iostream>")]),s(`
`),e("span",{class:"token keyword"},"using"),s(),e("span",{class:"token keyword"},"namespace"),s(" std"),e("span",{class:"token punctuation"},";"),s(`
 
`),e("span",{class:"token keyword"},"int"),s(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),s(` 
`),e("span",{class:"token punctuation"},"{"),s(`
    cout `),e("span",{class:"token operator"},"<<"),s(),e("span",{class:"token string"},'"Hello, World!"'),e("span",{class:"token punctuation"},";"),s(`
    `),e("span",{class:"token keyword"},"return"),s(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),s(`
`),e("span",{class:"token punctuation"},"}"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-dart line-numbers-mode","data-ext":"dart"},[e("pre",{class:"language-dart"},[e("code",null,[e("span",{class:"token keyword"},"import"),s(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},"'dart:io'")]),e("span",{class:"token punctuation"},";"),s(`
`),e("span",{class:"token keyword"},"import"),s(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},"'package:crypto/crypto.dart'")]),s(),e("span",{class:"token operator"},"as"),s(" crypto"),e("span",{class:"token punctuation"},";"),s(`
`),e("span",{class:"token keyword"},"import"),s(),e("span",{class:"token string-literal"},[e("span",{class:"token string"},"'dart:typed_data'")]),e("span",{class:"token punctuation"},";"),s(`

bool `),e("span",{class:"token function"},"isPhone"),e("span",{class:"token punctuation"},"("),e("span",{class:"token class-name"},"String"),s(" input"),e("span",{class:"token punctuation"},")"),s(),e("span",{class:"token punctuation"},"{"),s(`
  `),e("span",{class:"token class-name"},"RegExp"),s(" pathReg "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token class-name"},"RegExp"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string-literal"},[e("span",{class:"token string"},'r"\\.\\\\"')]),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s(`
  `),e("span",{class:"token keyword"},"return"),s(" pathReg"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"hasMatch"),e("span",{class:"token punctuation"},"("),s("input"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s(`
`),e("span",{class:"token punctuation"},"}"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function q(I,L){const t=o("ExternalLinkIcon"),i=o("CodeTabs");return d(),p("div",null,[h,k,e("p",null,[s("dart sdk下载地址"),e("a",_,[s("https://storage.flutter-io.cn/dart-archive/channels/stable/release/2.8.3/sdk/dartsdk-windows-x64-release.zip"),n(t)])]),e("div",b,[v,f,g,e("ul",null,[e("li",null,[e("a",m,[s("https://storage.flutter-io.cn/dart-archive/channels/stable/release/2.7.2/sdk/dartsdk-windows-ia32-release.zip"),n(t)])]),e("li",null,[e("a",w,[s("https://storage.flutter-io.cn/dart-archive/channels/stable/release/2.1.1/sdk/dartsdk-macos-x64-release.zip"),n(t)])]),e("li",null,[e("a",x,[s("https://storage.flutter-io.cn/dart-archive/channels/beta/release/2.8.0-20.11.beta/sdk/dartsdk-linux-x64-release.zip"),n(t)])]),e("li",null,[e("a",z,[s("https://storage.flutter-io.cn/dart-archive/channels/dev/release/2.9.0-1.0.dev/sdk/dartsdk-linux-x64-release.zip"),n(t)])])]),y,e("p",null,[e("a",B,[s("https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_3.3.5-stable.zip"),n(t)])])]),E,A,C,R,T,n(i,{id:"69",data:[{id:"c++"},{id:"dart"}],"tab-id":"cpp"},{title0:a(({value:r,isActive:l})=>[s("c++")]),title1:a(({value:r,isActive:l})=>[s("dart")]),tab0:a(({value:r,isActive:l})=>[N]),tab1:a(({value:r,isActive:l})=>[V]),_:1})])}const F=c(u,[["render",q],["__file","update-dart.html.vue"]]);export{F as default};