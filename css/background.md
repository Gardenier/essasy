####渐变色
`
.test {
  background: #4b8aef;
  background: -moz-linear-gradient(left,#4b8aef 10%,#63adf2 100%);// 10% 调整渐变色的位置
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#4b8aef), color-stop(100%,#63adf2));
  background: -webkit-linear-gradient(left,#4b8aef,#63adf2);
  background: -o-linear-gradient(left,#4b8aef,#63adf2);
  background: -ms-linear-gradient(left,#4b8aef,#63adf2);
  background: linear-gradient(left,#4b8aef,#63adf2);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b8aef', endColorstr='#63adf2',GradientType=1);
}
`
* 对于stylus无法处理的属性值，使用unquote()
*   filter: unquote('progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b8aef', endColorstr='#63adf2',GradientType=1)')