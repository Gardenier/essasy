##小程序开发中遇到的问题

> 原生组件层级问题(map，textarea，video，canvas)

* 原生组件层级最高，不能通过z-index控制层级。

* 可以借助cover-view组件实现简单的层级覆盖。

* cover-view组件内目前只能嵌套cover-view和cover-image组件；

* 即使借助cover-view实现的层级覆盖，会有兼容问题（ios8和android的手机出现不生效的问题）

* cover-view目前还紧支持基础的定位、布局和简单文本样式，像border、background-image、shadow啥的都不支持

* 使用cover-image时，属性src的值需要带协议的链接 如`https://`,如果写成`//` 开发者工具上显示正常，真机上不生效

* 对于视频 可以采取占位图的形式，点击占位图是播放视频，但是视频播放的时候需要根据页面设计 看是否需要固定在某个位置（不然，页面滚动还会出现层级问题）

 `so 为了更好的避免这些问题，还是需要在页面交互设计上规避下。。。。`

> 页面栈

######目前最大页面栈数是10，不同页面之间跳转时需要注意，及时消除以前的不需要的页面，否则页面栈很容易溢出了。。。
 * navigateTo: 保留当前页面，跳转
 * redirectTo: 关闭当前页，跳转
 * reLaunch: 关闭所有页面，打开
 
> e.target & e.currentTarget

######（如果通过event没有获取到值，或许就是用错了。。。）

* e.currentTarget是指注册了事件监听的对象
* e.target 是指对象里的子对象，实际触发这个事件的对象

> 图片处理

######使用oss压缩处理，否则图片太多，页面卡顿
`https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11174283.6.969.ipHnjQ`

 
