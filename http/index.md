####http1.1新特性
* 1、默认持久链接节省通信量，只要客户端服务端任意一端没有明确提出断开tcp链接，就一直保持链接状态，可以发送多次http请求
* 2、管线话，客户端可以同时发送多个http请求，不用一个个等待回应
* 3、断点传送原理
   * 协议中定义了断点续传相关的Range和content-renge字段，最简单的断点续传大概：
      * 客户端下载1024k的文件，已经下载了512k
      * 网络中断，客户端请求续传，需要在http请求头中申明本次续传的片段：`Range：bytes=512000-`;这个头通知服务端从文件的512位置开始传输文件
      * 服务端收到续传请求，从文件的512k位置开始传输，并且在http头中增加`content-range:bytes=512000-/1024000`并且服务端返回的状态码是206，而不是200
####浏览器输入url之后的过程   https://blog.51cto.com/linux5588/1351007
* 1、输入url之后，解析url，检测是否合法
* 2、浏览器先检测缓存：浏览器缓存->系统缓存->路由器缓存，如果有会在屏幕中展示页面内容，没有的话继续
   * 浏览器缓存：浏览器会记录dns一段时间，因此，会先dns解析
   * 操作系统缓存：如果浏览器缓存中查询不到内容，会是系统调用操作系统，获取操作系统的记录（保存最近的dns查询记录）
   * 路由器缓存：如果上面俩都查询不到，会搜索路由器缓存
* 3、发送http请求之前，会先进行dns解析，得到ip相应的地址
* 4、浏览器向服务器发起tcp链接，经过tpc三次握手
* 5、握手成功之后，向服务器发送请求，请求数据包
* 6、服务器收到请求，将数据返给客户端
* 7、浏览器收到响应
* 8、浏览器解码响应，如果需要缓存，则存入缓存
* 9、浏览器请求获取嵌入html中的资源，对于未知的消息会弹框提示
* 10、浏览器发送异步请求
* 11、页面渲染完毕
* ps：域名解析->建立tcp链接->发送请求->服务器响应http请求，浏览器得到html代码->浏览器解析html代码，并请求资源->浏览器渲染页面

####http无状态协议
* 对处理的事物无记忆（即当客户端一次http请求之后，再一次发送http请求，http并不知道当前客户端是‘老用户’）
* 可以通过cookie解决，cookie相当于个通行证，当第一请求之后，给客户端发送一个cookie，第二次请求的时候拿着这个cookie，服务器就知道是‘老用户’了

####http优化
* tcp复用
* 内容缓存
* 压缩： 文本数据压缩，减少带宽
* ssl加速
* tcp缓冲

####跨域  https://segmentfault.com/a/1190000015597029
#### http://www.ruanyifeng.com/blog/2016/04/cors.html