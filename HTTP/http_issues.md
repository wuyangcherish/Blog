# HTTP

### 有关缓存： 

**200** 	强制刷新或者没有缓存时
**304**   由 last-modified/Etag 控制
**200（from cache）** expires && cache-control 【后者覆盖前者】

last-modified --> 第一次请求 URL 时，[200/last-modified] 的属性标记【在服务器端最后的修改时间】

第二次请求 URL 时，  --> 发送 **If-Modified-Since** 询问文件是否变化  ---> 没有变化【返回304】 ---> 变化了【去服务端获取】

Etag【被请求变量的实体标识】 工作原理  --> 发送 **If-None-Match** 来查询和更新， 无更新则返回 304

Expires --> 需和 **If-Modified** 结合起来使用，用于控制请求文件的有效时间。

