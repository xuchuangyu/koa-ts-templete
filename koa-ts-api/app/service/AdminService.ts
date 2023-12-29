/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-05 18:16:03
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 19:50:18
 * @FilePath: \koa-api\app\service\AdminService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Admin from '../model/Admin'

class AdminService{
  getAdmin(){
    return  Admin.findByPk(3)
  }
  /**
   * @description: 
   * @param {number} page
   * @param {number} limit
   */  
  getAdminListByPage(page:number,limit:number){
    return Admin.findAndCountAll()
  }
}

export default new  AdminService