/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-06 17:15:58
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 21:59:30
 * @FilePath: \koa-api\app\controller\AdminController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { Context } from "koa";
import { URLSearchParams } from "url";
class AdminController{
 async  getAdminList(ctx:Context){
     const usp= new URLSearchParams(ctx.querystring)
     let page=1,limit=15
     if(usp.get('page')!==null){
        page=Number(usp.get('page'))
     }
     if(usp.get('limit')!==null){
        limit=Number(usp.get('limit'))
     }
    // const res= await AdminService.getAdminListByPage(page,limit)
    // response.success(ctx,paginate(res.rows, page, res.count,limit))
  }
}

export default new AdminController