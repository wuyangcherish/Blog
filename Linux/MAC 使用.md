# MAC 使用总结

### 查看隐藏的文件

首先打开终端，输入

```
defaults write com.apple.finder AppleShowAllFiles TRUE ; killall Finder
```
然后就能在 Finder 中看到隐藏的文件了

如果想再次隐藏原本的隐藏文件个文件夹的话，输入

```
defaults write com.apple.finder AppleShowAllFiles FALSE ; killall Finder
```

### Mac 上有关 MySQL 的安装问题

详细见文章[mac安装mysql 的两种方法](http://www.jianshu.com/p/fd3aae701db9)

如果上述遇到的问题的话，一般就是 .bash_profile 出现问题了~  
图形化工具的话 mysql 使用；sequel pro 

忘记密码之后修改密码[reset root password](https://stackoverflow.com/questions/33033306/mysql-5-6-27-reset-root-password-no-password-field/33443921#33443921)




### 本地起一个服务器的方法：
```
python -m SimpleHTTPServer 8080 & 
```

这样就可以访问本地文件了~



### Homebrew 的安装

[官网安装](http://brew.sh/index_zh-cn.html)

### curl 的安装

[如何安装curl](https://xuhp.gitbooks.io/fragmentary-knowledge/content/mac/如何在Mac中安装libcurl.html)

