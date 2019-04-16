###IE9浏览器下，拥有use标签到svg元素使用代理的方式绑定事件时，点击svg元素本身无法触发点击事件

#####关于这个问题，jquery开发人员也做了解答：
```
Delegated event not firing for click within SVG use element
```
#####是由于包含use标签的svg元素无法冒泡，那么直接在svg元素或者svg父元素上绑定事件就可以了，但是在涉及新增、删除等操作时，可操作的按钮都是动态添加的，如果每次添加元素都要重新绑定事件，是非常麻烦的。
#####经测试(ie9)下面两种方式可以解决这个问题
######1、pointer-events属性
######pointer-events这个神器，这是css3的新属性，虽然对于普通html元素的支持性不是太好，但对于支持svg的浏览器，基本都支持这个属性。
######通过对svg元素应用pointer-events:none，可以让svg相对点击事件“透明”，只要事件绑定到svg的父元素上，且父元素具备宽高（需要设置为inline-block,或者应用float、position:absolute等，否则ie下点不中）。
```
.i-font1 {
    display: inline-block;
}
.i-font1 .icon {
    pointer-events:none;
}
<i class="i-font1">
    <svg class="icon default" aria-hidden="true">
        <use xlink:href="#icon-weishoucang"></use>
    </svg>
    <svg class="icon hover" aria-hidden="true">
        <use xlink:href="#icon-shoucangyishoucang-copy"></use>
    </svg>
</i>
```
######2、父元素添加透明遮罩
```
i.i-font{
    position:relative;
}
i.i-font:after {
    content: '\20';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
}
<i class="i-font">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wuxingshixin"></use>
    </svg>
</i>
```