/*
 * @Date: 2024-01-11 15:41:35
 * @Description: 
 * @LastEditTime: 2024-01-11 16:25:30
 * @FilePath: \react-hook-ts\src\api\login.ts
 */
import { AxiosPromise } from 'axios';
import request from '../utils/request'
import {
  LoginFormData,
  LoginResponseData,
} from '@/types/api/system/login';


const loginApi=class loginApi{
  login(data: LoginFormData): AxiosPromise<LoginResponseData> {
    return request({
      url: '/api/v1/token',
      method: 'post',
      data: data,
      headers: {
        Authorization: 'Basic bWFsbC1hZG1pbi13ZWI6MTIzNDU2', // 客户端信息Base64明文：mall-admin-web:123456
      },
    });
  }
}

export default new loginApi()