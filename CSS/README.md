#  CSS

##   SASS资源：

#### 资料

* [Sass中文教程](http://www.sass.hk/sass-course.html)
* [Sass相关资料汇总](https://www.w3cplus.com/sassguide/)


 

##  有关 css 动画卡顿的一些文章

####  相关文章

* [深入理解css animations 和 transition 的性能问题](http://blog.csdn.net/leer168/article/details/25917093)
* [解决 Chrome 动画卡顿办法](http://www.cnblogs.com/xdoudou/p/4524758.html)
* [前两篇文章总结出来的一篇文章](https://segmentfault.com/a/1190000006708777)

#### 卡顿的原因：

长时间执行 `JavaScript` 或者渲染一个很大的元素 导致主线程阻塞， 在此期间，它将无法响应用户的交互。

但是合成线程会尽量的去响应用户的交互，当一个页面发生变化的时候，合成线程会以 `60帧` 的间隔不断地进行页面重绘~。当然它不会管主线程准备的怎么样了，只是主线程没准备好的部分用白色的替代而已。这样的话就会产生丢帧的问题。

#### 现代浏览器

现代的浏览器一般有两个重要的线程， 这两个线程协同来渲染一个网页

主线程主要负责：

```
    运算 JavaScript
    计算 HTML 元素的 CSS 样式
    页面的布局
    将元素绘制到一个或者多个位图中
    将这些位图交给合成线程 
```

合成线程负责：

```
    通过 GPU 将位图绘制到屏幕上
    通知主线程更新页面中可见挥着即将可见的部分的位图
    计算页面中哪部分是可见的
    计算出当你在滚动页面的时候哪部分是可见的
    当你滚动页面的时候将相应位置的元素移动到可视区域
```
   
####  GPU

GPU 图形处理器 芯片有着非常专业的定位，非常擅长绘图等事情。

在这个回答 [GPU && CPU 的区别](https://www.zhihu.com/question/19903344)的话题里谈到了它主要都是干什么

#### 位图

又称为栅格图/点阵图， 是使用像素阵列来表示的图像。[位图](https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%9B%BE)


#### 有关IE 的问题

1. IE下面不支持``background-size`` 

在IE 下面不支持 background-size这个属性，所有会使得有的图片【尤其】是banner 图会居中显示而左右有留白，当然🚫，所以在IE8 下面要使用滤镜实现：

[make background-size work in IE](cn.vuejs.org/guide/instance.html)

代码如下：

```
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
src='images/logo.gif',
sizingMethod='scale');

-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(
src='images/logo.gif',
sizingMethod='scale')";
```

2. IE 下面不支持RGBA颜色

具体的实现代码还是需要**滤镜**这个神奇的东东

代码如下：

```
background:rgba(0,0,0,0.3);
filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#4cffffff', endColorstr='#4cffffff');
```

但是这样的话还是有一个问题：IE9 同时支持这两个属性，然后结果就是在IE9下面的颜色会重一些，解决办法是：

```
:root .xxx{filter:none}
```

当然还有一种写法是：**设置opacity**，然后在将内容写在另一个div 里面

```
    <div class='wrap'>
        <div class="bg"></div>
        <div class="txt"></div>
    </div>
```

然后背景色的div 和txt的div是重叠的并且是同等高度的.

宽度由``.wrap`` 来决定。当然如果父级有固定的宽度的话，``.wrap`` 宽度也可写成100%，这样更加有灵活性，可以用到不同宽度的容器中。

这个方法的最大的缺点就是高度必须是固定写死在``.wrap`` 的。因为后代元素都是绝对定位，没有办法撑开高度，所以在一些固定的高度上面试可以使用的。

对于高度不定的div还是采用第一种方法吧~ 

PS: 验证了半天得出来的看法。~  如果不对~ 以后再修改~ 先记下了

3. z-index 在IE 下面出现的问题
	* 问题描述： 在IE 下面有一个类似这样的布局

```
	<div class='parent>
		<div class="transparent">
		<div class="img-wrapper">
			<img src='../img/test.png'/>
		</div>
	</div>
```

```
	.parent{
		position: relative;
		width:300px;
		height: 400px;
		.transparent{
			position:absolute;
			width:120px;
			height:400px;
			top:0;
			left: 0; 
			z-index:999;
		}
		.img-wrap{
			position: relative;
			width:300px;
			height: 400px;
			img{
				width:100%;
				height:100%;
				position: absolute;
				top:0;
				left:0;
				z-index:11;
			}
		}
	}
```
在其他的浏览器下面是正常显示的但是一旦到了IE下面就会出现 img 遮住transparent 的情况. 由于在 IE 下面这属于两个 stacking context 在相同的情况下面才会用元素本身的 z-index 来判断， 不同的话根据父级的来判断。

上面这段话来自[cnblogs z-index 规范参考](http://www.cnblogs.com/Darren_code/archive/2012/03/05/z-index.html)

但是不知道为毛 我这个设置了父级之后还是会出现这个问题， 估计跟透明的元素什么的有点关系吧。这个以后知道了再补充

最后的解决问题是：在 transparent 的上面写了加了一个 1px 的透明像素点。然后重复铺满整个 div就OK 了。


4. IE8 一下不支持 transform 的属性

这个问题貌似不引用一些插件什么的凭它自己是支持不了了。。所以如果要写图片的水平垂直居中的话， 除非不支持 IE8，不然还是用 ``text-align`` && ``line-height`` 吧。。。




