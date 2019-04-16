
var obj = {
  a: 1,
  b: 2,
  c: 3
}
var arr = ['a', 'b', 'c']
var str = 'hello'
// 枚举对象
for (var key in obj) {
  // console.log('in-->obj', obj[key])
}
// 枚举数组
// for...in 直接得到的是索引，通过索引得到值
for (var i in arr) {
  console.log('in-->arr', i, arr[i])
}
// for...of 直接得到值
for (var key of arr) {
  console.log('of-->arr', key)
  // 可以中断循环
  if (key === 'b') {
    break;
  }
}
// 循环字符串
for (var s of str) {
  console.log('of--->str', s)
}
// 循环map
let mapData = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let [key, value] of mapData) {
  console.log('map-->', key, value);
}
// 循环arguments类数组对象
(function() {
  for (let argument of arguments) {
    console.log('of--> arguments', argument);
  }
})(1, 2, 3);




// 总结： 对于纯对象的遍历，for..in更合适,for...of不可迭代；
// 对于数组的遍历，如果不需要知道索引，for...of更合适，因为还可以中断，如果需要索引，则forEach更改合适；
// 对于其他字符串，类数组，类型数组的迭代，for...in有这方面的能力，但是for...of更方便
