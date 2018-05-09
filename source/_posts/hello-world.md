---
title: 多磨博客迁移到github
date: 2018-05-09 22:31:31
categories:
- 笔记
tags: 
- hexo配置
- github建站
---

经过搜索对比，最终选择了github gh-pages存放文档，现在github在国内的连接速度已经可以了。

**首先来说配置过程中遇到的几个坑**

## 坑1：hexo配置文件的编写注意事项

有时候更新了配置文件以后，莫名其妙的出现错误，给你标个：出来，你改了又改，还是一样。这里有些注意事项：

- 所有的配置项目冒号:后面有参数的都要有一个空格；
- 类似git、repository这样的二级项目前面必须有缩进，某些编辑器你在上一行的尾部敲回车的时候，第二行会和上一行对齐，看起来有缩进的样子，但是会报错，你必须手动增加缩进，我在这里就被搞了！

##坑2：提示下面错误

```
ERROR Deployer not found : github
_config.yml是配置文件，hexo在2点几的版本中type: github。之后的版本是type: git
```

解决：安装如下功能包

```
npm install hexo-deployer-git --save
```

## 坑3：配置自动发布

网上有一大堆配置的文章，但是hexo和github的版本都在变，你按照人家的解决办法搞了半天也是白搭。最新版的hexo已经支持直接提交到你的项目地址了，如下面这样：

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: https://github.com/PiterFan/domo.git
  branch: gh-pages
```

## 坑4：绑定域名

现在github上已经支持直接设置域名，设置好后会自动在你的项目下面生成一个配置文件，如你设置的是别名解析，则会生成CNAME文件，查看内容，就是你的域名。把这个文件直接copy到你的source文件夹利就可以了，以后生成的时候这个文件会自动复制到你的public目录。

## 坑5：README.md

这个解决办法简单，把readme.md复制到source文件夹，然后在_config.yml里面找到# Directory，修改一下skip_render项即可，这样就不会将readme.md转换成html文档了。

```
# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:
```

看见了没？skip_render一项为空，添加上README.md就可以了。

```
# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render: README.md
```