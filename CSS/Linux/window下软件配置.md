
##  工作中遇到的问题总结

#### 终端使用 subl  打开文件

闲的没事~~~
配置下终端打开 sublime text3  然后顺便记下来

步骤如下:

*  ``cd ~``  切换到该目录下面，然后 ``ls -l`` 查看下有没有 **.bash_profile， .bashrc** 等文件。 配置是写到这两个文件中的。然后在终端启动的时候会默认的去执行这两个文件中的东东。  
*  将 ``alias subl='"/c/Program Files/Sublime Text 3/sublime_text.exe"'`` 这段话粘贴到里面 
*  然后重新打开终端即可
*  subl  就可以用了  


#### Sass在windows下面的安装

安装 SASS 首先是要有 Ruby 的, 在windows下面的话是需要用[Rubyinstaller](https://rubyinstaller.org/) 来将windows下面Ruby 的安装，文档，扩展等等都安装好。然后启动 ``gem --help`` 如果 **gem**命令可用，则说明安装成功了

接下来就是安装 SASS 了 ``gem install sass`` 即可。



