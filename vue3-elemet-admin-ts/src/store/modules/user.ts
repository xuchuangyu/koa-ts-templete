import { defineStore } from 'pinia';
import { UserState } from '@/types/store/user';
import {
  Base64
} from 'js-base64'
import { localStorage } from '@/utils/storage';
import { login, logout } from '@/api/login';
import { resetRouter } from '@/router';

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: localStorage.get('token') || '',
    nickname: '',
    avatar: '',
    roles: [],
    perms: [],
  }),
  actions: {
    async RESET_STATE() {
      this.$reset();
    },
    /**
     * 登录
     */
    async login(loginData: any) {
      // const response = { "code": "00000", "data": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6MiwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTY2ODM1OTYxNn0.VvcXsg5NmEeehccGjR--OxrjVwDCtyKwe2gmPaC-1js", "msg": "一切ok" }
      const response: any = await login({
        account: loginData.username.trim(),
        password: loginData.password,
        type: 103,
      })
      // 'Basic ' +  Base64.encode(token + ':')
      // const { access_token, token_type } = response.data;
      const accessToken = 'Basic ' + Base64.encode(response.token + ':');
      localStorage.set('token', accessToken);
      this.token = accessToken;
      return this.token
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
    },
    /**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
    getUserInfo() {
      return new Promise((resolve, reject) => {
        const data = { "userId": "2", "nickname": "系统管理员", "avatar": "https://s2.loli.net/2022/04/07/gw1L2Z5sPtS8GIl.gif", "roles": ["ADMIN"], "perms": ["sys:user:edit", "sys:user:delete", "sys:user:add"] }
        const { nickname, avatar, roles, perms } = data;
        if (!roles || roles.length <= 0) {
          reject('getUserInfo: roles must be a non-null array!');
        }
        this.nickname = nickname;
        this.avatar = avatar;
        this.roles = roles;
        this.perms = perms;
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
    },

    /**
     *  注销
     */
    logout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            localStorage.remove('token');
            this.RESET_STATE();
            resetRouter();
            resolve(null);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    /**
     * 清除 Token
     */
    resetToken() {
      return new Promise((resolve) => {
        localStorage.remove('token');
        this.RESET_STATE();
        resolve(null);
      });
    },
  },
});

export default useUserStore;
