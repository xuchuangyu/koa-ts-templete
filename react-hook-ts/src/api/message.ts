/*
 * @Date: 2023-12-27 14:03:52
 * @Description: 
 * @LastEditTime: 2023-12-29 18:44:46
 * @FilePath: \react-hook-ts\src\api\message.ts
 */
import request from '../utils/request'

const MessageApi=class MessageApi{
   getGoodsList(){
    return request({
      url:'/api/v1/client/goods/list',
      method:'get',
    })
  }
}

export default new MessageApi()