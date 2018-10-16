// set function parseTime,formatTime to filter
export { parseTime, formatTime } from '@/utils'
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}
//时间戳转换为时间
export  function dataFormat(val) {
      if (val == "" || val == 0) return "";
      let timeMinSeconds = parseInt(val);
      function fix(num) {
        return num >= 10 ? num : "0" + num;
      }
      var date = new Date(timeMinSeconds);
      var year = date.getFullYear();
      var month = fix(date.getMonth() + 1);
      var day = fix(date.getDate());
      var hour = fix(date.getHours());
      var minute = fix(date.getMinutes());
      return year + "-" + month + "-" + day + " " + hour + ":" + minute;
 }

/* 数字 格式化*/
// export function numberFormatter(num, digits) {
//   const si = [
//     { value: 1E18, symbol: 'E' },
//     { value: 1E15, symbol: 'P' },
//     { value: 1E12, symbol: 'T' },
//     { value: 1E9, symbol: 'G' },
//     { value: 1E6, symbol: 'M' },
//     { value: 1E3, symbol: 'k' }
//   ]
//   for (let i = 0; i < si.length; i++) {
//     if (num >= si[i].value) {
//       return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
//     }
//   }
//   return num.toString()
// }

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

