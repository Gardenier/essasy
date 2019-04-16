##页面渲染、回流、重绘  https://blog.csdn.net/xingsilong/article/details/80624765

####页面渲染
> 1. 浏览器获取到html代码解析成dom树，html中的每一个tab都是dom树的一个节点，根节点就是document对象，dom树包括了所有的html 标签，包括display:none的和通过js添加的元素
> 2. 浏览器会把所有的样式，包括css和浏览器的默认样式设置，解析成样式结构体；解析的过程会去掉浏览器不能识别的样式，比如ie会去掉-moz开头的等
> 3. dom树和样式结构体构成呈现树（render tree），render tree和dom tree类似，不同的是render tree的每一个node节点都会有自己的style样式，render tree不会包括display：none掉的节点，也不包含head节点，因为这样的节点不会用于呈现，而且也不会影响呈现；但是会包含visibility：hidden的元素，因为这类的元素是占据空间的，会影响布局。render tree中的每一个节点都成为一个盒子box，box的属性：width、height、margin、padding、border、left、top等
> 4. render tree构建完成，浏览器就可以根据render tree去呈现页面了


#### 回流
> render tree中的一部分或者全部，因为规模尺寸，布局、隐藏等因素改变（`布局改变`）导致重新构建，就是回流，（`重新布局`）
#### 重绘
> render tree中的一些元素需要更新某些设计外观、风格的属性，比如背景色，但是`不会影响布局`的，就是重绘
#### 回流&重绘
> 重绘不一定回流，但是回流一定会重绘


#### 浏览器方面
> 1. 浏览器会维护一个flush队列，把所有的回流重绘的操作放到这个队列中，等队列中的操作到了一定的数量或者是到了一定的时间，浏览器会把这个flush队列进行批处理，从而让很多次回流重绘变成一次回流重绘
> 2. 但是一些操作可能会强制浏览器提前flush队列，这样浏览器优化就起不到作用了。向浏览器获取style信息的时候，就会让浏览器flush队列，比如offsetTop、width、getComputedStyle()等，请求这些数据的时候，浏览器为了能给到精确的值，会flush队列，因为队列中可能会有影响到这些值的操作

#### 减少回流、重绘
> 1. 不要一个一个的去改变元素的样式属性，可以通过改变已经定义好的classname，如果需要动态的改变样式，使用cssText改变 `el.style.cssText += .....`
> 2. 让操作的元素‘离线处理’，（即让处理的元素不存在于render tree中）
>> 2.1 添加元素的时候，先把所有要添加的元素放到一个div中，然后把这个div添加到body中
>> 2.2 先把要操作的元素display:none掉，然后操作完成之后再把这个元素显示出来。这样只会有2次回流
> 3. 尽量少的去访问影响浏览器flush队列的属性，如果必须访问，先把读取到的这个信息缓存，然后再取缓存中的数据
> 4. 尽可能的考虑受到影响导致回流重绘的元素
