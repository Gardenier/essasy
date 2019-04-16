/* 价格千分符 */
var regPrice = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g
/* 取整 */
var regInt = /(\d+)((\.\d+)?)/
/* 取余 */
var regFl = /\d+\.(\d+)/
/* 手机号隐藏中间4位 */
var regPhone = /^(\d{3})\d{4}(\d{4})$/
/* 文字隐藏中间部分，尾部保留4个字 */
var regTxt = /^(.{4}).+(.{4})$/
console.log('你er32333'.replace(regTxt, '$1****$2'))