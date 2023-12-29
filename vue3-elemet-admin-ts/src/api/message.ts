import request from '@/utils/request';

/**
 * 获取订单分页列表
 *
 * @param queryParams
 */
export function listMessagePage(
  queryParams: { pageSize: number, pageNumber: number, startDate?: Date, endDate?: Date }
) {
  return request({
    url: '/api/v1/message',
    method: 'get',
    params: queryParams,
  });
}
export function listMealPage(
  queryParams: { pageSize: number, pageNumber: number, startDate?: Date, endDate?: Date }
) {
  return request({
    url: '/api/v1/meal',
    method: 'get',
    params: queryParams,
  });
}
