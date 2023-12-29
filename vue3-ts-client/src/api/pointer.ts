import type {
  PointermData,
  ResponseData
} from '@/types/api.d';
import { userAgent } from '@/utils/index'
import request from '@/utils/request';
import { AxiosPromise } from 'axios';
/**
 * 登录
 * @param data
 */
export function postPointerApi(data: PointermData): AxiosPromise<ResponseData> {
  return request({
    url: '/api/v1/pointer',
    method: 'post',
    data: { ...data, equipment: JSON.stringify(userAgent()), equipmentId: localStorage.getItem('uuid'), },

  });
}
