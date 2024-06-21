/**
 * 获取assets目录静态资源
 */
export function getAssetsImages (url = '') {
  return new URL(`../assets/${url}`, import.meta.url).href
}
export function numToString (num) {
  if (!num) {
    return '00'
  }
  num = num > 10 ? num : '0' + num
  return num
}
