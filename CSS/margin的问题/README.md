### 关于margin的一些问题总结

##### 首先是margin-top 的取值问题
    1. number: 这个值肯定是个正常的数值，一旦确定便不再改变了
    2. percentage: 这个是根据父级元素的宽度来确定的，跟自己没什么关系
        * 如果父级元素的宽度是确定的那么这个值也是一个确定的值，不管页面如果改变 
        * 如果父级元素的宽度为百分比的话 那么margin-top便不是一个固定的值 这样的话布局起来会有点困难

##### 其次是有关margin外边距合并的问题
    1. 合并的情况
        * 父级元素跟子级元素的第一个(margin-top) 以及最后一个子级元素(margin-top)
        * 兄弟元素之间的 第一个的margin-top && 第二个元素的margin-bottom会产生合并
        * 看别人写好的还有说空元素子级跟自己的上下margin合并，具体还没太懂 以后再添
        * PS: 只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。
    2. 原因：  
        * 这些margin都处于普通流中，并在同一个BFC[块级上下文,里面的布局不会对面的元素产生影响]中；
        * 这些margin没有被非空内容、padding、border 或 clear 分隔开；
    3. margin的计算方法：
        * 当两个margin都为正值的时候取最大值
 		* 当两个margin都为负值的话取绝对值最大的值
 		* 当两个margin一正一负的话负的取最大值然后跟正值相加
    4. 解决方法：
        * 父级加上一个border:　1px solid transparent 
        * 父级 overflow:hidden 这个不适合一些子级元素需要出现滚动条的情况
        * margin 改为用padding代替
    