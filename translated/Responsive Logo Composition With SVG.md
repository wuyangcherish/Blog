## Responsive Logo Composition With SVG


Logos 是一个使用 SVG 的理想场景，因为他被设计之后必须满足多用性和通用性，最开始他们都是使用矢量图像来完成的，SVG支持媒体查询和CSS 意味着我们可以根据屏幕的尺寸来调整我们的图标。有关的文章像 [Andreas Bovens](https://dev.opera.com/blog/how-media-queries-allow-you-to-optimize-svg-icons-for-several-sizes/), [Ilya Pukhalski](https://www.smashingmagazine.com/2014/03/rethinking-responsive-svg/), [Sara Souedian](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/) and [Ana Sampaio](http://academy.bindtuning.com/responsive-logos-with-svg/).


但是如果我们想根据不同的屏幕比例来重新排列我们的 logo  元素，

![图片1-自适应图标](https://cdn.cloudfour.com/wp-content/uploads/2016/04/exampleco-composition.png)

我们可以使用两张分割开来的图片，然后通过 ``float`` , ``display`` 或者 ``position`` 属性，但是这种方式使得将两张图片缩放在一起很困难。我们也可以使用[picture元素](https://cloudfour.com/thinks/responsive-images-101-part-6-picture-element/) 但是我们必须有两张不同的图片地址，并且知道图片相对于视窗的大小

有没有一种可能利用一个单个的 SVG 元素去通过屏幕的尺寸来改变宽高比呢？

结论是： 可以，下面是一个示例：

<iframe height="320" scrolling="no" src="//codepen.io/tylersticka/embed/yOjNpY/?height=320&amp;theme-id=dark&amp;default-tab=result&amp;embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">

``<img>`` 元素的宽高都是按照百分比来定义的。注意看元素如何通过缩放来满足 ``container`` 的边缘的。当宽高比有了明显的变化的时候，它进行了重组


demo 的源码没什么关注点，神奇之处在于这个 [SVG file](https://s3-us-west-2.amazonaws.com/s.cdpn.io/62127/exampleco.svg)

让我们一步步看一下他是怎么实现的

**1. Making Our Container Responsive【将 container 变的为自适应】**

因为我们要根据容器的尺寸来改变 logo 的尺寸，所以我们不能有任何属性来定义大小或者宽高比，这就意味着我们不能写 ``viewBox`` , ``width`` , ``height``

svg 如下：

```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

**2. Adding Reusable Elements 【添加可复用元素】**

两个组合不同的 Logo 使用的是相同的资源，-- 一个六边形的图标和一串组合成 **ExampleCo** 的路径。 因为容器没有一个准确的大小，所以，我们将使用 ``<symbol>`` 元素来存储这些资源以及它们自身的 ``viewBox`` ,然后使用 **CSS** 对样式进行设置

```
<defs>
	<style>
		#emblem{
			fill: #39cccc;
		}
		#word{
			fill: #225b6d;
		}
	<style>
</defs>
<symbol id="emblem" viewBox="0 0 51 60">
	<!--(paths, etc.)-->
</symbol>
<symbol id="word" viewBox="0 0 200 26">
	<!--(paths, etc.)-->
</symbol>
```

**3. Creating "Wide" and "Tall" Compositions【创建 wide 、tall 的svg 组合】**

```
<svg id="wide" viewBox="0 0 260 60">
	<use xlink:href="#emblem" width="51"/>
	<use xlink:href="#word" width="200" x="60"/>
</svg>

<svg id="tall" viewBox="0 0 200 130">
	<use xlink:href="#emblem" width="80" x="60" height="92"/>
	<use xlink:href="#word" width="200" y="104" height="26"/>
</svg>
```

这个时候，这两个组合应该都显示在屏幕上


**4. Hiding or Showing Based on Aspect Ratio【基于屏幕宽高比来显示或者隐藏】**

让我们回到 CSS 的 ``<style>`` 元素，运用 ``visibility``属性和 ``min-aspect-ratio`` 来决定这两个组合 SVG 在每次变化后的显示或隐藏 

```
/**默认隐藏 wide **/
#wide{
	visibility: hidden;
}
@media all and (min-aspect-ratio: 3/1){
	#wide {
		visibility: visible;
	}
	#tall{
		visibility: hidden;
	}
}
```
如果元素的宽高比大于 3:1 的话，那么宽图标就上线了

**5. Displaying in Our Page**

上面就算是资源写好了，剩下的就是将资源引入到页面中了，我们还应该提供一个默认的宽度和高度来防止 css 加载失败（因为我们在 SVG 的文件中没有做任何的默认处理）

```
<img id="logo" src="logo.svg" alt="ExampleCo" width="200" height="130">
```
然后我们可以在 **CSS** 中重新定义图片的宽高了，本 Demo 用的是 百分比：

```
	#logo{
		display:block;
		width:100%;
		height:33.3%;
	}
```

**Is This a Good Idea【这是个好办法吗？】**

有时候是的，它很灵活，只需要请求一次，可缓存，支持到IE9+

即便如此，但是媒体查询和没有 ``viewBox`` 的外部 SVG 元素可能有点难度，如果需要两个以上的这种组合，我肯定会考虑用 ``<picture>`` 代替。

**Futher Reading【扩展阅读】**

* [How to Scale SVG](https://css-tricks.com/scale-svg/) by Amelia Bellamy-Royds
* [Establishing New Viewports](https://sarasoueidan.com/blog/nesting-svgs/)by Sara Soueidan
* [symbol attribute](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/symbol#专有属性)