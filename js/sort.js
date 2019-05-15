console.log('======> 排序')
// 冒泡排序
function mp (arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var t = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = t
      }
    }
  }
  return arr
}
// 选择排序
function xz (arr) {
  var min, t;
  var len = arr.length
  for (var i = 0; i < len; i++) {
    min = i;
    for (var j = i+1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    t = arr[i]
    arr[i] = arr[min]
    arr[min]= t
  }
  return arr
}
// 快速排序
function qs (arr) {
  var len = arr.length
  // var newArr = arr
  if (len < 2) return arr
  var left=[],right=[],mid = arr.splice(Math.floor(arr.length/2),1);
  for (var i = 0;i < len -1;i++) {
    if (arr[i] < mid[0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return qs(left).concat(mid, qs(right))
}
// 插入排序
function cr (arr) {
  var len = arr.length
  for (var i = 0; i< len;i++) {
    var key = arr[i]
    var j = i - 1
    while(j >=0 && arr[j] > key) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
  }
  return arr
}
var a = [1,3,4,5,2,8,9]
console.log(cr(a))