# 版本号说明

:::tip
见[http://nodejs.cn/learn/semantic-versioning-using-npm](http://nodejs.cn/learn/semantic-versioning-using-npm)
:::

## npm 中的版本号规则

### 版本的格式

  major.minor.patch

  主版本号.次版本号.修补版本号

## 版本匹配规则

## version

  必须匹配某个版本

  如：1.1.2，表示必须依赖 1.1.2 版

### >version

  必须大于某个版本

  如：>1.1.2，表示必须大于 1.1.2 版

### >=version

  可大于或等于某个版本

  如：>=1.1.2，表示可以等于 1.1.2，也可以大于 1.1.2 版本

### <version

  必须小于某个版本

  如：<1.1.2，表示必须小于 1.1.2 版本

### <=version

  可以小于或等于某个版本

  如：<=1.1.2，表示可以等于 1.1.2，也可以小于 1.1.2 版本

### ~version

  大概匹配某个版本

  如果 minor 版本号指定了，那么 minor 版本号不变，而 patch 版本号任意

  如果 minor 和 patch 版本号未指定，那么 minor 和 patch 版本号任意

  如：~1.1.2，表示 >= 1.1.2 < 1.2.0，可以是 1.1.2，1.1.3，1.1.4，.....，1.1.n

  如：~1.1，表示 >= 1.1.0 < 1.2.0，可以是同上

  如：~1，表示 >= 1.0.0 < 2.0.0，可以是 1.0.0，1.0.1，1.0.2，.....，1.0.n，1.1.n，1.2.n，.....，1.n.n

### ^version

  兼容某个版本

  版本号中最左边的非 0 数字的右侧可以任意

  如果缺少某个版本号，则这个版本号的位置可以任意

  如：^1.1.2 ，表示 >=1.1.2 <2.0.0，可以是 1.1.2，1.1.3，.....，1.1.n，1.2.n，.....，1.n.n

  如：^0.2.3 ，表示 >=0.2.3 <0.3.0，可以是 0.2.3，0.2.4，.....，0.2.n

  如：^0.0，表示 >=0.0.0 <0.1.0，可以是 0.0.0，0.0.1，.....，0.0.n

### x 标识符

  x 的位置表示任意版本

  如：1.2.x，表示可以 1.2.0，1.2.1，.....，1.2.n

### 标识符

  任意版本，"" 也表示任意版本

  如：*，表示 >=0.0.0 的任意版本

## version1 - version2

  大于等于 version1，小于等于 version2

  如：1.1.2 - 1.3.1，表示包括 1.1.2 和 1.3.1 以及他们件的任意版本

## range1 || range2

  满足 range1 或者满足 range2，可以多个范围

  如：<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0，表示满足这3个范围的版本都可以

### install 和 update 区别

The difference between npm install and npm update handling of package versions specified in package.json

总结: 两者最大的区别是在对待已经安装过的模糊版本时候

```shell
  npm install会忽略模糊版本

  npm update会更新模糊版本至最新
```

另外: `install and update`处理 devDependencies 方式也不同

```shell
  npm install 会安装/更新devDependencies，除非你指定 --production标志

  npm update 会忽略 devDependencies，除非你指定 --dev 标志
```