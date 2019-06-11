####let/const
* 块级最作用域
* 不再具备变量提升
* （编译成es5之后，任然会存在变量提升）


* let来声明一个值会被改变的变量，而使用const来声明一个值不会被改变的变量，也可以称之为常量。
   * 值为基础类型时，值指的是值本身
   * 值为引用数据类型时，值指的是该对象的引用，引用不可修改，但是，引用所指的的对象是可以改变的

#### 箭头函数
* 如果你在箭头函数中使用了this，那么该this一定就是外层的this。在ES6中，会默认采用严格模式，因此this也不会自动指向window对象了，而箭头函数本身并没有this