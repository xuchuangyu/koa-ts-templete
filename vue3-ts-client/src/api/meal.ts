import type {
  MessageFormData,
  ResponseData
} from '@/types/api.d';

import request from '@/utils/request';
import { AxiosPromise } from 'axios';
/**
 * 登录
 * @param data
 */
export function getAllMealOrPlant(): AxiosPromise<ResponseData> {
  return request({
    url: '/api/v1/meal/findAllMealOrPlant',
    method: 'get',

  });
}
