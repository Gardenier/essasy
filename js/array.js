/* eslint-disabled */
var array1 = [1, 3, 2, 6, 9, 8, 7]
var array2 = [4, 5]
var array3 = []
var array4 = [1,2,2,3,3,3,6,9]
/**concat() 不会改变原数组 */
// console.log(array1.concat(array2), array1)
/**join() */
// console.log(array2.join(','), array2)
/**pop() 改变原数组，返回最后一个元素，空数组返回undefined*/
// console.log(array2.pop(), array2, array3.pop())
/**push() 改变原数组，返回新数组长度*/
// console.log(array2.push(6), array2)
var a = [...new Set(array4)]
var temp =[]
function recursion(array){
  var len = array.length
  for (var i = 0; i < len ;i ++) {
    if (typeof array[i] == 'object') { // 如若数组元素类型是object，则递归
      recursion(array[i])
    } else {
      temp.push(array[i]) // 否则添加到temp数组中
    }
  }
}
var arr = [1,[2,3],[3,2,[1,6,[3,5,'3']]]]
console.log('a', recursion(arr))
