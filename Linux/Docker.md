## Docker 


### 安装

在 Macos 下面有两种安装方式

1. brew cask install docker
2. 或者直接下载**.dmg** 的文件双击安装

执行之后即可

--------------------

### 镜像加速

macos 下面点击右上角的图标然后-> 偏好设置。 然后看到

直接使用 ``git pull`` 从 docker 官网下载镜像也可以，但特别慢

使用 阿里云的镜像加速 登录之后粘贴镜像地址： 打开docker 的偏好设置，然后在里面的
``Daemon`` 里面的 ``Registry mirrors`` 下面粘贴上镜像加速的地址然后重启即可


```
git run --name webserver 80:80 -d -p ngnix

```

如果没有下载 nginx 的话会首先下载然后 创建一个容器

建好容器之后 本地访问 **http://localhost** 就会出现一个
**welcome to Ngnix** 的界面，说明容器已经建好

``docker exec xxx /bin/bash`` 可以进入命令行进行编辑

--------------------
 
### 部署一个 python + redis + Vuejs 的应用
 
这里可以构建是三个镜像  第一个是居于python2.7 的镜像构建的，第二个是启动一个redis服务器， 第三个是启动一个前端的镜像。

首先是前端的镜像，用Vuejs+Webpack 写的 直接build之后生成/dist 的目录 然后

```
FROM nginx
COPY html/dist /usr/share/nginx/html
```

用nginx 镜像作为基础镜像，然后把 ``dist/`` 目录下面的东西 COPY 到 nginx 的目录下面即可

然后是 build Dockfile 文件生成一个镜像

```
	docker build -t report-front .
```

然后生成并运行一个容器

```
	docker run -idt -p 80:80 report-front 
```

这样不加 ``--name`` 的话会自动生成一个 name 


接下来是 redis

```
	docker run -d -p 6379:6379 redis redis
```

接下来是启动 python 应用的镜像 ``Dockerfile`` 如下：

```
	FROM python:2.7
	COPY report/ report
	RUN pip install -r report/requirement.txt -q
	CMD ["python", "report/run.py"]
	EXPOSE 5000
```

其中，第二句的意思是： 从构建的上下文目录中<源路径> 复制文件到 新的一层的镜像内<目标路径>

第三句代码的 -q 是不输出

然后开始构建镜像 构建之后运行一个容器

```
	docker build -t report-server .
	
	docker run -idt -p 5000:5000 report-server report-server
```

``docker ps`` 就可以看到三个正在运行的容器

如图：
![image](http://7xlqb6.com1.z0.glb.clouddn.com/docker-2.png)

查看启动的容器是：``docker ps`` 如下图:

![image](http://7xlqb6.com1.z0.glb.clouddn.com/docker-3.png)

查看所有的容器是 ``docker ps -a``


##### PS
因为在本应用中使用了 socket.io 最后发现访问不了  原因是默认访问的地址是 localhost 所以 run 的时候要改成 ``0.0.0.0`` 

至于容器之间的互联 【redis 个report-server 的互联】

```
	docker run -idt --link redis:redis -p 5000:5000 --name report-server report-server
```

这样子 用 **--link** 连接起来

在前端的页面访问接口的话  最直接的方式就是就是写死，

比如在``condig`` 里面的 **prod.env.js** 、**dev.env.js** 里面的 **API** 上写上 'http://127.0.0.1:5000'


然后重新构建即可。


### 上传镜像

首次找一个仓库~  内网的仓库地址是：[hub.cloud.ctripcorp.com](hub.cloud.ctripcorp.com)

登录之后创建一个项目

在 docker 里面进行 

```
docker login hub.cloud.ctripcorp.com
```
进行登录 因为这个地址是 **HTTP** 的而 docker 登录的话默认是 **https** 的所以要在偏好设置里面的**Daemon**把这个连接填写到 **Insecure registries** 里面。然后就可以登录了。否则会被拒绝

接下来就是**打 标签（tag）** 了

```
docker tag <源镜像> <Image:tag>  
```
这个镜像必须是带有完整的地址的比如一个redis 的 tag 应该是：

```
docker tag redis hub.cloud.ctripcorp.com/skysea-report/redis:3.2
```
前面的地址是仓库的地址跟命名空间

不知道的话可以直接搜别人的地址前面肿么写的

最后就是 **push** 啦~

直接 ``docker push <打好 tag 的镜像>``即可，例如：

```
docker push hub.cloud.ctripcorp.com/skysea-report/report-front
```

如图
![image](http://7xlqb6.com1.z0.glb.clouddn.com/docker-1.png)


###  部署

将镜像都放到镜像的仓库中，那么登录一个服务器之后将镜像拉下来

```
	ssh <服务器地址>
	
	... 登录之后
	
	git pull <所有用到的镜像>
	
	... docker images 可以看到拉下来的镜像 
	
	名字一般都太长 可以tag 指定一个短的名字

```
如图
![image](http://7xlqb6.com1.z0.glb.clouddn.com/docker-5.png)
然后就是跑起来了， 在本台服务器上只能使用5366 和 5377 两个端口 ，所以将 ``report-front`` 放到 6366 端口，将 ``report-server`` 放到 5377 端口， redis 运行在服务器的5379 端口

```
	docker pull hub.cloud.ctripcorp.com/skysea-report/report-front:1.0 
	
	这样子将镜像都拉下来
	
	然后
	
	docker run -idt -p 6379:6379 --name redis redis:3.2 

```
其中 -idt 指的是后台运行  6379 是端口  --name 是制定的容器的名字，最后一位是 镜像名称

然后是后端的容器创建，后端要跟redis 进行容器互联，所以写法如下：

```
	docker run -idt --link redis -p 5377:5000 --name report-sever report-server:1.0
```
其中 --link 就是容器互联的一种方式  还有就是5377:5000 是端口的映射  将5000 端口映射到服务器的5377 端口

接下来是启动前端界面的容器

```
docker run -idt -p 5366:80 --name report-front report-front:1.1	
```
因为 nginx默认的是80端口所以 将ngix 的80端口映射到了服务器的5366 端口上

这样就算部署好了

因为端口的不同 所以最笨的办法是改变webpack build 之后的生产环境的 API 上面说的过那个地方 改成服务器IP 


### Nginx 反向代理

遇到跨域的请求的时候可以用 Nginx 做一个反向的代理， 如下：

```

    location /api {
        proxy_pass http://10.2.74.152:5377;
    }
    location /socket.io/ {
        proxy_pass http://10.2.74.152:5377;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
```

socket.io 如果不写的话首次会出现错误。【原因我还没懂。。。。】

**proxy_pass**  的话是反向代理的，当请求到 '/api' 的时候会默认转到 **proxy_pass** 定义的地方去。

### Redis 的持久化存储

使用数据卷是制定挂载一个本地主机的目录到容器中去

redis 默认是将数据存放到 **/data** 的文件夹下面的。所以如果防止容器移除之后数据丢失，就必须做一个映射将文件一直保存的本地

```
1. docker run -d --name redis -v /root/data:/data redis

2. docker run -d -v /root/data:/data --name redis redis:3.2 redis-server --appendonly yes
```

**root/data** 是本地的目录 **/data** 是在容器中存储数据的目录

第一种方式是将整个文件copy到外面做一个保存 但是要做一些配置才可以真正保存数据的【不太懂】

第二种方式是以命令行的形式做一个存储 


 





