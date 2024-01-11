/*
 * @Date: 2024-01-11 15:36:06
 * @Description: 
 * @LastEditTime: 2024-01-11 16:30:11
 * @FilePath: \react-hook-ts\src\store\modules\userStore.ts
 */
import { createSlice } from '@reduxjs/toolkit'
import LoginApi from '@/api/login';
import {
  Base64
} from 'js-base64'

const userStore=createSlice({
  name:'user',
  initialState:{
    token:'',
    nickname:'',
    avatar:'',
    roles:[],
    perms:[], 
  },
  reducers:{
    setToken(state,actions){
        state.token=actions.payload
    },
  },
})
//  异步请求部分
const {setToken} = userStore.actions
const fetchLogin=async (loginData:any)=>{
     // const response = { "code": "00000", "data": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6MiwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTY2ODM1OTYxNn0.VvcXsg5NmEeehccGjR--OxrjVwDCtyKwe2gmPaC-1js", "msg": "一切ok" }
     const response: any = await LoginApi.login({
      account: loginData.username.trim(),
      password: loginData.password,
      type: 103,
    })
    // 'Basic ' +  Base64.encode(token + ':')
    // const { access_token, token_type } = response.data;
    const accessToken = 'Basic ' + Base64.encode(response.token + ':');
    localStorage.set('token', accessToken);
    setToken(accessToken)
    // this.token = accessToken;
    return accessToken
    // resolve(access_token);
    // const { username, password, code, uuid } = loginData;
    // return new Promise((resolve, reject) => {
    //   login({
    //     username: username.trim(),
    //     password: password,
    //     grant_type: 'captcha',
    //     code: code,
    //     uuid: uuid,
    //   })
    //     .then((response) => {
    //       const { access_token, token_type } = response.data;
    //       const accessToken = token_type + ' ' + access_token;
    //       localStorage.set('token', accessToken);
    //       this.token = accessToken;
    //       resolve(access_token);
    //     })
    //     .catch((error) => {
    //       reject(error);
    //     });
    // });
}


export { fetchLogin }
const userReducer=userStore.reducer
export default userReducer