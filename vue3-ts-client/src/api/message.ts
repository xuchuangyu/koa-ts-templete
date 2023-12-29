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
export function postMessageApi(data: MessageFormData): AxiosPromise<ResponseData> {
  return request({
    url: '/api/v1/message',
    method: 'post',
    data: data,

  });
}
