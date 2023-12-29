import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import type {
  MessageFormData,
  ResponseData
} from '@/types/api.d';

/**
 * 获取分页列表
 *
 * @param queryParams
 */
export function listCasePage(queryParams: { pageSize: number, pageNumber?: number }) {
  return request({
    url: '/api/v1/case',
    method: 'get',
    params: queryParams,
  });
}
/**
 * 获取案例图片
*/
export function getCaseImg(
  queryParams: { caseId: string, pageSize?: number, pageNumber?: number }
) {
  return request({
    url: '/api/v1/caseImg',
    method: 'get',
    params: queryParams,
  });
}

