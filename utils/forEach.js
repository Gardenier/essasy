// forEach 只能遍历数组，遍历数组的时候无法break或者return false，会一直循环到底
var arr = [1,2,3,3,4]
arr.forEach(function(value) {
  console.log('forEach-->', value)
  if (value === 2) {
    return false
  }
})
// for...of 完全可以
for (var v of arr) {
  console.log('off-->', v)
  if (v === 2) {
    // break;
    return false
  }
}