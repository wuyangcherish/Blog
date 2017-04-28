# URL 总结

最近在做一些后端页面的时候，遇到了一些问题，其中URL 的问题先记录一下

## URL 编码的问题

页面上有一个合同的列表，点击下载的时候下载本文件，代码如下：

```
	window.location.href= config +'/download?fileName='+
	this.value.filename +'fileUrl=' + this.value.fileurl
```

其中， filename 是这个文件的文件名，有可能是英文，有可能是中文的，在IE 下面就下载出错了，

原因就是下载 url 传输编码的问题

> 以下是我找到的资料的总结

* 有关网址路径的编码

	在IE/FF/Chrome 下面都采用的是 **UTF-8** 的形式
* ？后面查询的编码

	IE -> 采用的是 **GB2312** 的编码形式
	FF -> 采用的是 **GB2312** 的编码形式 但是会加个 % 在后面
	Chrome -> 
	
* GET/POST 生成的url里面带有的汉字，这个时候网页的编码形式是格式就是什么格式的

*  ajax 请求的方式

	IE -> 采用的是 **GB2312** 的形式编码
	FF -> 采用的是 **UTF8** 的形式编码
	
	
为了统一的处理这个问题， 所以会在 **JS** 里面同意进行编码处理

一般采用 **encodeURI** or **encodeURIComponent**

这两种的区别就是前者对于 **/ ? = @ # & + $ :** 不进行编码，而后者会进行编码

