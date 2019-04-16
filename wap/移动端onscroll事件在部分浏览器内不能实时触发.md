###移动端onscroll事件在部分浏览器内不能实时触发
####开发场景：
 * 导航 在触碰到页面顶部时固定在顶部
 *  起初监听window的onscroll事件，通过判断scrolltop给目标导航增加样式fixed
####出现的问题：
 * ios手机上会出现当页面滚动停止时，导航的定位效果才会生效
 * Android手机正常
####查阅原因
 * ios的webview内核设定了其在进行弹性滚动时，会停止所有的事件响应以及dom操作引起的页面渲染，所以onscroll不能实时响应
####解决方法
 * ios使用position的新属性sticky
 * android维持原来的方式
####ps：
 * sticky兼容性不是很好，所以需要视实际情况而定，必要的时候可以使用开源库实现（网上推荐fixed-sticky）
 * sticky生效规则：
    * 需指定top，right，bottom，left其中之一（top和bottom同时设置时top优先级高，left和right同时设置，left优先级高）
    * 任意父节点的overflow属性必须是visible
       * 原因：
          * 1、如果父节点设置了overflow：hidden，父元素是无法滚动，所以目标元素也不会有滚动然后固定的情况
          * 2、如果父节点设置了position：relative|absolute|fixed,则目标元素根据父元素定位，就不会相对于viewport定位
 * sticky介绍
    * sticky是relative和fixed两种position的混合，设置了sticky的元素首先会被当成position： relative，当位置超过设置的阈值时，会被当成position： fixed
    * 元素并不会脱离文档流，仍然保持元素在文档流的位置
