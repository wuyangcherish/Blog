# CSS SECRET



### 使用工具

1. 检测浏览器兼容性的：[Can I Use](http://caniuse.com/)
2. 针对支持和不支持某些特性的浏览器来分别编写样式[Modernizr](https://modernizr.com/)

### 检测属性在浏览器的支持情况并且添加响应的代码

```
function testProperty(property){
	var root = document.documentElement;

	if(property in root.style){
		root.classList.add(property.toLowerCase());
		return true;
	}
	root.classList.add('no-'+property.toLowerCase());
	return false;
}
```

### 边框

#### 半透明边框

默认情况下，背景会延伸到边框所在的区域下层。所以如果我们设置的是半透明的边框和实体的背景，就会发现背景颜色从半透明的边框上面透了出来，这并不是我们想要的。

css2.1 中这就是背景的工作原理。只能这么用。

css3 中 ``background-clip`` 可以解决这个事情，其初始值为``border-box`` 但是如果不希望背景入侵边框所在区域，则把它设置为``padding-box`` 这样浏览器就会用内边距的外沿来把背景裁掉。

**background-clip** : 就是设置背景严肃（背景图片或者颜色）是否延伸到边框下面。
	* border-box : 延伸到边框的外沿【默认】
	* padding-box : 边框下无背景，延伸到被边框外沿
	* content-box : 背景裁剪到区域区外沿

支持情况: IE8以下（包括IE8）不支持。


#### 多重边框

##### box-shadow 方案

它支持逗号分隔所以可以创建任意数量的投影。

在 **chrome  safari FF** 下面都需要加前缀， IE8以下（包括IE8）不支持

不占据位置，不响应鼠标事件，如果需要。可以将其设置为``inset`` 然后增加多余的 padding 来放置。

##### outline 方案

outline 是一个属性为一个或者多个的独立的轮廓属性。

有三个属性  outline-width/ outline-style/ outline-color 

用这个来当做边框的话，相比较来说要比较灵活，可以创建虚线边框，等多种样式的边框。

支持情况: 除过 opera Mini 外都支持。

不支持圆角贴合的情况

##### 灵活的背景定位

css3 第三版本的属性对background-position 进行了扩展。允许我们指定背景图片距离任意角的偏移量。

```
background-position: bottom 20px right 10px;
```

上面的代码就是扩展后的代码。支持对每个角进行像素定位。其中 bottom right 定位的元素是以 **padding box** 为准的


支持情况 ： Firefox48(包括48）以下不支持

```
background-origin: padding-box(默认的) content-box border-box
```

改为 **content-box** 之后就会使得背景图片定位的时候空出padding的部分和内容对齐，这样就不需要改变 padding 之后还要改变图片定位了。


**calc()方案** 

支持百分比加减的操作实现从左上角开始的定位


##### 条纹背景

如果将background 设置的线性渐变背景的色标设置的足够近，那么就可以实现一个条纹的背景

支持情况： IE10(包括IE10) 以上支持。其他浏览器必须使用自定义前缀

设置渐变的时候，如果将其第二个颜色的起始位置设置为 **0** 那么在这个位置总会被浏览器代替为前一个色标的位置值。


##### 边框圆角

开发做这种圆角没有特别特殊的  用到最多的就是给四个角设置一点弧度看起来好看一些。没有过多的深入。

今天看《CSS SECREST》这张内容的时候有一些不理解的，在朋友的帮助下面记下来了
















