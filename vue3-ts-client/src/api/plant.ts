import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import type {
  MessageFormData,
  ResponseData
} from '@/types/api.d';
/**
 * @param params
 */
export function getPlantList(params: { pageSize: number, pageNumber: number, type: string }): AxiosPromise<ResponseData> {
  return request({
    url: '/api/v1/plant',
    method: 'get',
    params,
  });
}


/**
 * @param params
 */
export function getFindAllGroupByType(): AxiosPromise<ResponseData> {
  return request({
    url: '/api/v1/plant/findAllGroupByType',
    method: 'get',
  });
}


