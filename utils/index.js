
// 获取url中的参数
function getParameter () {
  let locationSearch = location.search
  let parameterList = []
  if (locationSearch.indexOf('?') !== -1) {
    let str = locationSearch.substr(1)
    let list = str.split('&')
    let len = list.length
    for (let i = 0; i < len; i++) {
      let item = list[i].split('=')
      parameterList[item[0]] = item[1]
    }
  }
  return parameterList
}
// 补零
function fillZero (n) {
  return n < 10 ? '0' + n : n
}

/**
 *日期格式化
 * @param {*} date 日期
 * @param {*} type 日期格式
 * @returns
 */
function formateDate(date, type) {
  if (!date) return date
  if (typeof date !== 'number') {
    date = date.replace(/-/g, '/')
  }
  let result = date
  let d = new Date(date)
  let y = d.getFullYear()
  let mon = d.getMonth() + 1
  let day = d.getDate()
  let h = d.getHours()
  let minu = d.getMinutes()
  let s = d.getSeconds()
  switch (type) {
    case 'yyyy-mm':
      result = y + '-' + fillZero(mon)
      break
    case 'yyyy/mm':
      result = y + '/' + fillZero(mon)
      break
    case 'yyyy/mm/dd':
      result = y + '/' + fillZero(mon) + '/' + fillZero(day)
      break
    case 'yyyy-mm-dd hh:mm':
      result = y + '-' + fillZero(mon) + '-' + fillZero(day) + ' ' + fillZero(h) + ':' + fillZero(minu)
      break
    case 'yyyy-mm-dd hh:mm:ss':
      result = y + '-' + fillZero(mon) + '-' + fillZero(day) + ' ' + fillZero(h) + ':' + fillZero(minu) + ':' + fillZero(s)
      break
    case 'yyyy-mm-dd':
    default:
      result = y + '-' + fillZero(mon) + '-' + fillZero(day)
      break
  }
  return result
}

/**
 *日期是否过期
 *
 * @param {*} date 时间
 * @param {*} flag 设置过期时间 （时间戳或者y/m/d格式）
 * @returns
 */
function isPastDue (date, flag) {
  if (!date) return false
  if (typeof date !== 'number') {
    date = date.replace(/-/g, '/')
  }
  return new Date(flag).getTime() < new Date(date).getTime()
}
/**
 * 判空
 * @param {*} obj 
 */
function isNull (obj) {
  return obj == null
}
/**
 * 字符串去空
 * @param {*} obj 
 */
function trim (obj) {
  return typeof obj === 'string' ? obj.replace(/^\s*|\s*$/g, '') : obj
}

/**
 * 数组去重
 * @param {*} obj 
 *
 */
function filterList (list) {
  if (!list || list.length === 0) return
  let l = []
  l = list.filter((item) => {
    return l.indexOf(item) !== -1 ? '' : l.push(item)
  })
  return l
}
/**
 * 判空
 * @param {*} obj 
 */
function isEmpty (obj) {
  if (!obj) return true
  if (typeof obj === 'string' && trim(obj).length === 0) return true
  return false
}
/**
 * 是否在app内（app内嵌页面）
 */
function isApp () {
  let userAgent = navigator.userAgent.toLowerCase()
  // app 的 ua的标记
  let reg = /uauaua/
  return reg.test(userAgent)
}
/**
 * 是否是Android
 */
function isAddroid () {
  return /android/i.test(navigator.userAgent)
}
/**
 * 是否是ios
 */
function isIos () {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
}
/**
 *h5页面 页面滚动时导航定位效果
 *
 * @param {*} dom 导航元素
 * @param {*} stop 目标元素的距离顶部的距离
 * @param {*} height 目标元素的高度
 */
function navChangeArea (dom, stop, height) {
  var dom = document.getElementById(dom)
  if (/android/i.test(navigator.userAgent)) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var handleNav = dom.firstElementChild
    console.log(handleNav)
    var copy = document.getElementById('copyDom')
    if (scrollTop < stop) {
      if (copy) {
        handleNav.parentNode.removeChild(copy)
      }
      handleNav.style.position = 'relative'
    } else {
      handleNav.style.position = 'fixed'
      if (!copy) {
        var el = document.createElement('div')
        el.id = 'copyDom'
        el.style.height = height + 'rem'
        handleNav.parentNode.appendChild(el)
      }
    }
  }
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    dom.classList.add('sticky')
    // console.log(dom.classList)
  }
}
export {
  getParameter,
  fillZero,
  formateDate,
  isPastDue,
  isNull,
  trim,
  isEmpty,
  isApp,
  isAddroid,
  isIos,
  filterList
}