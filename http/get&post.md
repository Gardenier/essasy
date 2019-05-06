####重大区别
* get产生一个tcp数据包，get会把header和data一并发过去，服务器响应200
* post产生两个tcp数据包，会先把header发过去，服务器响应100 continue，浏览器再发送data，服务器响应200
* ps: 并不是所有的浏览器的post都会发连个包，firefox就只发一次。。。