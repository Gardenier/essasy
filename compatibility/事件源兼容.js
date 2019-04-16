//IE是把event事件对象作为全局对象window的一个属性；可以使用event或window.event来访问；
//FireFox和Chrome等主流浏览器是通过把【事件对象】作为【事件响应函数】的【参数】进入传入的；
document.onclick = function (e) {
  var e = e || window.event
  var target = e.target || e.srcElement
  // ......
}
返回顶部背景图片