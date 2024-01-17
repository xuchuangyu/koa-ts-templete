/*
 * @Date: 2024-01-11 15:36:06
 * @Description: 
 * @LastEditTime: 2024-01-12 17:09:09
 * @FilePath: \react-hook-ts\src\store\modules\userStore.ts
 */
import { createSlice } from '@reduxjs/toolkit'
import { localStorage } from '@/utils/storage'
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
    setInfo(state,action){
      const {avatar,roles,perms,nickname}  = action.payload
      state.nickname=nickname
      state.roles=roles
      state.perms=perms
      state.avatar=avatar
    }
  },
})
//  异步请求部分
const {setToken,setInfo} = userStore.actions
const fetchLogin=async (loginData:any)=>{
     // const response = { "code": "00000", "data": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6MiwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTY2ODM1OTYxNn0.VvcXsg5NmEeehccGjR--OxrjVwDCtyKwe2gmPaC-1js", "msg": "一切ok" }
     const response: any = await LoginApi.login({
      username: loginData.username.trim(),
      password: loginData.password,
      type: 103,
      code: loginData.code,
      uuid: loginData.uuid,
    })
    // 'Basic ' +  Base64.encode(token + ':')
    const { access_token, token_type } = response.data;
    const accessToken = token_type + ' ' + access_token;
    localStorage.set('token', accessToken);
    setToken(accessToken)
    await getUserInfo()
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

/**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
const getUserInfo=async ()=>{
  return new Promise(async (resolve, reject) => {
    // const data = { "userId": "2", "nickname": "系统管理员", "avatar": "https://s2.loli.net/2022/04/07/gw1L2Z5sPtS8GIl.gif", "roles": ["ADMIN"], "perms": ["sys:user:edit", "sys:user:delete", "sys:user:add"] }
    const {data}=await LoginApi.getUserInfo()
    const { nickname, avatar, roles, perms } = data;
    if (!roles || roles.length <= 0) {
      reject('getUserInfo: roles must be a non-null array!');
    }
    setInfo(data)
    // this.nickname = nickname;
    // this.avatar = avatar;
    // this.roles = roles;
    // this.perms = perms;
    resolve(data);
    // .then(({ data }) => {
    //   if (!data) {
    //     return reject('Verification failed, please Login again.');
    //   }
    //   debugger

    // })
    // .catch((error) => {
    //   reject(error);
    // });
  });
}


export { fetchLogin ,getUserInfo }
const userReducer=userStore.reducer
export default userReducer