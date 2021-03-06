# Algorithm

没事学学算法

> 一组有序的数字，1，2，4，6，10，13，17请找到相加和为 16 的两个数字

### 思路

1. 笨办法循环，从 0 开始循环，依次和后面的数字相加，如果等于16 则返回这两个数字，因为有

2. 从两头开始遍历,如果相加大于16 则 right往回走一步，如果小于16，则left 往前走一步. 直到 left>= right 结束

具体代码见这里[Here](https://gist.github.com/wuyangcherish/9482e466718ef2d6620d1cc2e67960a5)


> 算法学习【动态规划】： 一个人上10层台阶，每一步可以跨一层，也可以跨两层，走到第十层的话会有多少种走法？

算法爱好者[动态规划](https://mp.weixin.qq.com/s/VdzEOF_ZhsMtS3KtUQwMfQ)

### 思路

假设是就差最后一步就走到了第 10 层，那么走法就有 F(10) = 前 9 层的走法数量 + 前 8 层的走法数量  -> F(9) = 前 8 层的走法数量 + 前 7 层的走法数量， 那么一次类推可得出

**F(n) = F(n-1) + F(n-2)**

F(1) 是走到第一层  有一种走法  F(2) 是第二层，有两种走法。

那么由此就可递归得到 10层的走法 【见下面源码 walkWays_1.js】

但是，那么算的话是一个二叉树的遍历，在比那里很多节点的时候，其实该节点的步数已经被计算过了，所以增大了一些重复的计算量很没有必要，所以，可以考虑在方法外面加一个保存这些计算好的值得哈希表，这样每次直接从那里取就行了 【见下面源码 walkWays_2.js】

最后的最后... 

| floor1   | floor2  |  floor3  |  floor3  |   floor4|    ... |   floorn 
| :------: | :-----: | :----:   |   :----: |   :----:|  :---: |   :----:
| 1        |    2    |    3     |   5      |     8   |   ...  |    ....


由此可看出。每一步都是前面两步的和，那么 我们就只需要每次保存前面两步的和即可~【见下面源码 walkWays_3.js】

具体代码见[Here](https://gist.github.com/wuyangcherish/36975a946d996c17801e73f3cfe1e8ab)


> 算法学习【判断数字是不是2的乘方】

算法爱好者[判断数字是不是2的乘方](https://mp.weixin.qq.com/s?__biz=MzI1MTIzMzI2MA==&mid=2650560448&idx=1&sn=b4ca3d01a438fac78be4077f270974ca&chksm=f1fee143c6896855179eff005164be47c7c662d4c8badf571a79c4acd9e2aca9fd84839ca093&scene=21#wechat_redirect)


### 思路

最笨的办法就是循环跟2的 N 次方相比，然后跟该值判断是不是相等，直到循环的变量大于该值结束循环，时间复杂度为 ``O(logn)``

还有一种思路就是 每个是 2 乘方的值转换为2进制的话都只是最高位为1  对它进行减1操作的话，会变成最高位为0 其他都为1 的值，那么这两个按位与操作的话结果为0 

那么就可以根据这个来判断是不是2的乘方，时间复杂度为 ``O(1)``


**延伸问题**　判断一个数字转换成２进制之后的１的个数

具体代码见[Here](https://gist.github.com/wuyangcherish/d7d92015b167327a1d76f785b587442f)


> 网易面试题，大致要求就是，一个人去打怪，打得过就把怪物的能力值全吃，一下子打不过，那就打死吃他们两个能量值的公约数。恩~ 就酱~  

算法爱好者[网易招聘笔试题](https://mp.weixin.qq.com/s/kBB9eUe8Y4_0okHnFL-u5w)

### 思路

遍历所有的怪兽，如果自身能量值大于等于这个怪兽的，那么直接加到自己身上，否则，自身加上他们两个的最大公约数

最大公约数的求解见[the best way to find common divisor ](https://stackoverflow.com/questions/4885537/what-is-the-fastest-way-to-find-the-gcd-of-n-numbers)

具体代码见[Here](https://gist.github.com/wuyangcherish/23b04a0c5eb8d4cb3d7692668183d391)




