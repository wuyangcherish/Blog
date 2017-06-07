## Algorithm

没事学学算法

> 一组有序的数字，1，2，4，6，10，13，17请找到相加和为 16 的两个数字Source Code ProSource Code Pro

思路

1. 笨办法循环，从 0 开始循环，依次和后面的数字相加，如果等于16 则返回这两个数字，因为有

2. 从两头开始遍历,如果相加大于16 则 right往回走一步，如果小于16，则left 往前走一步. 直到 left>= right 结束

具体代码见这里[Here](https://gist.github.com/wuyangcherish/9482e466718ef2d6620d1cc2e67960a5)







