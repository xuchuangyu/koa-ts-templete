/**
 * 登录表单类型声明
 */
export interface LoginFormData {
  account: string;
  password: string;
  type: string | number;
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
