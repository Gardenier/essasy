####双向绑定
######原理
* 采用数据劫持+订阅者-发布模式，通过Object.defineProperty()来劫持属性的setter，getter，在数据改变时发布消息给订阅者，触发相应的监听回调
* vue的双向绑定，用MVVM作为数据的绑定入口，结合Observe、compile和watcher，通过Observe观察model数据的变化，然后通过compile来解析编译模板命令，最后利用watcher搭建observer和compile之间的通信桥梁，达到数据变化->视图更新，视图变化->数据变更双向绑定的效果
