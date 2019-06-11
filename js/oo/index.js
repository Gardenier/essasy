function A (x) {
  this.x = x
}
A.prototype.x = 1
function B (x) {
  this.x = x
}
function C(x) {
  this.x = x || 'cccc'
}
B.prototype = new A()
var a = new A(2)
var b = new B()
var c = new C()
// delete a.x
delete b.x
console.log('a', a.x)
console.log('b', b.x)
console.log('c', c.x)