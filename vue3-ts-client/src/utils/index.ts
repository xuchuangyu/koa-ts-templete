/**
 * 获取本地图片
 */
export function getAssetsImages(params: string): string {
  return new URL(`/src/assets/${params}`, import.meta.url).href
}
export function numToString(num: number | string) {
  if (!num) {
    return '00'
  }
  num = num > 10 ? num : '0' + num
  return num
}
export function scroll(id: string) {
  var scroll = document.getElementById(id) as any
  var ul = scroll.children[0] //孩子都要加[0]无论几个孩子,因为得到的是数组
  let li = ul.getElementsByTagName('li');
  console.log(li.length);
  var num = 0 //控制左侧值left
  var timer = null as any //声明定时器
  timer = setInterval(autoPlay, 20)
  function autoPlay() {
    num--
    num <= -((li.length / 2 * 220) + 5) ? (num = 0) : num //一张图宽300，四张1200，左为负
    ul.style.transform = `translateX(${num}px)`
    // ul.style.left = num + 'px'
  }
  scroll.onmouseover = function () {
    clearInterval(timer)
  }
  scroll.onmouseout = function () {
    timer = setInterval(autoPlay, 20)
  }
}


export function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}


export function userAgent() {
  let browserReg = {
    Chrome: /Chrome/,
    IE: /MSIE/,
    Firefox: /Firefox/,
    Opera: /Presto/,
    Safari: /Version\/([\d.]+).*Safari/,
    '360': /360SE/,
    QQBrowswe: /QQ/,
    Edge: /Edg/
  };
  let deviceReg = {
    iPhone: /iPhone/,
    iPad: /iPad/,
    Android: /Android/,
    Windows: /Windows/,
    Mac: /Macintosh/,
  };
  let userAgentStr = navigator.userAgent
  const userAgentObj = {
    browserName: '', // 浏览器名称
    browserVersion: '', // 浏览器版本
    osName: '', // 操作系统名称
    osVersion: '', // 操作系统版本
    deviceName: '', // 设备名称
  }
  for (let key in browserReg) {
    if (browserReg[key].test(userAgentStr)) {
      userAgentObj.browserName = key
      if (key === 'Chrome') {
        userAgentObj.browserVersion = userAgentStr.split('Chrome/')[1].split(' ')[0]
      } else if (key === 'IE') {
        userAgentObj.browserVersion = userAgentStr.split('MSIE ')[1].split(' ')[1]
      } else if (key === 'Firefox') {
        userAgentObj.browserVersion = userAgentStr.split('Firefox/')[1]
      } else if (key === 'Opera') {
        userAgentObj.browserVersion = userAgentStr.split('Version/')[1]
      } else if (key === 'Safari') {
        userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0]
      } else if (key === '360') {
        userAgentObj.browserVersion = ''
      } else if (key === 'QQBrowswe') {
        userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0]
      } else if (key === 'Edge') {
        userAgentObj.browserVersion = userAgentStr.split('Edg/')[1].split(' ')[0]
      }
    }
  }

  for (let key in deviceReg) {
    if (deviceReg[key].test(userAgentStr)) {
      userAgentObj.osName = key
      if (key === 'Windows') {
        userAgentObj.osVersion = userAgentStr.split('Windows NT ')[1].split(';')[0]
      } else if (key === 'Mac') {
        userAgentObj.osVersion = userAgentStr.split('Mac OS X ')[1].split(')')[0]
      } else if (key === 'iPhone') {
        userAgentObj.osVersion = userAgentStr.split('iPhone OS ')[1].split(' ')[0]
      } else if (key === 'iPad') {
        userAgentObj.osVersion = userAgentStr.split('iPad; CPU OS ')[1].split(' ')[0]
      } else if (key === 'Android') {
        userAgentObj.osVersion = userAgentStr.split('Android ')[1].split(';')[0]
        userAgentObj.deviceName = userAgentStr.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0]
      }
    }
  }
  return userAgentObj
}
