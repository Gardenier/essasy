##css 使用一张图片模拟loading.gif

######1、对于圆形图标，通过角度旋转实现
`
@keyframes loading-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    position absolute 
    top 87px
    left 401px
    display block
    width 35px
    height 35px
    background url('./../images/loading@2x.png') no-repeat
    background-size 100%
    z-index 1
    animation: loading-rotate 600ms infinite steps(12, start);
  }
`
######2、通过一个图标合成雪碧图，通过偏移实现
`
@keyframes loading {
    0% {
      background-position -7px -1px
    }
    100% {
      background-position -439px -1px
    }
  }
.loading {
  display block
  position absolute 
  top 87px
  left 401px
  width 35px
  height 35px
  background url('./../images/loading@2x.png') no-repeat
  background-size 481px 
  z-index 1
  animation: loading 600ms infinite steps(12, start);
}
`

