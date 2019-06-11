var a = [1,2,3,4,5]
var b = a.map((item)=>{
  return item*2
}).filter((item) => {
  return item > 4
})
var c = a.map((item)=> {
  return item
}).concat(6, 7)
var d = a.filter(item => {
  return item
}).concat(8)
console.log(a, d)