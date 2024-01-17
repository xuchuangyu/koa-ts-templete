/**
 * 登录表单类型声明
 */
export interface LoginFormData {
  username: string;
  password: string;
  type: string | number;
  uuid:string,
  code:string
}

/**
 * 登录响应类型声明
 */
export interface LoginResponseData {
  access_token: string;
  token_type: string;
}

/**
 * 验证码类型声明
 */
export interface Captcha {
  img: string;
  uuid: string;
}


/**
 * 登录用户类型声明
 */
export interface UserInfo {
  nickname: string;
  avatar: string;
  roles: string[];
  perms: string[];
}
