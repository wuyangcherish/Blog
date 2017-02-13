# flex 布局

## 属性:

#### flex-direction: 在父级上设置该属性，决定了主轴的方向即子级元素的排列方向

* row(默认): 横向排列,起点在左端[子级元素的宽度根据父级宽度来计算，若父级未设置宽度，则直接铺满整个屏幕宽度]
* row-reverse: 横向排列,起点在右边
* column: 垂直排列,起点在上边[同上，若父级元素有高度，则直接按照父级的高度来计算各自高度，子级设置的高度无效。若没有，则显示各自原有的高度]
* column-reverse: 垂直排列.但是起点在下面
  
* row:的排列顺序为:
  ![row](http://7xlqb6.com1.z0.glb.clouddn.com/row.png)
* row-reverse 的排列顺序为:
  ![row-reverse](http://7xlqb6.com1.z0.glb.clouddn.com/row-reverse.png)
* column 的排列顺序为:
  ![column](http://7xlqb6.com1.z0.glb.clouddn.com/column.png)
* column-reverse  的排列顺序为:
  ![column-reverse](http://7xlqb6.com1.z0.glb.clouddn.com/column-reverse.png)

#### flex-wrap 属性
* 默认是nowrap[不换行]
* wrap: 换行,从左导游从上到下的顺序排列
* 具体的情况如下:
    ![wrap](http://7xlqb6.com1.z0.glb.clouddn.com/wrap.png)

#### justify-content属性: 定义了子级元素在父级元素中整体水平排列的方式。 一共有5中属性

* flex-start: 从左向右排列
* flex-end: 从右向左排列
* center: 水平居中排列
* space-between: 在水平方向上平均摊开,但是第一个跟最后一个紧贴着边框的
* space-around: 也是水平上平均分配摊开.但是第一个和最后一个跟边框都有一定的留白[中间的间隔是两边的两倍]


#### align-items属性 : 定义的是在垂直方向[交叉轴]上的一个排列方式

* flex-start : 顶部对齐.无论这些div 的高度是否一致
* flex-end : 底部对齐,无论div是否高度一致
* center : 中轴线对齐,上下是轴对称[上下不一致则参差不齐]
* stretch : 如果项目未设置高度或者高度为auto,会将高度拉伸到跟父级的高度一样
* baseline : 第一行字基线不是在一条轴线上面的

#### align-content 属性: 主要用于多轴线的时候.也就是多行元素的时候他们同意的排列方式。

* flext-start : 从顶部开始排列
* flex-end: 贴着底部排列，最后一排一定与div 的底部相贴
* center: 所有元素都排列在父级元素中间
* space-between:  所有的行平分父级的高度
* space-around: 父级元素上下有空白，除去空白部分的高度平分

    
#### flex-grow 属性：设置单个子元素在父级所占的位置大小的

比如横向排列的元素，所有的元素都是：``flex:1`` 然后它是 ``flex-grow:3`` 那么它就是其他元素的3倍长度

#### flex-shrink 属性： 

当父级元素减小的时候，所有元素都会跟着缩小，但是如果将单个元素的该属性设置为 0 的时候，它便会保持原来的宽度不变。

#### align-self 属性: 

可以覆盖掉align-items的值对单个的元素设置垂直方向上的展示方式,设置的属性值同 align-content

#### flex-basic 属性：

分配对于空间之前，该设置元素占据的主轴空间。默认值为 auto; 设置像素值来固定宽度。


#### flex-flow: 连写的写法

```
    flex-flow: <flex-direction> | <flex-wrap>
```

#### flex 的连写

```
	flex: none | <flex-grow> <flex-shrink> ? || <flex-basis>
```

PS ： 相关demo 见[【Flex】demo](http://codepen.io/karinw/pen/apPmWX)
    
    