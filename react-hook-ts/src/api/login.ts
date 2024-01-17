/*
 * @Date: 2024-01-11 15:41:35
 * @Description: 
 * @LastEditTime: 2024-01-12 16:40:17
 * @FilePath: \react-hook-ts\src\api\login.ts
 */

import { AxiosPromise } from 'axios';
import request from '../utils/request'
import {
  Captcha,
  UserInfo,
  LoginFormData,
  LoginResponseData,
} from '@/types/api/system/login';


const loginApi=class loginApi{
  login(data: LoginFormData): AxiosPromise<LoginResponseData> {
    return request({
      url: '/api/v1/auth/login',
      method: 'post',
      data: data,
      headers: {
        Authorization: 'Basic bWFsbC1hZG1pbi13ZWI6MTIzNDU2', // 客户端信息Base64明文：mall-admin-web:123456
      },
    });
  }
  getUserInfo(): AxiosPromise<UserInfo> {
    return request({
      url: '/api/v1/admin/users/me',
      method: 'get'
    });
  }
  /**
 * 获取图片验证码
 */
  getCaptcha(): AxiosPromise<Captcha> {
    return request({
      url: '/api/v1/auth/captcha?t=' + new Date().getTime().toString(),
      method: 'get',
    });
  }

}

export default new loginApi()