### Chrome example list

* one 按照官方文档做的一个小例子
* Msg 桌面通知
* weather 天气查询【未布局】
* notice  星座查询的一个Chrome插件 
* hostedapp hostedapp(托管应用)
* app Packaged App(打包应用) todolist

## Chrome 扩展及应用


----------


### chrome 扩展

#### mainfest.json

其中 ``manifest_version:2`` 目前都是2，

``content_scripts`` 是跟页面交互的脚本

**content_scripts** 里面有 ``matches`` 和 ``css``  ``js`` 等文件

``permissions`` : 由于Chrome 的插件对于跨域不做限制，座椅处于安全考虑，需要在**Manifest** 的**permissions** 属性中声明需要跨域的权限,例如：**"*://www.google.com.vn/*"**


Chrome 的扩展大多都是异步非阻塞的，如果直接用``return`` 返回结果的话会得到**undefined**,这个时候就需要用回调函数			``callback``来解决这个问题

``background`` : Manifest 的这个域可以使扩展常驻后台。 里面有**scripts** , **page**, **persistent** 属性。 **scripts** 属性指定， Chrome 会在扩展启动时自动创建一个包含所有制定脚本的页面； 

扩展页面和网页间通信的时候用的是``chrome.runtime.onMessage`` 和 ``chrome.runtime.sendMessage`` 页面发起请求，然后背景页面的``js`` 文件接收请求返回数据


内容通知这一块没什么可以设计的，调用的是谷歌通知的样式，通知的有三个元素，**通知图标，长款都是48**，**通知标题**，**通知内容【不宜过长】**

该通知的内容是**background** 里面提供的，从Chrome32 的版本开始改了一下调用方式，[查看](https://developer.chrome.com/apps/notifications#event-onClosed)  之前以为桌面的东西都是要写到**content_scipts**的，导致桌面提醒一直不出来.


-------------------------


#### chrome 应用

chrome 的应用分为两种，第一种是类似标签页一样的东西，即 **Hosted App（托管应用）**. 它只有一个图标和一个**manifest.json** 文件。 安装之后点击图标即可跳转到 **manifest.json** 文件里面 **web_url** 所指的那个文件中

另一种即使点击之后新开页面窗口的**Packaged App（打包应用）**

首先这种应用的程序是在minifest.json的**app**属性中添加一个*background.js*  文件，然后在里面编写应用和代码

如下所示：
```
"app": {
	"background": {
		"scripts": ["js/background.js"]
	}
}
```

编写好了**minifest.json**之后就需要写 *background.js*
文件了：

```
chrome.app.runtime.onLaunched.addListener(function() {
  // 告诉您的应用执行的内容与方式。
});
```

例如点击图标打开一个400*600 的窗口：

```
chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create('window.html', function(){
		'bounds':{
			'width': 400,
			'height':600
		}
	})
})
```

其中第一个参数**window.html** 就是要显示的html 文件的文件名

应用首次安装或者更新的时候，会调用**onInstalled**函数，并使用存储API 存储和更新本地设置

```
chrome.runtime.onInstalled.addListener(function(){
	chrome.storage.local.set(object items, function callback);
})
```

应用关闭前清理：

```
chrome.runtime.onSuspend.addListener(function(){
	//... clean 
})
```

**TIPS**: 在开始调试的时候，先打开``chrome://flags`` 中启用 
* 实验性扩展程序 API
* 启用打包应用调试


在保存数据的时候一定要在**manifest文件上写上**

``"permissions":['storage']`` 


#### Vuejs + chrome extensions 

> 注意事项
*  在Chrome里面加载的js都不能是外链的，必须是本地的，素以必须先把文件保存到本地。Vuejs 保存到本地的文件必须是 **csp（内容安全策略）**的 下载链接为[vuejs-csp-build](https://github.com/vuejs/vue/tree/csp/dist)。不然会报错



