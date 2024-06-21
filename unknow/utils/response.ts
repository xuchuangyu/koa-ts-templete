/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-06 15:25:37
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 16:52:41
 * @FilePath: \koa-api\utils\response.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { Context } from 'koa' 

/**
 * @description: 
 * @param {Context} ctx
 * @param {*} data 扩展数据
 * @param {string} msg 提示信息
 * @param {number} code 状态码
 */
function success(ctx:Context,data:any=[],msg:string='success',code:number=200){
  ctx.body={
    data,
    msg,
    code
  }
}


/**
 * @description: 
 * @param {Context} ctx
 * @param {string} msg
 * @param {*} data
 * @param {*} code
 */
function error(ctx:Context,msg:string='error',data:any=[],code=500){
  ctx.body={
    data,
    msg,
    code
  }
}

export default {
  success,
  error
}