/*
 * @Date: 2024-01-03 14:14:52
 * @Description: 
 * @LastEditTime: 2024-01-17 16:35:51
 * @FilePath: \react-hook-ts\src\pages\Login\index.tsx
 */
import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { Button, Checkbox, Form, Input } from 'antd';
import LoginApi from '@/api/login'
import { changeMenusAction } from "@/store/modules/loginStore";
import { fetchLogin } from '@/store/modules/userStore'
import { useNavigate } from 'react-router-dom'
import { Menus } from "./data";
import './index.scss'

// eslint-disable-next-line react-hooks/rules-of-hooks


type FieldType = {
  username?: string;
  password?: string;
  code?:string;
  uuid?:string
};


const Login=()=>{
  const [form] = Form.useForm();
  const dispatch=useDispatch()
   const navigate = useNavigate()
   const [captchaBase64,setCaptchaBase64] = useState('')
   const onFinish = async (values: any) => {
    await fetchLogin(values)
    setTimeout(() => {
      // 这里调用的是刚刚上面redux导出的函数
      dispatch(changeMenusAction(Menus));
      navigate("/article");
    }, 2000);


    // // await user.login(state.loginForm)
    // navigate('/');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleCaptchaGenerate=async ()=>{
   const res:any = await LoginApi.getCaptcha()
   const { verifyCodeBase64, verifyCodeKey } = res.data;
   setCaptchaBase64(verifyCodeBase64)
   form.setFieldValue( 'uuid',verifyCodeKey );
  }
  useEffect(()=>{
    handleCaptchaGenerate();
  },[])
  return <div className="login-container">
      <Form
          name="basic"
          style={{ maxWidth: 520 }}
          form={form}
          initialValues={{ username: 'admin',password:'123456', }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="login-form"
        >
          <Form.Item<FieldType>  name="uuid"  hidden />
          <div className='title-container'>管理后台</div>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='用户名'  />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password'   />
          </Form.Item>
          <Form.Item<FieldType>
            name="code"
            rules={[{ required: true, message: 'Please input your code!' }]}
          >
              <Input addonAfter={ 
                 <img
                    src={captchaBase64}
                    onClick={handleCaptchaGenerate}
                    height="32px"
                />}  />
          </Form.Item>
 
          <Form.Item >
            <Button type="primary" htmlType="submit" block>
                登录
            </Button>
          </Form.Item>
          <div className="tips">
            <div style={{position: 'relative'}}>
              <span style={{marginRight: '20px'}}>用户名: admin</span>
              <span>密码: 123456</span>
            </div>
          </div>
        </Form>
  </div>
}

export default Login