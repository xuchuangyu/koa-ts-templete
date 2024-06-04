/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-05 10:36:33
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 21:14:48
 * @FilePath: \koa-api\app\controller\indexController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Context } from 'koa';
import UserService from '../service/UserService';
import response from '../../utils/response';


class IndexController{
  async index(ctx:Context){
    const admin=await UserService.getUser()
    response.success(ctx,admin)
  }
}

export default new IndexController;