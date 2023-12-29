import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
// import { localStorage } from '@/utils/storage';
// import useStore from '@/store';
// import {
//   Base64
// } from 'js-base64'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_PROXY_DOMAIN,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // const { user } = useStore();
    // if (user.token) {
    //   config.headers.Authorization = `${localStorage.get('token')}`;
    //   // config.headers.Authorization ='Basic ' +  Base64.encode(localStorage.get('token') + ':');
    // }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data;
    if (code === '00000' || code == 200) {
      return response.data;
    } else {
      ElMessage({
        message: msg || '系统出错',
        type: 'error'
      });
      return Promise.reject(new Error(msg || 'Error'));
    }
  },
  () => {

    return Promise.reject(new Error('Error'));
  }
);

// 导出 axios 实例
export default service;
