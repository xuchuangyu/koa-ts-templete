/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-05 18:31:22
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 19:56:19
 * @FilePath: \koa-api\app\service\UserService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  User from '../model/User'

class UserService {
  async  getUser(){
    return  User.findAll()
  }
  /**
 * @description: 
 * @param {number} page
 * @param {number} limit
 */  
  getAdminListByPage(page:number,limit:number){
    return User.findAndCountAll({
      limit,
      offset:(page-1)*limit
    })
  }
}

export default new  UserService