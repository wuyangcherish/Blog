## Python 基础知识摘抄

### 多线程

相关多线程的代码 [在 Gist 上](https://gist.github.com/wuyangcherish/61d34deae0ba619094f21e20ca8bc721)


### 整数比较

**is** : 比较的是2个 **id** 值是否相同，比较两个对象是否是同一个实例对象，是否指向同一个内存地址。

**==** 比较两个对象的内容是否相等，默认调用 ``__eq__()`` 的方法。


Python 内部优化 --> 把一些频繁使用的整数对象缓存起来，保存到一个叫 ``small_ints`` 的链表中, 在 python 的整个生命周期中，任何需要引用这些整数对象的地方，都不再重新创建新的对象，在 [-5,256] 之间。

### list tuple dict 

以上等都算是一个 container[可迭代]，还有 string object 等等，但凡可以返回一个迭代器的都可以称为迭代对象，每次调用 ``next()`` 实现的方法是 

（1）为下次 ``next`` 方法修改状态 
（2）为此次的调用生成返回的结果 




