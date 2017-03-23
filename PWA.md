## PWA

### ngrok 的安装

[官方下载地址](https://ngrok.com/) 

[官方文档](https://ngrok.com/docs)


下载对应的版本之后解压即可看到一个 ngrok 的文件

这时候直接输入``ngrok`` 的话会发现这个命令不可用，因为这个要加到对应的环境变量中去；

windows 下面的做法是：直接把该 .exe 的文件拖到``windows/System32`` 这个文件夹下面即可，这时候ngrok 就可以在全局使用了。

Mac 下面的做法是：** mv ngrok /usr/local/bin**下面 这里面也是存放环境变量的地方，这样在任何的地方都可以 ngrok 这个命令了


#### 实现内网穿透

在这个文件夹下面运行

```
	jitsu install http-server
```
 
安装 http-server 相关的东西,然后运行

然后 

```
	http-server -c-1 
```

就看到这个文件下面的应用运行到了8080 的端口，这样就能访问该应用了

![启动一个http-server](http://7xlqb6.com1.z0.glb.clouddn.com/http-server)

其中 **-c-1** 参数是关闭缓存的意思，不加这个的话 sw.js 会被缓存。 


这时候就可以用 ngrok 将这个本地的网络映射出来，在手机端就可以访问这个以**ngrok.io** 结尾的连接来查看本地页面。

![ngrok](http://7xlqb6.com1.z0.glb.clouddn.com/ngrok)

其中 localhost:4040 页面是用来抓取请求详情的。打开这个网址就会看到请求的所有文件，以及请求该文件的response详情.


### Service  worker 

[饿了么 Service Worker 的相关文章](https://zhuanlan.zhihu.com/p/25524382)

[使用 service workers MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)

[w3tech 翻译 Service workers](https://www.w3ctech.com/topic/866)

### PWA manifest.json

里面的 **icons** 的数组里面 Lighthouse 建议 提供一个 **192 × 192** 的作为主屏幕的图标， **512 × 512**的作为闪屏的图标

但是由于有 1x 1.5x 3x 4x 等不同的屏幕 所以可以多些几个比如： 192 256 384 512 的都写上【必须保证最小的icon至少是192px】

[realfavicongenerator](http://realfavicongenerator.net/) 根据manifest 预览并自定义闪屏


### 问题总结

#### 开发缓存问题

一开始不知道的情况下，发现自己更改了 html css 等文件，必须强刷页面才能看到效果，或者是更改 sw.js 里面的 cache key 的值，但是这样很麻烦。

原来在 Chrome浏览器的 **Application -> Service Works** 下面有三个选项: **online，Update on reload ， Bypass for network** ;只需要勾选 **Update on reload**  就可以不那么麻烦了

#### PWA 页面性能的测试

安装[Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?utm_source=chrome-ntp-icon) 来测试PWA的性能。

打开页面点击该图标，然后点击【Generate report】就可以看到对该页面的评估。【不能打开 devtools】

