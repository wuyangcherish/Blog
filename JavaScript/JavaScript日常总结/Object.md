## 面向对象 【总结一下】


----------


### Obj.defineProperty

> 没事又看了下 [Vue 深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)  然后...发现自己已经忘了这个 ``Object.defineProperty`` 肿么用了，默默打开高程再看看

部分代码如下：

```
var obj = new Object();
//添加属性
obj.name = "nametest";
obj.age = 23;
obj.sayName = function(){
	console.log(this.name)
}

```

#### 属性类型

描述了属性的各种特征，为了实现 JavaScript 引擎用的。因此 JavaScript 中不能直接访问它们。主要分为**数据属性** 和 **访问器属性**

* **数据属性**

-------------------------

[[Configurable]] : 表示能否通过 ``delete`` 删除属性从而重新定义属性，默认为 true。
[[Enumerable]] : 能否通过 ``for-in`` 循环返回属性。默认也是 true。
[[Writeable]] : 能否修改属性的值。默认为 true。
[[Value]]: 包含这个属性的数据值。默认值为 undefined

要修改这些属性就要使用 ``Object.defineProperty`` 方法。该方法接受三个参数【属性存在的对象, 属性的名字，一个描述符对象】

如下，修改 **writable** 属性之后，如果再次修改这个属性会修改不成功。其他属性也是一样的，严格模式下面会报错

```
var obj = {"name":"oldName"}

Object.defineProperty(obj,"name",{
    writable:false
})

console.log("修改前",obj.name) //修改前 oldName
obj.name="newName"
console.log("修改后",obj.name) //修改后 oldName
```
如果对象中不存在该属性就会新建该属性，省略的字段就会使用默认值

* **访问器属性**

-------------------------------

访问器的属性只能使用 ``Object.defineProperty``来定义。

访问器属性不包含数据值。它包含一对儿 ``getter`` 和 ``setter`` 函数【非必需】

读取访问器属性的时候调用的是 ``getter`` 函数，返回的是一个有效的值，默认为  undefined

写入的时候会调用``setter`` 函数，默认为 undefined

```
var obj = {}
var bValue;
Object.defineProperty(o, "b", {
  get : function(){
    return bValue;
  },
  set : function(newValue){
    bValue = newValue;
  },
  enumerable : true,
  configurable : true
});

o.b = 38;
o.b
```

上面的代码在运行 ``o.b= 38`` 的时候出发了 set 的函数，在set 的函数中将 ``38`` 赋值给了 bValue, 然后调用 ``o.b`` 的时候触发了get 的函数，返回了 bValue 的值

查看对象的某个值的情况用``Object.getOwnPropertyDescriptor(obj, attibutes)`` 来查看

```
Object.getOwnPropertyDescriptor(o,"b")

返回：

{
	configurable: false,
	enumerable: false
	get: function(){}
	set: function(){}
}
```










 


