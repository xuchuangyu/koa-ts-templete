import {
  LoginFormData,
  LoginResponseData,
} from '@/types/api/system/login';
import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 登录
 * @param data
 */
export function login(data: LoginFormData): AxiosPromise<LoginResponseData> {
  return request({
    url: '/api/v1/token',
    method: 'post',
    data: data,
    headers: {
      Authorization: 'Basic bWFsbC1hZG1pbi13ZWI6MTIzNDU2', // 客户端信息Base64明文：mall-admin-web:123456
    },
  });
}

/**
 * 注销
 */
export function logout() {
  return request({
    url: '/youlai-auth/oauth/logout',
    method: 'delete',
  });
}

