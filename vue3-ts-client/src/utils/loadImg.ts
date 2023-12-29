import { getAssetsImages } from '@/utils/index'

export function loadImg(imgList: any) {
  let num = 0;
  new Promise((resolve) => {
    if (imgList.length > 0) {
      for (let item of imgList) {
        let img = new Image()
        img.src = getAssetsImages(item)
        img.onload = function (e) {
          num++
          if (num == imgList.length) {
            resolve(true)
          }
        }
        img.onerror = function (e) {
          num++
          console.log('加载错误', e)
        }
      }
    } else {
      resolve(true)
    }
  })

}
