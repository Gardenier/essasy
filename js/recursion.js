console.log('=======> 递归')
function fib(n) {
  if (n <= 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}
// console.log(fib(5))

function tj(n) {
  if (n == 1) return 1
  if (n == 2) return 2
  return tj(n -1) + tj (n-2)
}
// console.log(tj(10))

function jc (n) {
  if (n == 0) return 1
  return n * jc(n-1)
}
console.log()
function a (n) {
  if (n === 'https://baidu.com/') return n
  return a(encodeURI(n))
}
// console.log(jc(5))