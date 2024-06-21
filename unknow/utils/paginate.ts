/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-06 17:07:37
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 19:46:51
 * @FilePath: \koa-api\utils\paginate.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description: 
 * @param {T} data 列表数据
 * @param {number} currentPage 页码
 * @param {number} total 数据总数
 * @param {number} limit  分页每页限制多少个
 * @return {*}
 */
function paginate<T>(data:T,currentPage:number=1, total:number=0 ,limit:number= 15){
  return {
    data,
    currentPage,
    total,
    totalPage:Math.ceil(total/limit),
    limit,
  }
}

export default paginate