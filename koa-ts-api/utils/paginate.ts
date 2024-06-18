

/**
 * @description: 
 * @param {T} data 列表数据
 * @param {number} currentPage 页码
 * @param {number} total 数据总数
 * @param {number} limit  分页每页限制多少个
 * @return {*}
 */
async function paginate<T>(Model:any, queryParams:any={}, currentPage=1, pageSize=15,  populate:string='', sortParams:any={}){
  const start=(Number(currentPage)-1)*pageSize
  const records=await Model.find(queryParams).skip(start).limit(pageSize).populate(populate).sort(sortParams)
  let total=await Model.find(queryParams).countDocuments();
  // const total= await Model.length(queryParams)
  return {
    records:records,
    currentPage,
    total,
    totalPage:Math.ceil(total/pageSize),
    pageSize,
  }
}

export default paginate