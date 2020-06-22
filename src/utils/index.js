/**
 * Created by PanJiaChen on 16/11/18.
 */
// created_at 创建时间
// stopPayTimeSecond 停止时间(多少时间倒计时)，如1小时倒计时stopPayTimeSecond==3600
export function computedLastPayTime(created_at,stopPayTimeSecond) {
  let createTime;
  let endTime;
  let clientTime;
  let lastTime;
  let int_minute;
  createTime = Date.parse(created_at) / 1000;
  endTime = createTime + stopPayTimeSecond;
  clientTime = Date.parse(new Date()) / 1000;
  lastTime = endTime - clientTime;
  int_minute;
  if(lastTime > 0){
    int_minute = Math.floor(lastTime/60);
    lastTime -= int_minute * 60;
    return int_minute+'分'+ lastTime +'秒'
  } else {
    console.log('到时间了')
    return '0分0秒'
  }
}
// 获取当前时间年月日 2020-03-16
export function addDate() {
  let nowDate = new Date();
  let date = {
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() + 1,
      date: nowDate.getDate(),
  }
  if (date.month < 10) {
    date.month = "0" + date.month;
  }

  if (date.date < 10) {
    date.date = "0" + date.date;
  }
  let dataTiem = date.month + '.' + date.date;
  return dataTiem;
}

//当前日期几月第几周及这周的日期
export function showDate(){
  var d = getMonDate();
  var ds = new Date();
  var arr = [];
  for(var i=0; i<7; i++) {
    let weekDay=getDayName(d.getDay());
    let mymonth = d.getMonth()+1;
    let myweekday = d.getDate();
    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }

    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    } 
    let date=d.getDate()+'日';
    // if(weekDay=='周一'){
    //     let beginTime=ds.getFullYear()+'-'+mymonth+'-'+myweekday;
    //     that.state.beginTime = beginTime;
    // }
    // if(weekDay=='周日'){
    //     let endTime=ds.getFullYear()+'-'+mymonth+'-'+myweekday;
    //     that.state.endTime = endTime;
    // }
    
    arr.push({weekDay: weekDay, date: date, dataTime: mymonth+'.'+myweekday});
    d.setDate(d.getDate()+1);
  }
  let month=ds.getMonth()+1;
  let weeks=getMonthWeek(ds.getFullYear(),month,ds.getDate())-1;
  //每月周一日期
  let oneDate=getMondayTime(ds.getFullYear(),month,1);
  if(ds.getDate()<oneDate){
      month=ds.getMonth();
      weeks=getWeeks(ds.getFullYear(),month);
  }
  console.log('month:',month,'weeks:',weeks);
   return {
      list:arr,
      yearDate:ds.getFullYear(),
      monthDate:month,
      month:ds.getMonth()+1,
      monthWeek:'第'+weeks+'周',
      theMonthWeek:'第'+weeks+'周'
  };
}
export function getWeeks(year, month) {
  var d = new Date();
  // 该月第一天
  d.setFullYear(year, month-1, 1);
  var w1 = d.getDay();
  if (w1 == 0) w1 = 7;
  // 该月天数
  d.setFullYear(year, month, 0);
  var dd = d.getDate();
  // 第一个周一
  let d1;
  if (w1 != 1) d1 = 7 - w1 + 2;
  else d1 = 1;
  let week_count = Math.ceil((dd-d1+1)/7);
  console.log(week_count)
  return week_count;
}
export function getWeekTime(year, month,weekday) {
  var d = new Date();
  // 该月第一天
  d.setFullYear(year, month-1, 1);
  var w1 = d.getDay();
  if (w1 == 0) w1 = 7;
  // 该月天数
  d.setFullYear(year, month, 0);
  var dd = d.getDate();
  // 第一个周一
  let d1;
  if (w1 != 1) d1 = 7 - w1 + 2;
  else d1 = 1;
  var monday = d1+(weekday-1)*7;
  var sunday = monday + 6;
  var from = year+"-"+month+"-"+monday;
  var to;
  if (sunday <= dd) {
      to = year+"-"+month+"-"+sunday;
  } else {
      d.setFullYear(year, month-1, sunday);
      let days=d.getDate();
      to = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+days;
  }
  console.log(weekday+" 从" + from + " 到 " + to + "");
}
export function getMondayTime(year, month,weekday) {
  var d = new Date();
  // 该月第一天
  d.setFullYear(year, month-1, 1);
  var w1 = d.getDay();
  if (w1 == 0) w1 = 7;
  // 该月天数
  d.setFullYear(year, month, 0);
  var dd = d.getDate();
  // 第一个周一
  let d1;
  if (w1 != 1) d1 = 7 - w1 + 2;
  else d1 = 1;
  var monday = d1+(weekday-1)*7;
  return monday;
}
export function getMonDate() {
  var d=new Date(),
      day=d.getDay(),
      date=d.getDate();
  if(day==1)
      return d;
  if(day==0)
      d.setDate(date-6);
  else
      d.setDate(date-day+1);
  return d;
}
export function getDayName(day) {
  var day=parseInt(day);
  if(isNaN(day) || day<0 || day>6)
      return false;
  var weekday=["周日","周一","周二","周三","周四","周五","周六"];
  return weekday[day];
}
//不包括跟上个月重合的部分
export function getMonthWeek(a, b, c) {
  var date = new Date(a, parseInt(b) - 1, c), w = date.getDay(), d = date.getDate();
  return Math.ceil(
      (d + 6 - w) / 7
  );
}
export function getLastDay(year,month) {
  var new_year = year;    //取当前的年份
  var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）
  if(month>12) {
      new_month -=12;        //月份减
      new_year++;            //年份增
  }
  var new_date = new Date(new_year,new_month,1);                //取当年当月中的第一天
  return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  console.log(type)
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
// 乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
export function accMul(arg1,arg2) {
  var m=0,s1=arg1.toString(),s2=arg2.toString();
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}


      