/**
 * 表单类型声明
 */
export interface MessageFormData {
  name: string,
  contact: string,
  content: string
}

/**
 * 响应类型声明
 */
export interface ResponseData {
  rows?: any,
  count?: number,
  code: number,
  msg: string
}


/**
 * 埋点接口参数
*/
export interface PointermData {
  code: String,
  msg: string
}